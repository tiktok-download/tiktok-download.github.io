"use client";

import { FormEvent, useState } from "react";

type VideoFormat = {
  resolution?: string;
  url?: string;
};

type VideoData = {
  title?: string;
  uploader?: string;
  formats?: VideoFormat[];
};

type ApiInfoResponse = {
  error?: string;
  aweme_id?: string;
  data?: VideoData;
};

const API_BASE = "https://tiktok-download-api-euxl.onrender.com";

export default function DownloadSection() {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function downloadVideo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = videoUrl.trim();

    if (!value) {
      setError("Please enter a video URL or ID");
      return;
    }

    try {
      setLoading(true);
      const infoRes = await fetch(
        `${API_BASE}/get_info?url=${encodeURIComponent(value)}`
      );
      const info: ApiInfoResponse = await infoRes.json();

      if (infoRes.status !== 200) {
        setError(info.error || "Video not found");
        return;
      }

      const data = info.data;
      const formats = data?.formats || [];
      const best =
        formats.find((item) => item.resolution === "720x1280") ||
        formats[formats.length - 1];

      if (!best?.url) {
        setError("No downloadable format found");
        return;
      }

      const title = data?.title || info.aweme_id || "video";
      const uploader = data?.uploader || "";
      const fileName = uploader ? `${title}@${uploader}` : title;

      await doDownloadVideo(value, fileName);
    } catch (downloadError) {
      console.error(downloadError);
      setError("An error occurred while downloading the video");
    } finally {
      setLoading(false);
    }
  }

  async function doDownloadVideo(cdnUrl: string, fileName: string) {
    const response = await fetch(`${API_BASE}/download`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: cdnUrl }),
    });
    const blob = await response.blob();
    // audio/mp4 and audio/* → .m4a; everything else → .mp4
    const ext = blob.type.startsWith("audio/") ? "m4a" : "mp4";
    const link = document.createElement("a");
    const blobUrl = URL.createObjectURL(blob);
    link.href = blobUrl;
    link.download = `${fileName}.${ext}`;
    link.click();
    URL.revokeObjectURL(blobUrl);
  }

  return (
    <>
      <div className="download-card">
        <h3>Paste TikTok URL</h3>
        <p>Copy and paste any TikTok video URL to download it instantly</p>
        <form className="download-form" onSubmit={downloadVideo}>
          <input
            id="video-id"
            type="url"
            className="input"
            placeholder="https://www.tiktok.com/@username/video/..."
            value={videoUrl}
            onChange={(event) => setVideoUrl(event.target.value)}
          />
          <button
            type="submit"
            className={`download btn btn-primary ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            <div className="spinner" />
            <span className="event-none">📥 Download</span>
            <span className="downloading">Downloading</span>
          </button>
        </form>
        <div className="features-list">
          <div className="feature-item">
            <span className="feature-icon">🛡️</span>
            <span>No Watermark</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <span>HD Quality</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⭐</span>
            <span>Free Forever</span>
          </div>
        </div>
      </div>

      <div className="modal" style={{ display: error ? "block" : "none" }}>
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">Error</div>
            <button type="button" className="close" onClick={() => setError("")}>
              ×
            </button>
          </div>
          <div className="modal-body">
            <p id="errorText">{error}</p>
          </div>
        </div>
      </div>
    </>
  );
}
