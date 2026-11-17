/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronRight, 
  ChevronLeft, 
  Globe, 
  Clock, 
  Calendar, 
  MapPin, 
  Award, 
  X, 
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Sparkles,
  Building2,
  Briefcase,
  PenTool,
  TrendingUp,
  Library,
  Languages,
  Brain,
  Leaf,
  Lightbulb,
  Cpu,
  History as HistoryIcon,
  Loader2,
  PartyPopper,
  Heart,
  Filter,
  Image as ImageIcon
} from 'lucide-react';
import { Course, Topic, QuizAnswer, Language } from './types';
import { COURSES, QUIZ_QUESTIONS, TOPICS } from './constants';

const OXFORD_BLUE = '#000000';
const OXFORD_ACCENT = '#333333';
const OXFORD_BG = '#ffffff';

const TRANSLATIONS = {
  en: {
    title: 'Oxford Lifelong Learning',
    subtitle: 'Find your next academic adventure',
    startQuiz: 'Take the Course Finder Quiz',
    browseAll: 'Browse All Courses',
    quizTitle: 'Course Finder Quiz',
    next: 'Next',
    back: 'Back',
    seeResults: 'See My Recommendations',
    resultsTitle: 'Recommended for You',
    noResults: 'No courses match your exact criteria. Try browsing all courses.',
    resetQuiz: 'Retake Quiz',
    availability: 'Availability',
    duration: 'Duration',
    timing: 'Timing',
    format: 'Format',
    accredited: 'Accredited',
    notAccredited: 'Non-accredited',
    open: 'Open to applications',
    closed: 'Closed to applications',
    viewDetails: 'View Details',
    close: 'Close',
    applyNow: 'Apply Now',
    language: 'Language',
    calculating: 'Finding your perfect match...',
    calculatingSub: 'Our academic advisors are reviewing our 1,000+ courses just for you.',
    celebration: 'We found some great matches!',
    favorites: 'My Saved Courses',
    noFavorites: 'You haven\'t saved any courses yet. Explore our catalog and click the heart to save them!',
    loadMore: 'Load More Courses',
    filters: 'Filters',
    allSubjects: 'All Subjects',
    allTimings: 'All Timings',
    allDurations: 'All Durations',
    accreditation: 'Accreditation',
    allAccreditation: 'All',
    accreditedOnly: 'Accredited',
    nonAccreditedOnly: 'Non-accredited',
    searchBtn: 'Search',
    bodleyTitle: 'Sir Thomas Bodley',
    coachStep1: 'Ah, a seeker of knowledge! Pray, tell me, what is the grand purpose of your quest?',
    coachStep2: 'Time is the most precious of all libraries. How much of it shall we dedicate to your studies?',
    coachStep3: 'The sun and moon both witness our labors. When does your mind shine brightest?',
    coachStep4: 'In my day, we had only parchment and ink. How do you wish to receive your wisdom?',
    coachStep5: 'A vast garden of disciplines! Which of these flowers shall we pluck for your bouquet?'
  },
  es: {
    title: 'Aprendizaje Permanente en Oxford',
    subtitle: 'Encuentra tu próxima aventura académica',
    startQuiz: 'Hacer el Cuestionario de Cursos',
    browseAll: 'Ver Todos los Cursos',
    quizTitle: 'Cuestionario de Cursos',
    next: 'Siguiente',
    back: 'Atrás',
    seeResults: 'Ver Mis Recomendaciones',
    resultsTitle: 'Recomendado para Ti',
    noResults: 'No hay cursos que coincidan exactamente. Intenta ver todos los cursos.',
    resetQuiz: 'Reiniciar Cuestionario',
    availability: 'Disponibilidad',
    duration: 'Duración',
    timing: 'Horario',
    format: 'Formato',
    accredited: 'Acreditado',
    notAccredited: 'No acreditado',
    open: 'Abierto para solicitudes',
    closed: 'Cerrado para solicitudes',
    viewDetails: 'Ver Detalles',
    close: 'Cerrar',
    applyNow: 'Aplicar Ahora',
    language: 'Idioma',
    calculating: 'Buscando tu combinación perfecta...',
    calculatingSub: 'Nuestros asesores académicos están revisando nuestros más de 1,000 cursos solo para ti.',
    celebration: '¡Encontramos excelentes coincidencias!',
    favorites: 'Mis Cursos Guardados',
    noFavorites: 'Aún no has guardado ningún curso. ¡Explora nuestro catálogo y haz clic en el corazón para guardarlos!',
    loadMore: 'Cargar Más Cursos',
    filters: 'Filtros',
    allSubjects: 'Todos los Temas',
    allTimings: 'Todos los Horarios',
    allDurations: 'Todas las Duraciones',
    accreditation: 'Acreditación',
    allAccreditation: 'Todos',
    accreditedOnly: 'Acreditado',
    nonAccreditedOnly: 'No acreditado',
    searchBtn: 'Buscar',
    bodleyTitle: 'Sir Thomas Bodley',
    coachStep1: '¡Ah, un buscador de conocimiento! Dime, ¿cuál es el gran propósito de tu búsqueda?',
    coachStep2: 'El tiempo es la más preciada de todas las bibliotecas. ¿Cuánto dedicaremos a tus estudios?',
    coachStep3: 'El sol y la luna son testigos de nuestras labores. ¿Cuándo brilla más tu mente?',
    coachStep4: 'En mis tiempos, solo teníamos pergamino y tinta. ¿Cómo deseas recibir tu sabiduría?',
    coachStep5: '¡Un vasto jardín de disciplinas! ¿Cuál de estas flores arrancaremos para tu ramo?'
  },
  fr: {
    title: 'Apprentissage Tout au Long de la Vie à Oxford',
    subtitle: 'Trouvez votre prochaine aventure académique',
    startQuiz: 'Faire le Questionnaire de Cours',
    browseAll: 'Parcourir Tous les Cours',
    quizTitle: 'Questionnaire de Cours',
    next: 'Suivant',
    back: 'Retour',
    seeResults: 'Voir Mes Recommandations',
    resultsTitle: 'Recommandé pour Vous',
    noResults: 'Aucun cours ne correspond exactement. Essayez de tout parcourir.',
    resetQuiz: 'Recommencer le Questionnaire',
    availability: 'Disponibilité',
    duration: 'Durée',
    timing: 'Horaire',
    format: 'Format',
    accredited: 'Accrédité',
    notAccredited: 'Non accrédité',
    open: 'Ouvert aux candidatures',
    closed: 'Fermé aux candidatures',
    viewDetails: 'Voir les Détails',
    close: 'Fermer',
    applyNow: 'Postuler Maintenant',
    language: 'Langue',
    calculating: 'Recherche de votre correspondance parfaite...',
    calculatingSub: 'Nos conseillers pédagogiques examinent nos plus de 1 000 cours rien que pour vous.',
    celebration: 'Nous avons trouvé d\'excellentes correspondances !',
    favorites: 'Mes Cours Enregistrés',
    noFavorites: 'Vous n\'avez pas encore enregistré de cours. Explorez notre catalogue et cliquez sur le cœur pour les enregistrer !',
    loadMore: 'Charger Plus de Cours',
    filters: 'Filtres',
    allSubjects: 'Tous les Sujets',
    allTimings: 'Tous les Horaires',
    allDurations: 'Toutes les Durées',
    accreditation: 'Accréditation',
    allAccreditation: 'Tous',
    accreditedOnly: 'Accrédité',
    nonAccreditedOnly: 'Non accrédité',
    searchBtn: 'Rechercher',
    bodleyTitle: 'Sir Thomas Bodley',
    coachStep1: 'Ah, un chercheur de savoir ! Dites-moi, quel est le grand but de votre quête ?',
    coachStep2: 'Le temps est la plus précieuse de toutes les bibliothèques. Combien en consacrerons-nous à vos études ?',
    coachStep3: 'Le soleil et la lune sont tous deux témoins de nos labeurs. Quand votre esprit brille-t-il le plus ?',
    coachStep4: 'À mon époque, nous n\'avions que du parchemin et de l\'encre. Comment souhaitez-vous recevoir votre sagesse ?',
    coachStep5: 'Un vaste jardin de disciplines ! Laquelle de ces fleurs cueillerons-nous pour votre bouquet ?'
  },
  zh: {
    title: '牛津终身学习',
    subtitle: '寻找您的下一个学术冒险',
    startQuiz: '参加课程寻找测验',
    browseAll: '浏览所有课程',
    quizTitle: '课程寻找测验',
    next: '下一步',
    back: '返回',
    seeResults: '查看我的推荐',
    resultsTitle: '为您推荐',
    noResults: '没有完全符合条件的课程。请尝试浏览所有课程。',
    resetQuiz: '重新开始测验',
    availability: '状态',
    duration: '时长',
    timing: '时间',
    format: '形式',
    accredited: '认证课程',
    notAccredited: '非认证课程',
    searchBtn: '搜索',
    open: '开放申请',
    closed: '停止申请',
    viewDetails: '查看详情',
    close: '关闭',
    applyNow: '立即申请',
    language: '语言',
    calculating: '正在为您寻找完美匹配...',
    calculatingSub: '我们的学术顾问正在为您审阅 1,000 多门课程。',
    celebration: '我们为您找到了一些绝佳的匹配！',
    favorites: '我的收藏课程',
    noFavorites: '您还没有收藏任何课程。浏览我们的目录并点击心形图标来收藏它们！',
    loadMore: '加载更多课程',
    filters: '筛选',
    allSubjects: '所有学科',
    allTimings: '所有时间',
    allDurations: '所有时长',
    accreditation: '认证状态',
    allAccreditation: '全部',
    accreditedOnly: '已认证',
    nonAccreditedOnly: '未认证',
    bodleyTitle: '托马斯·博德利爵士',
    coachStep1: '啊，一位知识的寻求者！请告诉我，你追求的宏伟目标是什么？',
    coachStep2: '时间是所有图书馆中最珍贵的。我们要为你的学习投入多少时间？',
    coachStep3: '日月见证我们的辛劳。你的思想在什么时候最闪耀？',
    coachStep4: '在我的时代，我们只有羊皮纸和墨水。你希望如何获得智慧？',
    coachStep5: '一个广阔的学科花园！我们要为你的花束采摘哪一朵花？'
  }
};

