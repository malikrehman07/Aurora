// import { Suspense } from "react";

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

// Metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  const post = posts.find((p) => slugify(p.title) === slug);

  if (!post) {
    return { title: "Blog not found", description: "" };
  }

  return {
    title: post.title,
    description: post.body.slice(0, 150),
  };
}


// Disable revalidation to always fetch fresh data
// export const revalidate = false;


// Disable dynamic params to ensure all paths are pre-rendered
// export const dynamicParams = false;

// Generate static paths for all blog posts
// export async function generateStaticParams() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });
//   const posts = await res.json();
//   return posts.map((post) => ({ slug: slugify(post.title) }));
// }
// Blog post page component
export default async function Blog({ params }) {
  const { slug } = await params;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  const post = posts.find((p) => slugify(p.title) === slug);

  if (!post) return <div style={{ padding: 40 }}>Blog not found</div>;

  return (
    // Suspense for loading state But we are not using any async component here and promise must be used
    // <Suspense fallback={<div style={{ padding: 40 }}>Loading...</div>} >
    //   <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
    //     <h1 style={{ marginBottom: "20px" }}>{post.title}</h1>
    //     <p style={{ color: "#555", lineHeight: "1.6" }}>{post.body}</p>
    //   </div>
    // </Suspense>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ marginBottom: "20px" }}>{post.title}</h1>
      <p style={{ color: "#555", lineHeight: "1.6" }}>{post.body}</p>
    </div>
  );
}
