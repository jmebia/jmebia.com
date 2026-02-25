export interface Experience {
  year: string;
  title: string;
  company: string;
  tech: string[];
  description: string;
}

export const experiences: Experience[] = [
  {
    year: "Nov 2025 – Present",
    title: "Software Engineer",
    company: "Accenture",
    tech: ["Python", "AI Ops"],
    description:
      "Focused on cloud operations, monitoring, automation, and supporting AI-driven systems in production.",
  },
  {
    year: "March 2025 – September 2025",
    title: "Backend Developer",
    company: "KodeTeQ Business Solutions",
    tech: ["Laravel", "PHP", "SQL", "Docker", "Linux"],
    description:
      "I built the backend and database for an Event Ticketing System using Laravel with Maya Checkout and webhooks, and helped integrate a third-party casino game provider into our games management platform.",
  },
  {
    year: "Feb 2022 – Mar 2025",
    title: "Game Developer",
    company: "Freelance Project: Across Lunacia",
    tech: ["Godot", "GDScript", "Game Design", "Web Development", "Linux"],
    description:
      "Sole game programmer. Implemented gameplay systems, Linux test servers, and project website.",
  },
  {
    year: "Jun 2021 – Feb 2022",
    title: "Software Developer",
    company: "MegaXcess IT Solutions",
    tech: ["Laravel", "PHP", "API Design"],
    description:
      "Focused on backend development using Laravel, I built and maintained web applications that supported internal operations and client-facing platforms.",
  },
  {
    year: "Dec 2020 – May 2021",
    title: "Full-Stack Web Developer",
    company: "Freelance / Indie",
    tech: ["Laravel", "PHP", "JavaScript", "Python", "SQL", "Linux"],
    description:
      "Built APIs and web apps using Laravel and multiple other web stacks for various clients.",
  },
  {
    year: "Feb 2019 – Dec 2020",
    title: "Web Developer",
    company: "Wyvern Innovations",
    tech: ["Laravel", "PHP", "JavaScript", "Python", "SQL"],
    description:
      "Worked on the development of solutions for various clients from planning and research to deployment using various web stacks. I was also responsible for writing python scripts for test automations and data analysis.",
  },
  {
    year: "Jun 2018 – Sep 2020",
    title: "Web Developer",
    company: "Omnibus Technologies",
    tech: ["Laravel", "PHP", "SQL"],
    description:
      "I developed a law firm management system using Laravel, built to streamline client records, case tracking, and billing. This platform is the core product that earned the team a spot in IdeaSpace, a competitive startup incubation program in the Philippines.",
  },
  {
    year: "Dec 2017 – Apr 2018",
    title: "Intern",
    company: "UP Information Technology Development Center (UPITDC)",
    tech: ["Customer Support", "Web Development"],
    description:
      "I assisted in web development projects using Django and Bootstrap while gaining hands-on experience in customer support and working within agile workflows.",
  },
];
