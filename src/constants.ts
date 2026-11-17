import { Course, Topic } from './types';

export const TOPICS: Topic[] = [
  'Archaeology and anthropology',
  'The built environment',
  'Business and entrepreneurship',
  'Creative writing, literature and arts',
  'Economics, politics and society',
  'History and heritage',
  'Language and communication',
  'Mind, Health and Human Behaviour',
  'Natural sciences, environment and sustainability',
  'Philosophy, Ethics and Belief',
  'Research and study skills',
  'Technology, data and AI'
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Introduction to Archaeology',
    description: 'Explore the foundations of human history through archaeological methods and discoveries.',
    image: 'https://picsum.photos/seed/archaeology/600/400',
    availability: 'Open',
    duration: 'Short',
    durationText: '10 weeks',
    timing: 'Evening',
    format: 'In person',
    accredited: true,
    topics: ['Archaeology and anthropology', 'History and heritage']
  },
  {
    id: '2',
    title: 'Sustainable Architecture',
    description: 'Design principles for the modern built environment with a focus on ecological impact.',
    image: 'https://picsum.photos/seed/architecture/600/400',
    availability: 'Open',
    duration: 'Long',
    durationText: '1 year',
    timing: 'Daytime',
    format: 'Hybrid',
    accredited: true,
    topics: ['The built environment', 'Natural sciences, environment and sustainability']
  },
  {
    id: '3',
    title: 'Entrepreneurship for Creatives',
    description: 'Turn your creative passion into a sustainable business with practical skills and strategies.',
    image: 'https://picsum.photos/seed/business/600/400',
    availability: 'Open',
    duration: 'Short',
    durationText: '5 weeks',
    timing: 'Weekend',
    format: 'Online',
    accredited: false,
    topics: ['Business and entrepreneurship', 'Creative writing, literature and arts']
  },
  {
    id: '4',
    title: 'Creative Writing Workshop',
    description: 'Develop your voice and storytelling techniques in this intensive writing course.',
    image: 'https://picsum.photos/seed/writing/600/400',
    availability: 'Closed',
    duration: 'Short',
    durationText: '8 weeks',
    timing: 'Late Afternoon',
    format: 'In person',
    accredited: false,
    topics: ['Creative writing, literature and arts']
  },
  {
    id: '5',
    title: 'Global Politics and Society',
    description: 'Analyze contemporary political systems and their impact on global social structures.',
    image: 'https://picsum.photos/seed/politics/600/400',
    availability: 'Open',
    duration: 'Long',
    durationText: '2 years',
    timing: 'Daytime',
    format: 'Hybrid',
    accredited: true,
    topics: ['Economics, politics and society']
  },
  {
    id: '6',
    title: 'Modern History of Europe',
    description: 'A comprehensive look at the historical events that shaped modern European identity.',
    image: 'https://picsum.photos/seed/history/600/400',
    availability: 'Open',
    duration: 'Short',
    durationText: '10 weeks',
    timing: 'Evening',
    format: 'Online',
    accredited: true,
    topics: ['History and heritage']
  },
  {
    id: '7',
    title: 'Effective Communication Skills',
    description: 'Master the art of verbal and non-verbal communication for professional success.',
    image: 'https://picsum.photos/seed/communication/600/400',
    availability: 'Open',
    duration: 'Short',
    durationText: '3 days',
    timing: 'Daytime',
    format: 'Online',
    accredited: false,
    topics: ['Language and communication', 'Business and entrepreneurship']
  },
  {
    id: '8',
    title: 'Psychology of Human Behaviour',
    description: 'Understand the mental processes and social factors that drive human actions.',
    image: 'https://picsum.photos/seed/psychology/600/400',
    availability: 'Open',
    duration: 'Short',
    durationText: '10 weeks',
    timing: 'Evening',
    format: 'In person',
    accredited: true,
    topics: ['Mind, Health and Human Behaviour']
  },
  {
    id: '9',
    title: 'Environmental Sustainability',
    description: 'Practical solutions for environmental challenges in the 21st century.',
    image: 'https://picsum.photos/seed/environment/600/400',
    availability: 'Open',
    duration: 'Long',
    durationText: '1 year',
    timing: 'Weekend',
    format: 'Hybrid',
    accredited: true,
    topics: ['Natural sciences, environment and sustainability']
  },
  {
    id: '10',
    title: 'Ethics in the Digital Age',
    description: 'Explore the moral implications of technology, AI, and digital connectivity.',
    image: 'https://picsum.photos/seed/ethics/600/400',
    availability: 'Open',
    duration: 'Short',
    durationText: '6 weeks',
    timing: 'Late Afternoon',
    format: 'Online',
    accredited: false,
    topics: ['Philosophy, Ethics and Belief', 'Technology, data and AI']
  },
  {
    id: '11',
    title: 'Advanced Research Methods',
    description: 'A deep dive into qualitative and quantitative research techniques for academics.',
    image: 'https://picsum.photos/seed/research/600/400',
    availability: 'Closed',
    duration: 'Long',
    durationText: '1 year',
    timing: 'Daytime',
    format: 'In person',
    accredited: true,
    topics: ['Research and study skills']
  },
  {
    id: '12',
    title: 'Artificial Intelligence Fundamentals',
    description: 'Learn the basics of machine learning, neural networks, and AI applications.',
    image: 'https://picsum.photos/seed/ai/600/400',
    availability: 'Open',
    duration: 'Short',
    durationText: '10 weeks',
    timing: 'Evening',
    format: 'Online',
    accredited: true,
    topics: ['Technology, data and AI']
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    text: 'What is your primary goal for studying?',
    options: [
      { id: 'A', text: 'Personal interest or hobby' },
      { id: 'B', text: 'Professional development / Upskilling' },
      { id: 'C', text: 'Career change or transition' },
      { id: 'D', text: 'Academic progression / Higher degree' },
      { id: 'E', text: 'Gaining a formal qualification' }
    ]
  },
  {
    id: 2,
    text: 'What is your preferred course duration and intensity?',
    options: [
      { id: 'A', text: 'Bite-sized (Day schools or weekends)' },
      { id: 'B', text: 'Weekly classes (1-2 terms)' },
      { id: 'C', text: 'Intensive short courses (1-2 weeks)' },
      { id: 'D', text: 'Long-term study (1-2 years+)' },
      { id: 'E', text: 'Flexible / Self-paced' }
    ]
  },
  {
    id: 3,
    text: 'When are you most available to study?',
    options: [
      { id: 'A', text: 'Weekday mornings' },
      { id: 'B', text: 'Weekday afternoons' },
      { id: 'C', text: 'Weekday evenings' },
      { id: 'D', text: 'Weekends' },
      { id: 'E', text: 'Anytime (On-demand/Recorded)' }
    ]
  },
  {
    id: 4,
    text: 'Which learning format works best for you?',
    options: [
      { id: 'A', text: 'In-person (Oxford-based)' },
      { id: 'B', text: 'Online (Live/Synchronous)' },
      { id: 'C', text: 'Online (Self-paced/Asynchronous)' },
      { id: 'D', text: 'Hybrid (Mix of in-person and online)' }
    ]
  },
  {
    id: 5,
    text: 'Which subject areas fascinate you?',
    options: TOPICS.map((topic, index) => ({
      id: String.fromCharCode(65 + index),
      text: topic
    }))
  }
];