function CourseCard({ course, favorites, toggleFavorite, setSelectedCourse, t }: any) {
  return (
    <motion.div 
      layoutId={course.id}
      onClick={() => setSelectedCourse(course)}
      className="recommendation-card flex flex-col relative cursor-pointer group"
    >
      <button 
        onClick={(e) => toggleFavorite(e, course.id)}
        className="absolute top-2 right-2 z-10 p-1.5 bg-white border border-primary hover:bg-primary hover:text-white transition-colors rounded-full"
      >
        <Heart className={`w-4 h-4 ${favorites.includes(course.id) ? 'fill-primary' : 'text-primary'}`} />
      </button>
      <div className="recommendation-image relative aspect-video overflow-hidden bg-white flex items-center justify-center border-b-2 border-primary">
        <ImageIcon className="w-10 h-10 text-primary/20" />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase">
            {course.availability === 'Open' ? t.open : t.closed}
          </span>
        </div>
      </div>
      <div className="recommendation-content p-4 flex-1 flex flex-col">
        <h3 className="recommendation-title font-bold text-lg leading-tight mb-2">
          {course.title}
        </h3>
        <p className="recommendation-meta text-xs text-primary/70 mb-4 line-clamp-2">
          {course.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-primary/20">
          <div className="flex items-center gap-1 text-[10px] font-bold uppercase">
            <Clock className="w-3 h-3" />
            {course.durationText}
          </div>
          <span className="font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            {t.viewDetails}
            <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

const TOPIC_ICONS: Record<string, React.ReactNode> = {
  'Archaeology and anthropology': <HistoryIcon className="w-6 h-6" />,
  'The built environment': <Building2 className="w-6 h-6" />,
  'Business and entrepreneurship': <Briefcase className="w-6 h-6" />,
  'Creative writing, literature and arts': <PenTool className="w-6 h-6" />,
  'Economics, politics and society': <TrendingUp className="w-6 h-6" />,
  'History and heritage': <Library className="w-6 h-6" />,
  'Language and communication': <Languages className="w-6 h-6" />,
  'Mind, Health and Human Behaviour': <Brain className="w-6 h-6" />,
  'Natural sciences, environment and sustainability': <Leaf className="w-6 h-6" />,
  'Philosophy, Ethics and Belief': <Lightbulb className="w-6 h-6" />,
  'Research and study skills': <Search className="w-6 h-6" />,
  'Technology, data and AI': <Cpu className="w-6 h-6" />
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [view, setView] = useState<'home' | 'quiz' | 'calculating' | 'results' | 'all' | 'favorites'>('home');
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Favorites and Filters
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('oxford_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [visibleCount, setVisibleCount] = useState(8);
  const [filters, setFilters] = useState({
    topic: '',
    timing: '',
    accredited: 'all',
    duration: ''
  });
  const [activeFilters, setActiveFilters] = useState(filters);

  const t = TRANSLATIONS[lang] as any;

  useEffect(() => {
    localStorage.setItem('oxford_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (view === 'calculating') {
      const timer = setTimeout(() => {
        setView('results');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [view]);

  const toggleFavorite = (e: React.MouseEvent, courseId: string) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId) 
        : [...prev, courseId]
    );
  };

  const handleAnswer = (questionId: number, answerId: string) => {
    const currentAnswer = answers.find(a => a.questionId === questionId);
    const currentIds = currentAnswer?.answerId.split(',').filter(Boolean) || [];
    
    const newIds = currentIds.includes(answerId)
      ? currentIds.filter(id => id !== answerId)
      : [...currentIds, answerId];
    
    const newAnswers = [
      ...answers.filter(a => a.questionId !== questionId),
      { questionId, answerId: newIds.join(',') }
    ];
    setAnswers(newAnswers);
  };

  const filteredCourses = useMemo(() => {
    if (view === 'favorites') {
      return COURSES.filter(c => favorites.includes(c.id));
    }

    if (view === 'all') {
      return COURSES.filter(c => {
        const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTopic = !activeFilters.topic || c.topics.includes(activeFilters.topic as Topic);
        const matchesTiming = !activeFilters.timing || c.timing === activeFilters.timing;
        const matchesAccreditation = activeFilters.accredited === 'all' || 
          (activeFilters.accredited === 'yes' ? c.accredited : !c.accredited);
        const matchesDuration = !activeFilters.duration || c.duration === activeFilters.duration;

        return matchesSearch && matchesTopic && matchesTiming && matchesAccreditation && matchesDuration;
      });
    }
    
    if (view === 'results' || view === 'calculating') {
      const selectedGoals = answers.find(a => a.questionId === 1)?.answerId.split(',') || [];
      const selectedDurations = answers.find(a => a.questionId === 2)?.answerId.split(',') || [];
      const selectedTimings = answers.find(a => a.questionId === 3)?.answerId.split(',') || [];
      const selectedFormats = answers.find(a => a.questionId === 4)?.answerId.split(',') || [];
      const selectedTopicIds = answers.find(a => a.questionId === 5)?.answerId.split(',') || [];
      
      const topicMap: Record<string, Topic> = {};
      TOPICS.forEach((topic, i) => {
        topicMap[String.fromCharCode(65 + i)] = topic;
      });
      const targetTopics = selectedTopicIds.map(id => topicMap[id]);

      // 1. Strict Subject Filter
      let pool = COURSES;
      if (targetTopics.length > 0) {
        pool = pool.filter(course => course.topics.some(t => targetTopics.includes(t)));
      }

      // 2. Scoring
      const scored = pool.map(course => {
        let score = 0;
        
        // Motivation/Goal (Question 1)
        // D: Academic progression, E: Formal qualification -> prefer accredited
        if ((selectedGoals.includes('D') || selectedGoals.includes('E')) && course.accredited) {
          score += 5;
        }

        // Duration (Question 2)
        const durationMap: Record<string, string> = { 'A': 'Short', 'B': 'Short', 'C': 'Short', 'D': 'Long', 'E': 'Short' };
        const preferredDurations = selectedDurations.map(id => durationMap[id]);
        if (preferredDurations.includes(course.duration)) {
          score += 4;
        }

        // Timing (Question 3)
        const timingMap: Record<string, string[]> = { 
          'A': ['Daytime'], 
          'B': ['Daytime', 'Late Afternoon'], 
          'C': ['Evening'], 
          'D': ['Weekend'], 
          'E': ['Online'] 
        };
        const preferredTimings = selectedTimings.flatMap(id => timingMap[id] || []);
        if (preferredTimings.includes(course.timing)) {
          score += 4;
        }

        // Format (Question 4)
        const formatMap: Record<string, string> = { 'A': 'In person', 'B': 'Online', 'C': 'Online', 'D': 'Hybrid' };
        const preferredFormats = selectedFormats.map(id => formatMap[id]);
        if (preferredFormats.includes(course.format)) {
          score += 4;
        }

        return { course, score };
      });

      // Sort by score descending
      return scored.sort((a, b) => b.score - a.score).map(s => s.course);
    }
    
    return [];
  }, [view, answers, searchTerm, activeFilters, favorites]);

  const currentQuestion = QUIZ_QUESTIONS[quizStep];
  const progress = ((quizStep + 1) / QUIZ_QUESTIONS.length) * 100;

  const isSelected = (questionId: number, optionId: string) => {
    const answer = answers.find(a => a.questionId === questionId);
    if (!answer) return false;
    return answer.answerId.split(',').includes(optionId);
  };

  const displayedCourses = view === 'all' ? filteredCourses.slice(0, visibleCount) : filteredCourses;

  return (
    <div className="min-h-screen bg-white font-sans text-primary">
      {/* Header */}
      <header className="site-header sticky top-0 z-50 bg-white">
        <div className="logo-block cursor-pointer" onClick={() => setView('home')}>
          <div className="logo-mark"></div>
          <div>
            <p className="logo-title">University of Oxford Lifelong Learning</p>
            <p className="logo-sub">For every curious mind.</p>
          </div>
        </div>
        
        <nav className="site-nav hidden lg:flex">
          <button onClick={() => setView('all')} className="text-xs font-semibold hover:underline">Browse courses and events</button>
          <a href="#" className="text-xs font-semibold hover:underline">Subjects</a>
          <a href="#" className="text-xs font-semibold hover:underline">Why study with us</a>
          <a href="#" className="text-xs font-semibold hover:underline">About</a>
          <button 
            onClick={() => setView('favorites')}
            className="relative p-1 text-primary"
          >
            <Heart className={`w-5 h-5 ${favorites.length > 0 ? 'fill-primary' : ''}`} />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[8px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                {favorites.length}
              </span>
            )}
          </button>
          <select 
            value={lang}
            onChange={(e) => setLang(e.target.value as Language)}
            className="bg-transparent text-[10px] font-bold focus:outline-none cursor-pointer border border-primary/20 px-1"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
            <option value="zh">ZH</option>
          </select>
        </nav>

        {/* Mobile Menu Toggle (Simplified) */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={() => setView('favorites')} className="relative">
            <Heart className={`w-5 h-5 ${favorites.length > 0 ? 'fill-primary' : ''}`} />
          </button>
          <button onClick={() => setView('all')}>
            <Search className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main>
        <AnimatePresence mode="wait">
          {/* Home View */}
          {view === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <section className="hero-banner">
                <h1 className="font-bold text-primary leading-[1.12] mb-5 text-[clamp(34px,5vw,50px)]">
                  {t.subtitle}
                </h1>
                <p className="max-w-[900px] mx-auto mb-7 text-[clamp(16px,2vw,30px)] leading-[1.3]">
                  Join a community of curious minds. Whether you're looking to upskill, gain a qualification,
                  or explore a new passion, our courses are designed for lifelong learners.
                </p>
                <button 
                  onClick={() => setView('quiz')}
                  className="btn-primary"
                >
                  {t.startQuiz}
                </button>
              </section>

              <section className="promo-strip">
                <h2 className="text-[34px] font-bold mb-2.5">Seasonal promo block</h2>
                <p className="max-w-[980px] mx-auto text-[17px]">
                  Etiam nec odio sed mauris rutrum suscipit. Phasellus et lectus eget felis consequat accumsan.
                  Sed tempus pulvinar diam pulvinar rutrum pellentesque cursus nisi quis tellus vehicula.
                </p>
              </section>

              <section className="featured bg-soft py-10 px-5">
                <h3 className="text-center text-[32px] font-bold mb-5">Featured</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1300px] mx-auto">
                  <article className="simple-card">Residential courses</article>
                  <article className="simple-card">Nature</article>
                  <article className="simple-card">Business</article>
                  <article className="simple-card">Over-65s</article>
                </div>
              </section>
            </motion.div>
          )}

          {/* Quiz View */}
          {view === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="quiz-header">
                <div className="quiz-icon"></div>
                <div>
                  <p className="quiz-title">{t.quizTitle}</p>
                  <p className="quiz-step">Step {quizStep + 1} of {QUIZ_QUESTIONS.length}</p>
                </div>
                <button 
                  onClick={() => setView('home')}
                  className="quiz-close" 
                  aria-label={t.close}
                >
                  X
                </button>
              </div>

              <div className="quiz-layout">
                <aside className="quiz-quote">
                  <div className="quote-box">
                    <p className="quote-author">{t.bodleyTitle}</p>
                    <p className="quote-role">Founder of the Bodleian</p>
                    <hr className="border-primary/20 my-4" />
                    <p className="quote-text">
                      "{t[`coachStep${quizStep + 1}`]}"
                    </p>
                  </div>
                </aside>

                <section className="quiz-question">
                  <h2 className="text-[56px] font-bold mb-[18px] leading-tight max-w-[900px]">
                    {currentQuestion.text}
                  </h2>
                  
                  <div className={currentQuestion.id === 5 ? "subject-grid mb-6" : "quiz-options mb-6"}>
                    {currentQuestion.options.map((option, idx) => {
                      const selected = isSelected(currentQuestion.id, option.id);
                      if (currentQuestion.id === 5) {
                        return (
                          <button
                            key={option.id}
                            onClick={() => handleAnswer(currentQuestion.id, option.id)}
                            className={`subject-option ${selected ? 'selected' : ''}`}
                          >
                            {option.text}
                          </button>
                        );
                      }
                      return (
                        <button
                          key={option.id}
                          onClick={() => handleAnswer(currentQuestion.id, option.id)}
                          className={`option-btn ${selected ? 'selected' : ''}`}
                        >
                          <span className="option-label">{option.id}</span>
                          <span className="option-text">{option.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="quiz-actions flex gap-[18px]">
                    <button
                      onClick={() => setQuizStep(Math.max(0, quizStep - 1))}
                      disabled={quizStep === 0}
                      className="btn-primary"
                      style={{ visibility: quizStep === 0 ? 'hidden' : 'visible' }}
                    >
                      {t.back}
                    </button>
                    
                    {quizStep < QUIZ_QUESTIONS.length - 1 ? (
                      <button
                        onClick={() => setQuizStep(quizStep + 1)}
                        disabled={!answers.find(a => a.questionId === currentQuestion.id)?.answerId}
                        className="btn-primary"
                      >
                        {t.next}
                      </button>
                    ) : (
                      <button
                        onClick={() => setView('calculating')}
                        disabled={!answers.find(a => a.questionId === currentQuestion.id)?.answerId}
                        className="btn-primary"
                      >
                        {t.seeResults}
                      </button>
                    )}
                  </div>
                </section>
              </div>
            </motion.div>
          )}

          {/* Calculating View */}
          {view === 'calculating' && (
            <motion.div
              key="calculating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto px-4 py-32 text-center"
            >
              <div className="relative inline-block mb-12">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border-4 border-dashed border-primary"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Loader2 className="w-12 h-12 text-primary animate-spin" />
                  </motion.div>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-primary mb-4">{t.calculating}</h2>
              <p className="text-xl text-primary/50 max-w-lg mx-auto leading-relaxed">
                {t.calculatingSub}
              </p>
              
              <div className="mt-16 flex justify-center gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                    className="w-3 h-3 bg-primary"
                  />
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                onAnimationComplete={() => setTimeout(() => setView('results'), 1000)}
              />
            </motion.div>
          )}

          {/* Results View */}
          {view === 'results' && (
            <motion.div 
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <section className="result-hero bg-soft py-16 px-5 text-center">
                <h2 className="result-title text-[clamp(34px,5vw,50px)] font-bold mb-5">{t.resultsTitle}</h2>
                <p className="result-desc max-w-[800px] mx-auto text-[20px] leading-relaxed">
                  {t.resultsSubtitle}
                </p>
              </section>

              <section className="recommendations py-16 px-5 max-w-[1300px] mx-auto">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-[32px] font-bold">Recommended for you</h3>
                  <button 
                    onClick={() => setView('all')}
                    className="text-primary font-bold flex items-center gap-2 hover:underline"
                  >
                    {t.viewAll}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCourses.slice(0, 6).map(course => (
                    <CourseCard 
                      key={course.id} 
                      course={course} 
                      favorites={favorites}
                      toggleFavorite={toggleFavorite}
                      setSelectedCourse={setSelectedCourse}
                      t={t}
                    />
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <button 
                    onClick={() => {
                      setAnswers([]);
                      setQuizStep(0);
                      setView('quiz');
                    }}
                    className="btn-primary"
                  >
                    {t.retakeQuiz}
                  </button>
                </div>
              </section>
            </motion.div>
          )}

          {/* All Courses & Favorites View */}
          {(view === 'all' || view === 'favorites') && (
            <motion.div 
              key={view}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[1300px] mx-auto px-5 py-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                <div>
                  <h2 className="text-5xl font-bold text-primary mb-4">
                    {view === 'favorites' ? t.favorites : t.allCourses}
                  </h2>
                  <p className="text-lg text-primary/70">
                    {view === 'favorites' 
                      ? "Your saved courses for future reference."
                      : "Explore our full range of lifelong learning opportunities."}
                  </p>
                </div>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40" />
                  <input 
                    type="text" 
                    placeholder={t.searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-3 w-full md:w-80 border-2 border-primary focus:outline-none bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Filters */}
                {view === 'all' && (
                  <aside className="lg:col-span-1 space-y-8">
                    <div>
                      <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">{t.filterSubject}</h3>
                      <div className="space-y-2">
                        {TOPICS.map(subject => (
                          <label key={subject} className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="checkbox" 
                              checked={activeFilters.topic === subject}
                              onChange={() => {
                                const newTopic = activeFilters.topic === subject ? '' : subject;
                                setActiveFilters({...activeFilters, topic: newTopic});
                              }}
                              className="w-5 h-5 border-2 border-primary rounded-none checked:bg-primary appearance-none cursor-pointer"
                            />
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">{subject}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setActiveFilters({ topic: '', timing: '', accredited: 'all', duration: '' })}
                      className="w-full py-2 border-2 border-primary text-primary font-bold hover:bg-soft transition-colors"
                    >
                      {t.clearFilters}
                    </button>
                  </aside>
                )}

                {/* Course Grid */}
                <div className={view === 'all' ? "lg:col-span-3" : "lg:col-span-4"}>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {displayedCourses.map(course => (
                      <CourseCard 
                        key={course.id} 
                        course={course} 
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                        setSelectedCourse={setSelectedCourse}
                        t={t}
                      />
                    ))}
                  </div>
                  
                  {view === 'all' && filteredCourses.length > visibleCount && (
                    <div className="mt-12 text-center">
                      <button 
                        onClick={() => setVisibleCount(prev => prev + 6)}
                        className="btn-primary"
                      >
                        {t.loadMore}
                      </button>
                    </div>
                  )}

                  {displayedCourses.length === 0 && (
                    <div className="text-center py-20 border-2 border-dashed border-primary/20">
                      <p className="text-xl text-primary/40 font-bold">
                        {view === 'favorites' ? t.noFavorites : t.noResults}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="logo-block mb-8">
              <div className="logo-mark"></div>
              <div>
                <p className="logo-title">University of Oxford Lifelong Learning</p>
                <p className="logo-sub">For every curious mind.</p>
              </div>
            </div>
            <p className="text-primary/70 max-w-md leading-relaxed">
              The Department for Continuing Education offers over 1,000 courses a year, providing opportunities for people from all backgrounds to benefit from Oxford's world-class teaching and resources.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">How to Apply</a></li>
              <li><a href="#" className="hover:underline">Fees & Funding</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Accessibility</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1300px] mx-auto mt-20 pt-8 border-t border-primary/10 text-xs text-primary/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 University of Oxford. All rights reserved.</p>
          <div className="flex items-center gap-6 font-bold">
            <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-primary' : ''}>EN</button>
            <button onClick={() => setLang('es')} className={lang === 'es' ? 'text-primary' : ''}>ES</button>
            <button onClick={() => setLang('fr')} className={lang === 'fr' ? 'text-primary' : ''}>FR</button>
            <button onClick={() => setLang('zh')} className={lang === 'zh' ? 'text-primary' : ''}>ZH</button>
          </div>
        </div>
      </footer>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="modal-overlay">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0"
            />
            <motion.div 
              layoutId={selectedCourse.id}
              className="modal-container flex flex-col md:flex-row p-0 overflow-hidden bg-white border-2 border-primary"
            >
              <div className="w-full md:w-1/2 h-64 md:h-auto sticky top-0 md:relative bg-soft flex items-center justify-center border-b md:border-b-0 md:border-r-2 border-primary">
                <ImageIcon className="w-24 h-24 text-primary/20" />
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 bg-white p-2 border-2 border-primary text-primary md:hidden"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="w-full md:w-1/2 p-8 sm:p-12">
                <div className="hidden md:flex justify-end mb-8">
                  <button 
                    onClick={() => setSelectedCourse(null)}
                    className="text-primary/40 hover:text-primary"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider">
                    {selectedCourse.availability === 'Open' ? t.open : t.closed}
                  </span>
                  {selectedCourse.accredited && (
                    <span className="px-3 py-1 bg-soft text-primary border border-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {t.accredited}
                    </span>
                  )}
                </div>

                <h2 className="text-4xl font-bold text-primary mb-8 leading-tight">
                  {selectedCourse.title}
                </h2>

                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-1">{t.duration}</p>
                      <p className="font-bold">{selectedCourse.durationText}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-1">{t.timing}</p>
                      <p className="font-bold">{selectedCourse.timing}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-1">{t.format}</p>
                      <p className="font-bold">{selectedCourse.format}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-1">Topics</p>
                      <p className="font-bold">{selectedCourse.topics.join(', ')}</p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-primary max-w-none mb-12">
                  <p className="text-lg text-primary/70 leading-relaxed">
                    {selectedCourse.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary flex-1">
                    {t.applyNow}
                  </button>
                  <button className="flex-1 py-3 border-2 border-primary text-primary font-bold hover:bg-soft transition-colors">
                    Download Prospectus
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
