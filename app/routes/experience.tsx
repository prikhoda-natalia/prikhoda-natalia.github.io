import type { Route } from "./+types/home";
import ExperiencePage from "../pages/Experience";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Experience" },
  ];
}

export default function Experience() {
  return <ExperiencePage />;
}
