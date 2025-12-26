import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "72px", marginBottom: "10px" }}>404</h1>

      <h2 style={{ marginBottom: "10px" }}>Page Not Found</h2>

      <p style={{ maxWidth: "400px", color: "#555", marginBottom: "30px" }}>
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/blogs"
        style={{
          padding: "12px 24px",
          background: "#C5A572",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Back to Blogs
      </Link>
    </div>
  );
}
