import { Analytics } from "@vercel/analytics/next";
import LoveTimeline from "./LoveTimeline";
export default function App() {
  return (
    <>
      <LoveTimeline />;
      <Analytics />
    </>
  );
}
