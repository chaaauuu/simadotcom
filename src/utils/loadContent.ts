import { load } from 'js-yaml';
import type { PortfolioContent } from '@/types/content';

export async function loadContent(): Promise<PortfolioContent> {
  try {
    const response = await fetch('/content.yaml');
    if (!response.ok) {
      throw new Error(`Failed to fetch content.yaml: ${response.statusText}`);
    }
    const yamlText = await response.text();
    const content = load(yamlText) as PortfolioContent;
    return content;
  } catch (error) {
    console.error('Error loading content:', error);
    throw error;
  }
}
