import type { MetaFunction } from "@remix-run/node";
import BusinessCardMockup from "~/components/BusinessCardMockup";

export const meta: MetaFunction = () => {
  return [
    { title: "Beam Cards" },
    { name: "description", content: "Digital business cards for the modern professional" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <BusinessCardMockup />
    </div>
  );
}
