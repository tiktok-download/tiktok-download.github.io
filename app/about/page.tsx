import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "About - TikDown",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div>
          <h1 className="page-title">About TikDown</h1>
          <div className="section">
            <h2 className="section-title">Our Mission</h2>
            <p>
              TikDown was created to help users save and archive their favorite
              content from the TikTok platform. Our mission is to provide a
              simple, fast, and reliable tool for downloading videos for
              personal use.
            </p>
          </div>

          <div className="section">
            <h2 className="section-title">How It Works</h2>
            <p>
              Our downloader works by extracting the media files from TikTok
              posts. Simply copy the URL of the post you want to download,
              paste it into our downloader, and click the download button. Our
              system will process the request and provide you with the
              downloadable content.
            </p>
          </div>

          <div className="section">
            <h2 className="section-title">Features</h2>
            <ul className="features">
              <li>Fast and reliable downloads</li>
              <li>Support for videos</li>
              <li>No watermarks on downloaded content</li>
              <li>No registration required</li>
              <li>Simple and user-friendly interface</li>
            </ul>
          </div>

          <div className="section">
            <h2 className="section-title">Legal Notice</h2>
            <p>
              TikTok Downloader is intended for personal use only. We respect
              copyright laws and the rights of content creators. Please ensure
              you have the right to download and use the content. Do not use
              downloaded content for commercial purposes without proper
              authorization from the original creator.
            </p>
            <p>
              Our service is not affiliated with, endorsed by, or sponsored by
              TikTok or its parent company.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
