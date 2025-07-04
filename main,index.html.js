
async function downloadVideo() {
  const url = document.getElementById("tiktokUrl").value;
  const result = document.getElementById("result");
  result.innerHTML = "Fetching download link...";

  try {
    const apiUrl = `https://tikwm.com/api/?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data && data.data && data.data.play) {
      result.innerHTML = \`<a href="\${data.data.play}" target="_blank">Click here to download video</a>\`;
    } else {
      result.innerHTML = "Failed to get download link. Please try again.";
    }
  } catch (err) {
    result.innerHTML = "Error occurred. Invalid TikTok URL or network issue.";
  }
}
