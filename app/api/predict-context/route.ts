
import { NextRequest, NextResponse } from 'next/server';
import { predictContext } from '@/lib/prompt-assembler';

export const runtime = 'edge';

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export async function POST(req: NextRequest) {
    try {
        // 1. Rate Limiting (Basic)
        // In a serverless/edge env, this map might reset frequently, which is actually fine for a basic safeguard.
        // For distinct users, we'd need a real store like Vercel KV or Upstash.

        // Get IP (this might vary based on hosting, but 'x-forwarded-for' is standard)
        const ip = req.headers.get('x-forwarded-for') || 'unknown';
        const now = Date.now();
        const WINDOW_SIZE = 60 * 1000; // 1 minute
        const MAX_REQUESTS = 10; // 10 requests per minute per IP

        const record = rateLimitMap.get(ip) || { count: 0, lastReset: now };

        if (now - record.lastReset > WINDOW_SIZE) {
            record.count = 0;
            record.lastReset = now;
        }

        if (record.count >= MAX_REQUESTS) {
            return NextResponse.json(
                { error: 'Rate limit exceeded. Please try again later.' },
                { status: 429 }
            );
        }

        record.count++;
        rateLimitMap.set(ip, record);


        // Parse the request body
        const body = await req.json().catch(() => ({}));
        const { userInput } = body;

        // Basic validation
        if (!userInput || typeof userInput !== 'string') {
            return NextResponse.json(
                { error: 'Invalid or missing "userInput"' },
                { status: 400 }
            );
        }

        // Safety check for length to prevent abuse/errors
        if (userInput.length > 5000) {
            return NextResponse.json(
                { error: 'Input too long' },
                { status: 400 }
            );
        }

        // Call the prediction logic
        // Pass API Key explicitly to ensure it works in Edge runtime
        const apiKey = process.env.GEMINI_API_KEY;
        const predictions = await predictContext(userInput, apiKey);

        return NextResponse.json(predictions);
    } catch (error) {
        console.error('Prediction API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
