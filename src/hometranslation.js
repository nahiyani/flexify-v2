// src/i18n.js
import homeTranslation from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "HOME": "Home",
    "ABOUT": "About",
    "CONTACT": "Contact",
    "COPYRIGHT": "© 2024 Flexify. All rights reserved.",
      "YOUR_PERSONAL_VIRTUAL_FITNESS_STUDIO": "YOUR PERSONAL VIRTUAL FITNESS STUDIO - ALL IN ONE PLACE!",
      "WELCOME_TO_FLEXIFY": "Welcome to Flexify, where fitness meets convenience! Whether you're a seasoned athlete or just starting your fitness journey, our virtual studio offers a diverse range of classes to fit your schedule and your goals. From energizing yoga sessions to high-intensity interval training (HIIT) and everything in between, our expert instructors are here to guide you every step of the way.",
      "JOIN_OUR_COMMUNITY": "Join our community and transform your living room into a personal gym with live classes, on-demand workouts, and a wealth of resources to keep you motivated and informed.",
      "EXPLORE_OUR_COLLECTION": "EXPLORE OUR COLLECTION",
      "FEATURED_CLASSES": "FEATURED CLASSES",
      "Cardio_Blast": "Cardio Blast",
      "Cardio_Blast_Description": "An energetic cardio class to get your heart pumping!",
      "Strength_Mastery": "Strength Mastery",
      "Strength_Mastery_Description": "Build your strength with this comprehensive workout.",
      "Yoga_Relaxation": "Yoga Relaxation",
      "Yoga_Relaxation_Description": "Relax and unwind with this gentle and serene yoga class.",
      "EXPLORE_ALL": "EXPLORE ALL",
      "INSTRUCTORS": "INSTRUCTORS",
      "Arnold_Schwarzenegger": "Arnold Schwarzenegger",
      "Strength_Training": "Strength Training",
      "Cardio": "Cardio",
      "Dwayne_Johnson": "Dwayne Johnson",
      "HIIT": "HIIT",
      "Eric_Winter": "Eric Winter",
      "Scarlett_Johansson": "Scarlett Johansson",
      "Pilates": "Pilates",
      "Yoga": "Yoga",
      "MEET_THEM_ALL": "MEET THEM ALL",
      "TESTIMONY": "TESTIMONY",
      "Alyssa_Rodriguez_Testimony": "I've been using Flexify for over a year now, and it has completely transformed my fitness journey. The extensive library of articles and guides has been incredibly helpful in educating me about different workout routines and nutrition tips. The BMI calculator is a great tool to keep track of my progress. The convenience of having everything in one place has made it so much easier to stay consistent and achieve my fitness goals. Flexify is a game-changer for anyone looking to improve their health and fitness!",
      "ALYSSA_RODRIGUEZ": "ALYSSA RODRIGUEZ, Customer"
    }
  },
  fr: {
    translation: {
      "HOME": "Accueil",
    "ABOUT": "À propos",
    "CONTACT": "Contact",
    "COPYRIGHT": "© 2024 Flexify. Tous droits réservés.",
      "YOUR_PERSONAL_VIRTUAL_FITNESS_STUDIO": "VOTRE STUDIO DE FITNESS VIRTUEL PERSONNEL - TOUT EN UN SEUL ENDROIT!",
      "WELCOME_TO_FLEXIFY": "Bienvenue sur Flexify, où le fitness rencontre la commodité! Que vous soyez un athlète chevronné ou que vous commenciez votre parcours de remise en forme, notre studio virtuel propose une gamme diversifiée de cours adaptés à votre emploi du temps et à vos objectifs. Des séances de yoga énergisantes aux entraînements par intervalles à haute intensité (HIIT) et tout le reste, nos instructeurs experts sont là pour vous guider à chaque étape.",
      "JOIN_OUR_COMMUNITY": "Rejoignez notre communauté et transformez votre salon en une salle de sport personnelle avec des cours en direct, des entraînements à la demande et une multitude de ressources pour rester motivé et informé.",
      "EXPLORE_OUR_COLLECTION": "DÉCOUVREZ NOTRE COLLECTION",
      "FEATURED_CLASSES": "COURS EN VEDETTE",
      "Cardio_Blast": "Cardio Blast",
      "Cardio_Blast_Description": "Un cours de cardio énergique pour faire battre votre cœur!",
      "Strength_Mastery": "Maîtrise de la Force",
      "Strength_Mastery_Description": "Renforcez votre force avec cet entraînement complet.",
      "Yoga_Relaxation": "Relaxation Yoga",
      "Yoga_Relaxation_Description": "Détendez-vous avec ce cours de yoga doux et serein.",
      "EXPLORE_ALL": "TOUT DÉCOUVRIR",
      "INSTRUCTORS": "INSTRUCTEURS",
      "Arnold_Schwarzenegger": "Arnold Schwarzenegger",
      "Strength_Training": "Entraînement de Force",
      "Cardio": "Cardio",
      "Dwayne_Johnson": "Dwayne Johnson",
      "HIIT": "HIIT",
      "Eric_Winter": "Eric Winter",
      "Scarlett_Johansson": "Scarlett Johansson",
      "Pilates": "Pilates",
      "Yoga": "Yoga",
      "MEET_THEM_ALL": "RENCONTREZ-LES TOUS",
      "TESTIMONY": "TÉMOIGNAGE",
      "Alyssa_Rodriguez_Testimony": "J'utilise Flexify depuis plus d'un an maintenant et cela a complètement transformé mon parcours de remise en forme. La vaste bibliothèque d'articles et de guides m'a été d'une grande aide pour m'éduquer sur les différentes routines d'entraînement et les conseils nutritionnels. Le calculateur d'IMC est un excellent outil pour suivre mes progrès. La commodité d'avoir tout en un seul endroit a rendu tellement plus facile de rester cohérent et d'atteindre mes objectifs de remise en forme. Flexify est un changement de jeu pour quiconque cherche à améliorer sa santé et sa forme physique!",
      "ALYSSA_RODRIGUEZ": "ALYSSA RODRIGUEZ, Cliente"
    }
  },
  es: {
    translation: {
      "HOME": "Inicio",
      "ABOUT": "Acerca de",
      "CONTACT": "Contacto",
      "COPYRIGHT": "© 2024 Flexify. Todos los derechos reservados.",
      "YOUR_PERSONAL_VIRTUAL_FITNESS_STUDIO": "TU ESTUDIO DE FITNESS VIRTUAL PERSONAL - ¡TODO EN UN SOLO LUGAR!",
      "WELCOME_TO_FLEXIFY": "¡Bienvenido a Flexify, donde el fitness se encuentra con la conveniencia! Ya seas un atleta experimentado o estés comenzando tu viaje de fitness, nuestro estudio virtual ofrece una amplia gama de clases para adaptarse a tu horario y tus objetivos. Desde sesiones de yoga energizantes hasta entrenamiento de intervalos de alta intensidad (HIIT) y todo lo demás, nuestros instructores expertos están aquí para guiarte en cada paso del camino.",
      "JOIN_OUR_COMMUNITY": "Únete a nuestra comunidad y transforma tu sala de estar en un gimnasio personal con clases en vivo, entrenamientos a demanda y una gran cantidad de recursos para mantenerte motivado e informado.",
      "EXPLORE_OUR_COLLECTION": "EXPLORA NUESTRA COLECCIÓN",
      "FEATURED_CLASSES": "CLASES DESTACADAS",
      "Cardio_Blast": "Cardio Blast",
      "Cardio_Blast_Description": "¡Una clase de cardio enérgica para que tu corazón lata rápido!",
      "Strength_Mastery": "Dominio de la Fuerza",
      "Strength_Mastery_Description": "Fortalece tu fuerza con este entrenamiento integral.",
      "Yoga_Relaxation": "Relajación de Yoga",
      "Yoga_Relaxation_Description": "Relájate y desestrésate con esta clase de yoga suave y serena.",
      "EXPLORE_ALL": "EXPLORA TODO",
      "INSTRUCTORS": "INSTRUCTORES",
      "Arnold_Schwarzenegger": "Arnold Schwarzenegger",
      "Strength_Training": "Entrenamiento de Fuerza",
      "Cardio": "Cardio",
      "Dwayne_Johnson": "Dwayne Johnson",
      "HIIT": "HIIT",
      "Eric_Winter": "Eric Winter",
      "Scarlett_Johansson": "Scarlett Johansson",
      "Pilates": "Pilates",
      "Yoga": "Yoga",
      "MEET_THEM_ALL": "CONÓCELOS A TODOS",
      "TESTIMONY": "TESTIMONIO",
      "Alyssa_Rodriguez_Testimony": "He estado usando Flexify durante más de un año y ha transformado completamente mi viaje de fitness. La amplia biblioteca de artículos y guías ha sido increíblemente útil para educarme sobre diferentes rutinas de ejercicios y consejos nutricionales. El calculador de IMC es una excelente herramienta para realizar un seguimiento de mi progreso. La conveniencia de tener todo en un solo lugar ha hecho que sea mucho más fácil ser consistente y alcanzar mis objetivos de fitness. ¡Flexify es un cambio de juego para cualquiera que busque mejorar su salud y estado físico!",
      "ALYSSA_RODRIGUEZ": "ALYSSA RODRIGUEZ, Cliente"
    }
  }
};

homeTranslation
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    interpolation: {
      escapeValue: false
    }
  });

export default homeTranslation;