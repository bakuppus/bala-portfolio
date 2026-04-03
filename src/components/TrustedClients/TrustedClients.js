import React from 'react';
import styles from './styles.module.css';

const logos = [
  {
    src: '/img/clients/360alumni.png',
    alt: '360alumni',
    link: '/case-studies/360alumni',
  },
  {
    src: '/img/clients/fuzzygreentomato.png',
    alt: 'FuzzyGreenTomato',
    link: '/case-studies/fuzzygreentomato',
  },
  {
    src: '/img/clients/solstice.png',
    alt: 'Solstice',
    link: '/case-studies/solstice',
  },
  {
    src: '/img/clients/volumebilling.png',
    alt: 'Volumebilling',
    link: '/case-studies/volumebilling',
  },
];

export default function TrustedClients() {
  return (
    <div className={styles.wrapper}>
      
<h3 className={styles.trustedTitle}>
  Trusted by Teams Building at Scale
</h3>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {logos.concat(logos).map((logo, i) => (
            <a
              key={i}
              href={logo.link}
              className={styles.logoCard}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.logo}
              />
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}