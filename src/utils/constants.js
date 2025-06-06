export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
export const VIDEO_DETAILS_API = (videoId) => `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT =10