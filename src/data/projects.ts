export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string[];
  link: string;
  image: string;
  buttonText: string;
}

export const projects: Project[] = [
  {
    id: 'bastabudget',
    title: 'BastaBudget',
    description: [
      'Take control of your finances with BastaBudget — a clean, easy-to-use budget tracker that works right from your browser. Set spending limits, log your expenses on the go, and watch your savings grow. No complicated setup, no subscriptions — just straightforward budgeting that helps you stay on top of your money. Add it to your phone\'s homescreen like an app and track your budget anytime, anywhere!',
      'Basta, simple lang mag-budget dito!'
    ],
    image: '/images/bastabudgetpromo.jpg',
    tags: ['Finance', 'Next.JS', 'Tailwind CSS', 'Progressive Web App (PWA)'],
    buttonText: 'Visit site',
    link: 'https://bastabudget.vercel.app/',
  },
  {
    id: 'riftstrider-totm',
    title: 'Riftstrider: Trial of the Mask',
    description: [
      'Step into the boots of a fledgling Riftstrider and prove your worth across shifting dimensions, where timing, memory, and critical thinking are your greatest weapons — accompanied by your faithful Rift Mask companion.',
      'This was my entry as a solo dev for Godot Wild Jam #86.'
    ],
    image: 'https://img.itch.zone/aW1hZ2UvMzk2MTUzNi8yMzY0MzA2Ni5wbmc=/original/fFXSUT.png',
    tags: ['2D Platformer', 'Pixel Art', 'Godot', 'Game Jam'],
    buttonText: 'Play Now',
    link: 'https://maiusebi.itch.io/riftstrider',
  },
  {
    id: 'lost-signals-game',
    title: 'Lost, Signals',
    description: [
      '"Lost, Signals" is a short and cozy interactive fiction game about rediscovery, memories, and quiet moments. Feeling lost in life, a man returns to his grandparents\' old home—where he once lived as a child—and discovers an old radio, along with a gentle clue hunt left behind by his late grandfather. Following hidden radio signals, he begins to unlock heartfelt messages and reconnect with the past.',
      'This game was created as my team\'s entry for Pixel Game Jam 2025, where I was the Godot dev/programmer',
    ],
    image: 'https://img.itch.zone/aW1hZ2UvMzU1MzgzOS8yMTI0ODYwOC5wbmc=/original/JAnNA3.png',
    tags: ['Interactive Fiction', 'Game Jam', 'Godot'],
    buttonText: 'Play Now',
    link: 'https://maiusebi.itch.io/lost-signals',
  },
  // Add more projects here
];
