import type { Route } from "./+types/home";
import ContactsPage from "../pages/Contacts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contacts" }
  ];
}

export default function Contacts() {
  return <ContactsPage />;
}
