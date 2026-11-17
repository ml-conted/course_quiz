export type Availability = 'Open' | 'Closed';
export type Duration = 'Short' | 'Long';
export type Timing = 'Daytime' | 'Weekend' | 'Late Afternoon' | 'Evening';
export type Format = 'In person' | 'Online' | 'Hybrid';
export type Topic = 
  | 'Archaeology and anthropology'
  | 'The built environment'
  | 'Business and entrepreneurship'
  | 'Creative writing, literature and arts'
  | 'Economics, politics and society'
  | 'History and heritage'
  | 'Language and communication'
  | 'Mind, Health and Human Behaviour'
  | 'Natural sciences, environment and sustainability'
  | 'Philosophy, Ethics and Belief'
  | 'Research and study skills'
  | 'Technology, data and AI';

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  availability: Availability;
  duration: Duration;
  durationText: string;
  timing: Timing;
  format: Format;
  accredited: boolean;
  topics: Topic[];
}

export interface QuizAnswer {
  questionId: number;
  answerId: string;
}

export type Language = 'en' | 'es' | 'fr' | 'zh';
