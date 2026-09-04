import { THEMES } from "../data/themes.js";
import ThemeCard from "./ThemeCard.jsx";

export default function ThemeGrid({ seenCount, onOpen }) {
  return (
    <div className="grid">
      {THEMES.map((theme, idx) => (
        <ThemeCard
          key={theme.name}
          theme={theme}
          index={idx}
          seenCount={seenCount(idx)}
          onOpen={() => onOpen(idx)}
        />
      ))}
    </div>
  );
}
