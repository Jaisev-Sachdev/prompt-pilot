// Deterministic Prompt Template Assembler
// Takes user input + tag selections and generates a structured mega-prompt

import { TagSelections, DOMAIN_TAGS, AUDIENCE_PRESETS, TONE_PRESETS, STRUCTURE_PRESETS, LENGTH_PRESETS, DEFAULT_TAG_VALUES } from './tag-presets';
import { GoogleGenerativeAI } from '@google/generative-ai';


/**
 * Assembles a production-grade mega-prompt from user input and tag selections.
 * Uses a deterministic template - no LLM calls in Phase 1.
 */
export function assembleMegaPrompt(userInput: string, tags: TagSelections): string {
    if (!userInput.trim()) {
        return '# Start typing to generate your prompt...';
    }

    const domainConfig = DOMAIN_TAGS[tags.domainType];
    const domainLabel = domainConfig?.label || 'Strategy';

    const template = `# SYSTEM ROLE
Act as an expert in ${formatValue(tags.domainType)}.
Your specific mode is: ${formatValue(tags.tone)}.

# THE TASK
${userInput}

# CONTEXTUAL CONFIGURATION
| Parameter | Setting |
|-----------|---------|
| Target Audience | ${formatValue(tags.audience)} |
| Structural Format | ${formatValue(tags.structure)} |
| Length Constraint | ${formatValue(tags.length)} |
| ${domainLabel} | ${formatValue(tags.domainValue)} |

# EXECUTION STEPS
1. Analyze the task through the lens of the '${formatValue(tags.tone)}' persona.
2. Apply the '${formatValue(tags.structure)}' framework strictly.
3. Ensure the output resonates with '${formatValue(tags.audience)}'.
4. Deliver the result following the specified length: ${formatValue(tags.length)}.

# OUTPUT
[Your response goes here]`;

    return template;
}

/**
 * Converts snake_case values to Title Case for display
 */
function formatValue(value: string): string {
    return value
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Copies text to clipboard (browser API)
 */
export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (error) {
        console.error('Failed to copy to clipboard:', error);
        return false;
    }
}

/**
 * Predicts tag selections based on user input using Google Gemini.
 * Returns a JSON object with predicted values.
 */
export async function predictContext(userInput: string, apiKey: string = process.env.GEMINI_API_KEY || ''): Promise<TagSelections> {
    if (!userInput.trim()) {
        return DEFAULT_TAG_VALUES;
    }

    if (!apiKey) {
        console.warn('No API key provided for Context Engine. Falling back to defaults.');
        return DEFAULT_TAG_VALUES;
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash', generationConfig: { responseMimeType: "application/json" } });

        const prompt = `
        You are a Prompt Engineering Expert.
        Analyze the following user intent and predict the most suitable "Context Tags" to generate a high-quality prompt.
        
        USER INTENT: "${userInput}"
        
        AVAILABLE TAGS:
        - Audience: ${AUDIENCE_PRESETS.map(p => p.value).join(', ')}
        - Tone: ${TONE_PRESETS.map(p => p.value).join(', ')}
        - Structure: ${STRUCTURE_PRESETS.map(p => p.value).join(', ')}
        - Length: ${LENGTH_PRESETS.map(p => p.value).join(', ')}
        - Domain Type: ${Object.keys(DOMAIN_TAGS).join(', ')}
        - Domain Value: For the chosen Domain Type, pick one of its presets.

        Return a VALID JSON object with keys: audience, tone, structure, length, domainType, domainValue.
        Only use provided values.
        `;

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        try {
            const json = JSON.parse(text);
            // Validate against defaults or safe parsing could go here
            // Ensure domainValue is valid for the domainType
            const domainType = json.domainType in DOMAIN_TAGS ? json.domainType : DEFAULT_TAG_VALUES.domainType;
            // Basic validation fallback
            return {
                audience: json.audience || DEFAULT_TAG_VALUES.audience,
                tone: json.tone || DEFAULT_TAG_VALUES.tone,
                structure: json.structure || DEFAULT_TAG_VALUES.structure,
                length: json.length || DEFAULT_TAG_VALUES.length,
                domainType: domainType,
                domainValue: json.domainValue || DEFAULT_TAG_VALUES.domainValue
            };
        } catch (e) {
            console.error('Failed to parse Gemini response:', text);
            return DEFAULT_TAG_VALUES;
        }

    } catch (error) {
        console.error('Context Engine Prediction Failed:', error);
        return DEFAULT_TAG_VALUES;
    }
}
