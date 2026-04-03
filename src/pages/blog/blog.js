import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=' +
        encodeURIComponent('https://medium.com/feed/@bala-kubelancer')
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 'ok') {
          setError(true);
        } else {
          setPosts(data.items || []);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  // Extract image from Medium HTML
  const getImage = (post) => {
    const imgMatch = post.content?.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : '/img/default-blog.png';
  };

  const featured = posts[0];
  const restPosts = posts.slice(1);

  return (
    <Layout title="Blog">
      <div className="blog-container">

        <h1>📝 Blog</h1>
        <p className="blog-subtitle">
          Insights on Cloud, DevOps, Kubernetes & AI Infrastructure
        </p>

        {/* Loading */}
        {loading && <p>Loading blogs...</p>}

        {/* Error */}
        {error && <p>⚠️ Unable to load Medium posts</p>}

        {/* ⭐ Featured Blog */}
        {!loading && featured && (
          <Link
            to={`/blog/${featured.guid}`}
            state={featured}
            className="blog-featured"
          >
            <img src={getImage(featured)} alt={featured.title} />
            <div className="blog-featured-content">
              <span>⭐ Featured</span>
              <h2>{featured.title}</h2>
              <p>{featured.pubDate?.substring(0, 10)}</p>
            </div>
          </Link>
        )}

        {/* 🏷️ Tags */}
        {!loading && posts.length > 0 && (
          <div className="blog-tags">
            <span>AWS</span>
            <span>Kubernetes</span>
            <span>DevOps</span>
            <span>Cloud</span>
            <span>AI Infrastructure</span>
          </div>
        )}

        {/* 🧱 Blog Grid */}
        <div className="blog-grid">
          {restPosts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.guid}`}
              state={post}
              className="blog-card"
            >
              <img src={getImage(post)} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.pubDate?.substring(0, 10)}</p>
            </Link>
          ))}
        </div>

        {/* 🚀 CTA */}
        {!loading && posts.length > 0 && (
          <div className="blog-cta">
            <h3>🚀 Need help with DevOps or Cloud?</h3>
            <p>
              I help startups and enterprises build scalable, secure, and
              cost-optimized infrastructure on AWS and Kubernetes.
            </p>
            <a href="/contact" className="cs-primary-btn">
              💼 Book a Consultation
            </a>
          </div>
        )}

      </div>
    </Layout>
  );
}