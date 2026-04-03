import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const testimonials = [
  {
    name: 'CTO, SaaS Platform',
    company: '360alumni',
    text: 'Bala transformed our infrastructure into a scalable Kubernetes platform. Deployment time reduced from hours to minutes, and system reliability improved significantly.',
    rating: 5,
    featured: true,
  },
  {
    name: 'Founder',
    company: 'FuzzyGreenTomato',
    text: 'We built a complete IoT + cloud platform with Kubernetes and DevOps automation. The system is now scalable, secure, and production-ready.',
    rating: 5,
  },
  {
    name: 'Engineering Lead',
    company: 'Solstice',
    text: 'Migration to AWS was seamless with zero downtime. Performance improved and we now have a strong CI/CD and monitoring setup.',
    rating: 5,
  },
  {
    name: 'Product Team',
    company: 'VolumeBilling',
    text: 'Implemented DevOps and GitOps workflows that improved deployment speed and stability.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nonFeatured = testimonials.filter(t => !t.featured);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % nonFeatured.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [nonFeatured.length]);

  const featured = testimonials.find(t => t.featured);

  return (
    <div className={styles.wrapper}>

      <h3 className={styles.title}>What Clients Say</h3>

      {/* ⭐ Featured Testimonial */}
      <div className={styles.featuredCard}>
        <div className={styles.quote}>“</div>

        <p className={styles.featuredText}>{featured.text}</p>

        <div className={styles.stars}>
          {'★★★★★'}
        </div>

        <div className={styles.footer}>
          <span className={styles.name}>{featured.name}</span>
          <span className={styles.company}>{featured.company}</span>
        </div>
      </div>

      {/* 🎞 Carousel */}
      <div className={styles.carousel}>
        {nonFeatured.map((t, i) => (
          <div
            key={i}
            className={`${styles.card} ${i === index ? styles.active : ''}`}
          >
            <div className={styles.quote}>“</div>

            <p className={styles.text}>{t.text}</p>

            <div className={styles.stars}>★★★★★</div>

            <div className={styles.footer}>
              <span className={styles.name}>{t.name}</span>
              <span className={styles.company}>{t.company}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}