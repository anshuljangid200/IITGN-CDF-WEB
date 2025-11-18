import React, { useState } from 'react';
import styles from './BrandGrid.module.css';

type Props = {
  title: string;
  subtitle?: string;
  brands: string[];
  cols?: string; // tailwind grid cols classes override
  bgClass?: string; // optional background class to apply to the section
  /** public directory path to look for logos (e.g. '/OUR%20HIRING%20PARTNERS') */
  logoDir?: string;
};

const slug = (name: string) =>
  name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

const brandFontClass = (name: string) => {
  const key = slug(name).replace(/-/g, '_');
  // map a few brands to closer font-family choices (best-effort)
  if (key.includes('amazon')) return styles.brandFont_amazon;
  if (key.includes('google')) return styles.brandFont_google;
  if (key.includes('microsoft')) return styles.brandFont_microsoft;
  if (key.includes('apple')) return styles.brandFont_apple;
  return '';
};

const BrandGrid: React.FC<Props> = ({ title, subtitle, brands, cols, bgClass, logoDir }) => {
  return (
    <section className={`${bgClass ?? ''} py-12 lg:py-16`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{title}</h3>
          {subtitle && <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-2">{subtitle}</p>}
        </div>

        <div className={`grid ${cols || 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'} gap-6 max-w-7xl mx-auto`}>
          {brands.map((brand) => (
            <BrandTile key={brand} brand={brand} logoDir={logoDir} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BrandTile: React.FC<{ brand: string; logoDir?: string }> = ({ brand, logoDir }) => {
  const [hasLogo, setHasLogo] = useState(true);
  const s = slug(brand);

  // prefer svg (user provided SVGs), fallback to png in /images/brands
  const svgPath = `${logoDir ? logoDir : '/images/brands'}/${s}.svg`;
  const pngPath = `/images/brands/${s}.png`;
  const [src, setSrc] = useState<string>(svgPath);

  const handleError = () => {
    if (src.endsWith('.svg')) {
      setSrc(pngPath);
    } else {
      setHasLogo(false);
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-medium border ${styles.tile}`}>
      {hasLogo ? (
        // image will fallback via onError handler -> show text if neither svg nor png exist
        <img
          src={src}
          alt={brand}
          className={`${styles.logo}`}
          onError={handleError}
        />
      ) : (
        <div className={`${styles.brandPlaceholder}`}>
          <span className={`${styles.brandText} ${brandFontClass(brand)} text-lg`}>{brand}</span>
        </div>
      )}
    </div>
  );
};

export default BrandGrid;
