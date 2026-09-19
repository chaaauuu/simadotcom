// About Section
export interface AboutData {
  name: string;
  photoUrl: string;
  photoAlt: string;
  bio: string[];
}

// Experience Section
export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  dateRange: string;
  description: string;
  highlights?: string[];
  link?: string;
}

// Education Section
export interface EducationItem {
  id: string;
  institution: string;
  fieldOfStudy: string;
  dateRange: string;
}

// Art Practice Section
export interface ArtPracticeItem {
  id: string;
  title: string;
  author?: string;
  imageUrl: string;
  imageAlt: string;
  link?: string;
}

// Root Content Interface
export interface PortfolioContent {
  about: AboutData;
  experience: ExperienceItem[];
  education: EducationItem[];
  artPractice: ArtPracticeItem[];
}
