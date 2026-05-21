import { Analytics } from "@vercel/analytics/react";
import LoveTimeline from "./LoveTimeline";
export default function App() {
  return (
    <div>
      <LoveTimeline />;
      <Analytics />
    </div>
  );
}
