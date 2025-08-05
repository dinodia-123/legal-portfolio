// src/components/BlogCard.jsx
import React, { useEffect, useRef, useState } from "react";

const Tag = ({ children }) => (
  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
    {children}
  </span>
);

export default function BlogCard({ post, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el); // animate once
          }
        });
      },
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      aria-labelledby={`post-${post.id}-title`}
      style={{ animationDelay: `${delay}s` }}
      className={`bg-white rounded-xl shadow-sm overflow-hidden border transform transition hover:-translate-y-2 hover:shadow-xl 
        ${visible ? "card-visible" : "card-hidden"}`}
    >
      <div className="relative h-36 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        <div className="absolute top-3 right-3 bg-white/85 text-xs px-2 py-1 rounded-full shadow">
          {post.readTime}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <img src={post.author?.avatar} alt={post.author?.name} className="w-7 h-7 rounded-full" />
            <div className="text-xs">
              <div className="font-medium">{post.author?.name}</div>
              <div className="text-gray-400 text-[11px]">{post.date}</div>
            </div>
          </div>
          <div className="flex gap-2">
            {post.tags?.map((t) => (<Tag key={t}>{t}</Tag>))}
          </div>
        </div>

        <h3 id={`post-${post.id}-title`} className="text-lg font-semibold mb-1">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>

        <div className="mt-4 flex items-center justify-between">
          <a href="#" className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1">
            Read →
          </a>
          <div className="text-xs text-gray-300">• • •</div>
        </div>
      </div>

      {/* local CSS for animation states */}
      <style>{`
        .card-hidden {
          opacity: 0;
          transform: translateY(18px) scale(0.995);
        }
        .card-visible {
          animation: cardIn 520ms cubic-bezier(.22,.9,.32,1) forwards;
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(18px) scale(0.995); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </article>
  );
}
