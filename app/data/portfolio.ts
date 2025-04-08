import type { ProjectsType } from "~/types/ProjectType";

export const portfolio: ProjectsType = [
  {
    name: "Portfolio Website",
    description: "Responsive website built with React Router + Vite framework.",
    tools: [
      {
        label: "React",
        version: "v19.1.0",
      },
      {
        label: "React Router",
        version: "v7.4.1",
      },
      {
        label: "TypeScript",
        version: "v5.8.2",
      },
      {
        label: "Vite",
        version: "v5.4.15",
      },
      {
        label: "Sass Embedded",
        version: "v1.86.0",
      },
    ],
    links: [
      {
        label: "Demo",
        value: "https://prikhoda-natalia.github.io/",
        url: "https://prikhoda-natalia.github.io/",
      },
      {
        label: "GitHub repo",
        value: "prikhoda-natalia.github.io",
        url: "https://github.com/prikhoda-natalia/prikhoda-natalia.github.io",
      },
    ],
  },
  {
    name: "Game 2048",
    description:
      "A web-based implementation of the classic 2048 game, built with React, TypeScript, and Vite.",
    tools: [
      {
        label: "React",
        version: "v19.1.0",
      },
      {
        label: "React Router",
        version: "v7.4.1",
      },
      {
        label: "Redux Toolkit",
        version: "v2.6.1",
      },
      {
        label: "TypeScript",
        version: "v5.7.3",
      },
      {
        label: "Vite",
        version: "v6.2.4",
      },
      {
        label: "Sass Embedded",
        version: "v1.86.1",
      },
    ],
    links: [
      {
        label: "Demo",
        value: "https://prikhoda-natalia.github.io/2048-game-reactjs/",
        url: "https://prikhoda-natalia.github.io/2048-game-reactjs/",
      },
      {
        label: "GitHub repo",
        value: "2048-game-reactjs",
        url: "https://github.com/prikhoda-natalia/2048-game-reactjs",
      },
    ],
  },
];
