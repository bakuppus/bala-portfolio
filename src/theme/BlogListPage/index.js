import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function BlogListPage({ items }) {
  const featured = items[0]; // first blog as hero
  const rest = items.slice(1);

  return (
    <Layout title="Blog">
      <main className={styles.container}>
        
        {/* HERO SECTION */}
        {featured && (
          <Link
            to={featured.content.metadata.permalink}
            className={styles.hero}
          >
            {featured.content.metadata.frontMatter.image && (
              <img
                src={featured.content.metadata.frontMatter.image}
                className={styles.heroImage}
              />
            )}

            <div className={styles.heroContent}>
              <span className={styles.badge}>Featured</span>
              <h1>{featured.content.metadata.title}</h1>
              <p>
                {new Date(
                  featured.content.metadata.date
                ).toDateString()}
              </p>
            </div>
          </Link>
        )}

        {/* GRID SECTION */}
        <div className={styles.grid}>
          {rest.map(({ content }) => {
            const { title, permalink, date, frontMatter } =
              content.metadata;

            return (
              <Link to={permalink} className={styles.card}>
                {frontMatter.image && (
                  <img src={frontMatter.image} className={styles.image} />
                )}

                <div className={styles.content}>
                  <h3>{title}</h3>
                  <p>{new Date(date).toDateString()}</p>

                  <div className={styles.tags}>
                    <span>AWS</span>
                    <span>Kubernetes</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}