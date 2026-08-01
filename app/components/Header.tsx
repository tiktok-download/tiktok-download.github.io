import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <div className="logo-icon">▶</div>
            <Link href="/">
              <h1>TikDown</h1>
            </Link>
          </div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/#how-it-works">How it Works</Link>
            <Link href="/#features">Features</Link>
            <Link href="/about">About</Link>
            <Link href="/policy">Policy</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
