import { type RouteConfig, index, route } from "@react-router/dev/routes";

export const appPaths = {
  contacts: "/contacts",
  experience: "/experience",
  home: "/",
  portfolio: "/portfolio",
  skillset: "/skillset",
};

export default [
  index("routes/home.tsx"),
  route(appPaths.contacts, "routes/contacts.tsx"),
  route(appPaths.experience, "routes/experience.tsx"),
  route(appPaths.portfolio, "routes/portfolio.tsx"),
  route(appPaths.skillset, "routes/skillset.tsx")
] satisfies RouteConfig;
