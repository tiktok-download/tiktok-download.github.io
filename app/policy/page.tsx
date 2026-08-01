import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Policy - TikDown",
};

export default function PolicyPage() {
  return (
    <>
      <Header />
      <main className="container">
        <div>
          <div className="section">
            <h1 className="page-title">Policy</h1>
            <h2 className="section-title">Privacy Policy</h2>
            <p>
              At TikTok Downloader, we take your privacy seriously. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website and use our
              services.
            </p>
          </div>

          <div className="section">
            <h2 className="section-title">Information We Collect</h2>
            <ol>
              <li>
                This website will not collect your personal information. The
                user&apos;s personal information is not used in this site and
                not provided to third parties.
              </li>
              <li>
                This website uses Google Analytics as an analysis tool, and
                Google Analytics has the possibility of automatically acquiring
                user information. Please refer to the privacy policy of Google
                Analytics for information acquired, the purpose of use, and the
                provision to the third party.
              </li>
            </ol>
          </div>

          <div className="section">
            <h2 className="section-title">Cookies and Tracking Technologies</h2>
            <p>
              We do not use Cookies and similar tracking technologies on the
              website.
            </p>
          </div>

          <div className="section">
            <h2 className="section-title">Copyright Policy</h2>
            <p>
              TikTok Downloader respects the intellectual property rights of
              others and expects users of the service to do the same. We will
              respond to notices of alleged copyright infringement that comply
              with applicable law.
            </p>
            <h3>DMCA Notices</h3>
            <p>
              If you believe that your copyrighted work has been copied in a way
              that constitutes copyright infringement and is accessible via our
              service, please notify us by providing the following information:
            </p>
            <ol>
              <li>
                A physical or electronic signature of a person authorized to act
                on behalf of the owner of the copyright
              </li>
              <li>
                Identification of the copyrighted work claimed to have been
                infringed
              </li>
              <li>
                Identification of the material that is claimed to be infringing
                or to be the subject of infringing activity and that is to be
                removed
              </li>
              <li>
                Information reasonably sufficient to permit us to contact you,
                such as an address, telephone number, and email address
              </li>
              <li>
                A statement that you have a good faith belief that use of the
                material in the manner complained of is not authorized by the
                copyright owner, its agent, or the law
              </li>
              <li>
                A statement that the information in the notification is accurate,
                and under penalty of perjury, that you are authorized to act on
                behalf of the copyright owner
              </li>
            </ol>
            <h3>User Responsibility</h3>
            <p>
              Users are responsible for ensuring they have the right to download
              content from TikTok. Our service is intended for personal use
              only, and users should not download content for commercial
              purposes without proper authorization from the original creator.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
