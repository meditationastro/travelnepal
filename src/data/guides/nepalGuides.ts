export type GuideSection = {
  heading: string;
  body?: string;
  bullets?: string[];
  qa?: { q: string; a: string }[];
};

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  emoji: string;
  tags: string[];
  sections: GuideSection[];
};

export const NEPAL_GUIDES: Guide[] = [] as unknown as Guide[];
