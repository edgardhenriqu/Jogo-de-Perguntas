import { CARDS_POR_TEMA, SECRET_INDEX, THEMES } from "../data/themes.js";
import { SECRET } from "../data/secret.js";
import ThemeCard from "./ThemeCard.jsx";

export default function ThemeGrid({ seenCount, secret, onOpen }) {
  return (
    <div className="grid">
      {THEMES.map((theme, idx) => (
        <ThemeCard
          key={theme.name}
          theme={theme}
          index={idx}
          total={CARDS_POR_TEMA}
          seenCount={seenCount(idx)}
          onOpen={() => onOpen(idx)}
        />
      ))}

      {secret && (
        <ThemeCard
          theme={SECRET}
          index={SECRET_INDEX}
          total={SECRET.cards.length}
          seenCount={seenCount(SECRET_INDEX)}
          secret
          onOpen={() => onOpen(SECRET_INDEX)}
        />
      )}
    </div>
  );
}
