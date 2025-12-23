export async function generateMetadata({ params }) {
  const { slug } = params;

  // Fetch all posts and find the one with matching slug
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await res.json();
  const post = posts.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  return {
    title: post?.title || "Blog",
    description: post?.body.slice(0, 150) || "",
  };
}

export default async function Blog({ params }) {
  const { slug } = params;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await res.json();
  const post = posts.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!post) return <div>Blog not found</div>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ marginBottom: "20px" }}>{post.title}</h1>
      <p style={{ lineHeight: "1.7", color: "#444" }}>{post.body}</p>
    </div>
  );
}
