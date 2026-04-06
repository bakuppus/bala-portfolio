import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const testimonials = [
  {
    name: 'Christina Balotescu',
    company: 'CEO, 360Alumni',
    text: 'Bala transformed our infrastructure into a scalable Kubernetes platform. Deployment time reduced from hours to minutes, and system reliability improved significantly.',
    rating: 5,
    featured: true,
    embed: 'https://embed-v2.testimonial.to/v/2c52130e-8f55-44b0-b1ec-a437ff16014f',
  },
  {
    name: 'Ryan',
    company: 'Founder, FuzzyGreenTomato',
    text: 'We built a complete IoT + cloud platform with Kubernetes and DevOps automation. The system is now scalable, secure, and production-ready.',
    rating: 5,
  },

  {
    name: 'Lakshmikanth adiraju',
    company: 'Ceo, founder, VolumeBilling',
    text: 'Volumebilling is a startup established in June 2019. Our product is a SAAS platform for XAAS providers to support their complex OTC processes. We engaged kubelancer for building of Cloud deployment solution on GCP for our application. They have worked closely with us, understood our requirements and delivered a Kubernetes driven cloud solution in GCP. Our product went through successful Google cloud certification in 2020, thanks to their dedicated effort. It was an highly efficient build and support model that Kubelancer team has provided us in achieving our product build goals. We definitely recommend them to other clients.',
    rating: 5,
    embed: 'https://embed-v2.testimonial.to/text/-Nf7ByUQ3vZOgMQVbm-q',
  },

  {
    name: 'Alex Adil',
    company: 'Principal engineer, ',
    text: 'Top notch devops expertise, fantastic communication, very happy with results.',
    rating: 5,
    embed: 'https://embed-v2.testimonial.to/text/-Nf7ByUQ3vZOgMQVbm-q',
  },

  {
    name: 'Engineering Lead',
    company: 'Solstice',
    text: 'Migration to AWS was seamless with zero downtime. Performance improved and we now have a strong CI/CD and monitoring setup.',
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

  {/* 🌐 EMBED (Highest priority) */}
  {featured.embed && (
    <div className={styles.embedWrapper}>
      <iframe
        src={featured.embed}
        width="100%"
        height="500"
        frameBorder="0"
        scrolling="no"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )}

  {/* 🎥 VIDEO */}
  {!featured.embed && featured.video && (
    <div className={styles.videoWrapper}>
<iframe
  src={featured.video}
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
/>
    </div>
  )}

  {/* 📝 TEXT */}
  <p className={styles.featuredText}>{featured.text}</p>

  <div className={styles.stars}>★★★★★</div>

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