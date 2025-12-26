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

export default async function Blog({ params }) {
  const { slug } = await params;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  const post = posts.find((p) => slugify(p.title) === slug);

  if (!post) return <div style={{ padding: 40 }}>Blog not found</div>;

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ marginBottom: "20px" }}>{post.title}</h1>
      <p style={{ lineHeight: "1.7", color: "#444" }}>{post.body}</p>
    </div>
  );
}
