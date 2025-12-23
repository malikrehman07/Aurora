import Link from "next/link";

export default async function Blogs() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  const blogs = await res.json();

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ marginBottom: "30px" }}>All Blogs</h1>

      {blogs.map((blog) => {
        const slug = blog.title.toLowerCase().replace(/\s+/g, "-"); // simple slug

        return (
          <Link
            key={blog.id}
            href={`/blogs/${slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                padding: "20px",
                marginBottom: "20px",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{blog.title}</h3>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                {blog.body.slice(0, 120)}...
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
