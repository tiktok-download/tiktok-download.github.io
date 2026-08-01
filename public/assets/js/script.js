document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".download").addEventListener("click", downloadVideo);
  document.querySelector(".close").addEventListener("click", () => {
    const errorMessage = document.querySelector(".modal");
    errorMessage.style.display = "none";
  });
});
const API_BASE = "https://tiktok-download-api-euxl.onrender.com";

async function downloadVideo(e) {
  e.preventDefault();
  const videoId = document.querySelector("#video-id").value.trim();
  if (!videoId) {
    showErrorMessage("Please enter a video URL or ID");
    return;
  }
  try {
    e.target.classList.add("loading");

    // step 1: get video info JSON
    const infoRes = await fetch(
      `${API_BASE}/get_info?url=${encodeURIComponent(videoId)}`
    );
    const info = await infoRes.json();
    if (infoRes.status !== 200) {
      showErrorMessage(info?.error || "Video not found");
      return;
    }

    const data = info?.data;
    const formats = data?.formats || [];
    const best =
      formats.find((f) => f.resolution === "720x1280") ||
      formats[formats.length - 1];

    if (!best?.url) {
      showErrorMessage("No downloadable format found");
      return;
    }

    const title = data?.title || info?.aweme_id || "video";
    const uploader = data?.uploader || "";
    const fileName = uploader ? `${title}@${uploader}` : title;

    // step 2: download via proxy as blob
    await doDownloadVideo(best.url, fileName);
  } catch (error) {
    console.error(error);
    showErrorMessage("An error occurred while downloading the video");
  } finally {
    e.target.classList.remove("loading");
  }
}

function getTikTokVideoId(url) {
  // Regular expressions for different TikTok URL formats
  const standardPattern = /tiktok\.com\/@[\w.-]+\/video\/(\d+)/; // Standard TikTok URL
  const liteAppPattern = /tiktok\.com\/t\/(\w+)/; // Lite or app-generated URL
  const shortUrlPattern = /tiktok\.com\/([\w]+)/; // Shortened URL (e.g., vm.tiktok.com)

  // Check against each pattern
  let match = url.match(standardPattern);
  if (match) return match[1]; // Video ID from standard URL

  match = url.match(liteAppPattern);
  if (match) return match[1]; // Video ID from Lite app URL

  match = url.match(shortUrlPattern);
  if (match) return match[1]; // Shortened URL unique key (not the video ID itself)

  return null; // Return null if no valid format is found
}

async function doDownloadVideo(cdnUrl, fileName) {
  // proxy through backend to attach proper headers, then save as blob
  const proxyUrl = `${API_BASE}/download?url=${encodeURIComponent(cdnUrl)}`;
  const response = await fetch(proxyUrl);
  const blob = await response.blob();
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName + ".mp4";
  link.click();
}

function showErrorMessage(message) {
  const errorMessage = document.querySelector(".modal");
  const errorText = document.querySelector("#errorText");
  errorText.textContent = message;
  errorMessage.style.display = "block";
}
