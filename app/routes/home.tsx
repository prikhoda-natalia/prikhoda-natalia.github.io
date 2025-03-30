import type { Route } from "./+types/home";
import HomePage from "../pages/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
  ];
}

export default function Home() {
  return <HomePage />;
}
