import type { Route } from "./+types/home";
import PortfolioPage from "../pages/Portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
  ];
}

export default function Portfolio() {
  return <PortfolioPage />;
}
