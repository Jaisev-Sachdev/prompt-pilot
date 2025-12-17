// Tag Presets Configuration
// Defines all possible tag categories and their preset values

export type TagCategory = 'audience' | 'tone' | 'structure' | 'length' | 'domain';

export interface TagPreset {
  label: string;
  value: string;
  description?: string;
}

export interface DomainTag {
  label: string;
  presets: TagPreset[];
}

// Universal Tags (Always Present)
export const AUDIENCE_PRESETS: TagPreset[] = [
  { label: 'General Public', value: 'general_public', description: 'Everyday readers' },
  { label: 'Expert', value: 'expert', description: 'Subject matter experts' },
  { label: '5-Year-Old', value: 'five_year_old', description: 'Very simple explanations' },
  { label: 'C-Suite', value: 'c_suite', description: 'Executive leadership' },
  { label: 'Hiring Manager', value: 'hiring_manager', description: 'Recruiters/HR' },
  { label: 'Skeptic', value: 'skeptic', description: 'Needs strong evidence' },
];

export const TONE_PRESETS: TagPreset[] = [
  { label: 'Neutral', value: 'neutral' },
  { label: 'Professional', value: 'professional' },
  { label: 'Witty', value: 'witty' },
  { label: 'Empathetic', value: 'empathetic' },
  { label: 'Urgently Persuasive', value: 'urgently_persuasive' },
  { label: 'Confrontational', value: 'confrontational' },
];

export const STRUCTURE_PRESETS: TagPreset[] = [
  { label: 'Standard Prose', value: 'standard_prose' },
  { label: 'Bullet Points', value: 'bullet_points' },
  { label: 'Essay (Intro/Body/Conclusion)', value: 'essay' },
  { label: 'Story (3-Act)', value: 'story_three_act' },
  { label: 'Step-by-Step', value: 'step_by_step' },
];

export const LENGTH_PRESETS: TagPreset[] = [
  { label: 'Tweet-sized (~280 chars)', value: 'tweet' },
  { label: 'Short Email (~200 words)', value: 'short_email' },
  { label: 'Blog Post (~1000 words)', value: 'blog_post' },
  { label: 'Long-form (~2500+ words)', value: 'long_form' },
];

// Dynamic Domain Tags (Context Dependent)
export const DOMAIN_TAGS: Record<string, DomainTag> = {
  persuasion: {
    label: 'Persuasion Strategy',
    presets: [
      { label: 'Logical Argument (Facts & Reason)', value: 'logical_argument' },
      { label: 'Emotional Appeal (Feelings)', value: 'emotional_appeal' },
      { label: 'Social Proof ("Others are doing it")', value: 'social_proof' },
      { label: 'Expert Authority', value: 'authority' },
      { label: 'Urgency (Limited Time/FOMO)', value: 'urgency' },
      { label: 'Benefit-Driven ("What\'s in it for me?")', value: 'benefit_driven' },
      { label: 'Storytelling / Narrative', value: 'storytelling' },
      { label: 'Common Ground / Relatability', value: 'common_ground' },
      { label: 'Data & Statistics', value: 'data_stats' },
    ],
  },
  narrative: {
    label: 'Narrative Style',
    presets: [
      { label: "Show Don't Tell", value: 'show_dont_tell' },
      { label: 'Stream of Consciousness', value: 'stream_consciousness' },
      { label: 'Dialogue-Heavy', value: 'dialogue_heavy' },
      { label: 'Descriptive/Flowery', value: 'descriptive' },
    ],
  },
  depth: {
    label: 'Complexity Level',
    presets: [
      { label: 'Surface/Overview', value: 'surface' },
      { label: 'Undergraduate Level', value: 'undergraduate' },
      { label: 'PhD/Technical', value: 'phd_technical' },
      { label: 'ELI5 (Explain Like I\'m 5)', value: 'eli5' },
    ],
  },
};

// Default selections (used when no AI prediction yet)
export const DEFAULT_TAG_VALUES = {
  audience: 'general_public',
  tone: 'professional',
  structure: 'standard_prose',
  length: 'short_email',
  domainType: 'persuasion',
  domainValue: 'value_prop',
};

export interface TagSelections {
  audience: string;
  tone: string;
  structure: string;
  length: string;
  domainType: keyof typeof DOMAIN_TAGS;
  domainValue: string;
}
