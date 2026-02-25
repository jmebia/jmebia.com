export interface TechItem {
  name: string;
  color: string;  // CSS color for the border
  depth: number;  // parallax depth — positive follows mouse, negative opposes it
}

export const techStack: TechItem[] = [
  { name: "PHP",          color: "#818cf8", depth:  3  },
  { name: "Laravel",      color: "#fb7185", depth: -2  },
  { name: "JavaScript",   color: "#fbbf24", depth:  5  },
  { name: "TypeScript",   color: "#38bdf8", depth: -4  },
  { name: "Python",       color: "#34d399", depth:  2  },
  { name: "SQL",          color: "#fb923c", depth: -5  },
  { name: "Docker",       color: "#60a5fa", depth:  4  },
  { name: "Linux",        color: "#a3e635", depth: -1  },
  { name: "Godot",        color: "#a78bfa", depth:  6  },
  { name: "GDScript",     color: "#2dd4bf", depth: -3  },
  { name: "React",        color: "#22d3ee", depth:  1  },
  { name: "Next.js",      color: "#e4e4e7", depth: -6  },
  { name: "Node.js",      color: "#4ade80", depth:  4  },
  { name: "Django",       color: "#6ee7b7", depth: -2  },
  { name: "REST APIs",    color: "#fdba74", depth:  3  },
  { name: "Git",          color: "#fca5a5", depth: -4  },
  { name: "PostgreSQL",   color: "#93c5fd", depth:  5  },
  { name: "Redis",        color: "#f87171", depth: -3  },
  { name: "Tailwind CSS", color: "#5eead4", depth:  2  },
  { name: "AI Ops",       color: "#c4b5fd", depth: -5  },
];

// Brick-wall row groupings with zigzag offsets (px)
export const techRows: { items: TechItem[]; offset: number }[] = [
  { items: techStack.slice(0,  5), offset: 0  },
  { items: techStack.slice(5,  9), offset: 64 },
  { items: techStack.slice(9,  14), offset: 24 },
  { items: techStack.slice(14, 18), offset: 80 },
  { items: techStack.slice(18),     offset: 40 },
];
