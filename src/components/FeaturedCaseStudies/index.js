import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const caseStudies = [
  {
    title: '360alumni',
    description: 'Scaled SaaS platform to 20K+ users',
    image: '/bala-portfolio/img/case-studies/360alumni/landingzone.png',
    link: '/docs/case-studies/360alumni',
  },
  {
    title: 'VolumeBilling',
    description: 'Application Migration and Modernization',
    image: '/bala-portfolio/img/case-studies/volumebilling/architecture.png',
    link: '/docs/case-studies/volumebilling',
  },
  {
    title: 'FuzzyGreenTomato',
    description: 'Agriculture connected IoT on Kubernetes platform',
    image: '/bala-portfolio/img/case-studies/fuzzygreentomato/architecture.png',
    link: '/docs/case-studies/fuzzygreentomato',
  },
];

export default function FeaturedCaseStudies() {
  return (
    <section className={styles.wrapper}>
      
      <h2 className={styles.title}>Featured Case Studies</h2>

      <div className={styles.grid}>
        {caseStudies.map((cs, i) => (
          <Link key={i} to={cs.link} className={styles.card}>
            
            <div className={styles.imageWrapper}>
              <img src={cs.image} alt={cs.title} />
            </div>

            <div className={styles.content}>
              <h3>{cs.title}</h3>
              <p>{cs.description}</p>
              <span className={styles.cta}>View Case Study →</span>
            </div>

          </Link>
        ))}
      </div>

    </section>
  );
}