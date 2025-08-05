// src/components/FeaturedGrid.jsx
import React from "react";

const samplePosts = [
  {
    id: 1,
    tag: "World",
    tagColor: "text-blue-600",
    title: "Featured post",
    date: "Nov 12",
    excerpt: "This is a compact card with supporting text below as a natural lead-in to additional content.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=60&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 2,
    tag: "Design",
    tagColor: "text-green-600",
    title: "Post title",
    date: "Nov 11",
    excerpt: "Another compact card for a more focused and minimal presentation.",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=60&auto=format&fit=crop",
    href: "#",
  },
];

export default function FeaturedGrid({ posts = samplePosts }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-2 justify-center">
        {posts.map((p) => (
          <article
            key={p.id}
            className="group flex bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 relative max-w-md mx-auto"
            aria-labelledby={`post-${p.id}-title`}
          >
            {/* Image */}
            <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between">
              <div>
                <span className={`inline-block text-xs font-semibold mb-1 ${p.tagColor ?? "text-sky-600"}`}>
                  {p.tag}
                </span>

                <h3
                  id={`post-${p.id}-title`}
                  className="text-base font-semibold mb-1 text-gray-900"
                >
                  {p.title}
                </h3>

                <div className="text-xs text-gray-500 mb-2">{p.date}</div>

                <p className="text-sm text-gray-600 line-clamp-2">{p.excerpt}</p>
              </div>

              <div className="mt-2">
                <a
                  href={p.href}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:underline relative z-10"
                >
                  Continue reading →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
