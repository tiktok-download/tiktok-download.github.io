import Footer from "./components/Footer";
import Header from "./components/Header";
import DownloadSection from "./components/DownloadSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="hero">
          <div className="badge">✨ Free TikDown</div>
          <h2>
            Download TikTok
            <br />
            <span className="gradient-text">Videos Instantly</span>
          </h2>
          <p>
            Fast, free, and easy TikTok video downloader. No watermark, high
            quality, and works on all devices.
          </p>
        </div>

        <DownloadSection />

        <section id="features" className="section">
          <div className="section-header">
            <h3>Why Choose TikDown?</h3>
            <p>The most trusted TikDown with thousand of users</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">⚡</div>
              <h4>Lightning Fast</h4>
              <p>
                Download TikTok videos in seconds with our optimized servers and
                fast processing.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🛡️</div>
              <h4>No Watermark</h4>
              <p>
                Get clean videos without TikTok watermarks. Perfect for
                repurposing content.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">⭐</div>
              <h4>High Quality</h4>
              <p>
                Download videos in their original quality, including HD and 4K
                when available.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="section-header">
            <h3>How It Works</h3>
            <p>Simple 3-step process to download any TikTok video</p>
          </div>
          <div className="grid grid-3 steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Copy URL</h4>
              <p>Copy the TikTok video URL from the app or website</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Paste &amp; Click</h4>
              <p>Paste the URL in our downloader and click download</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Save Video</h4>
              <p>Your video will be processed and ready to download</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
