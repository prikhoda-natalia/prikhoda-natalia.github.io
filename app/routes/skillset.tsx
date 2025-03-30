import type { Route } from "./+types/home";
import SkillsetPage from "../pages/Skillset";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skillset" },
  ];
}

export default function Skillset() {
  return <SkillsetPage />;
}
