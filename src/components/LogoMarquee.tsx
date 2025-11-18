import React from "react";
import styles from "./LogoMarquee.module.css";

type RowConfig = {
  /** list of image paths (relative to public/) starting with a leading slash */
  logos: string[];
  /** true = left-to-right, false = right-to-left */
  leftToRight?: boolean;
  /** animation duration in seconds */
  duration?: number;
};

export type LogoMarqueeProps = {
  hiringTop?: RowConfig;
  hiringBottom?: RowConfig;
  trusted?: RowConfig;
};

/**
 * LogoMarquee
 *
 * Usage: place in a page and pass arrays of logo paths. Paths are public-relative,
 * e.g. '/TRUSTED BY LEADING COMPANIES/logo1.svg' or '/OUR HIRING PARTNERS/logo2.svg'
 *
 * The component renders continuous looping rows by duplicating the logos in the track.
 */
export default function LogoMarquee({
  hiringTop,
  hiringBottom,
  trusted,
}: LogoMarqueeProps) {
  return (
    <div className="space-y-4 py-6">
      {hiringTop && (
        <MarqueeRow
          logos={hiringTop.logos}
          leftToRight={hiringTop.leftToRight ?? true}
          duration={hiringTop.duration ?? 18}
          ariaLabel="Our Hiring Partners — row 1"
        />
      )}

      {hiringBottom && (
        <MarqueeRow
          logos={hiringBottom.logos}
          leftToRight={hiringBottom.leftToRight ?? false}
          duration={hiringBottom.duration ?? 20}
          ariaLabel="Our Hiring Partners — row 2"
        />
      )}

      {trusted && (
        <MarqueeRow
          logos={trusted.logos}
          leftToRight={trusted.leftToRight ?? true}
          duration={trusted.duration ?? 22}
          ariaLabel="Trusted by Leading Companies"
        />
      )}
    </div>
  );
}

function MarqueeRow({
  logos,
  leftToRight = true,
  duration = 18,
  ariaLabel,
}: RowConfig & { ariaLabel?: string }) {
  // duplicate logos so the animation can loop seamlessly
  const duplicated = [...logos, ...logos];

  // Map duration to a CSS module class (avoid inline styles to satisfy linter)
  const supportedDurations = [15, 18, 20, 22];
  const chosen = supportedDurations.includes(duration) ? duration : 18;
  const durationKey = `d${chosen}` as keyof typeof styles;
  const durationClass = styles[durationKey] ?? styles.d18;
  const directionClass = leftToRight ? "" : styles.reverse;

  return (
    <div className={styles.marquee} role="region" aria-label={ariaLabel}>
      <div className={`${styles.track} ${durationClass} ${directionClass}`.trim()}>
        {duplicated.map((src, i) => (
          <div key={`${src}-${i}`} className={styles.item}>
            <img src={src} alt="partner logo" className={styles.logo} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

