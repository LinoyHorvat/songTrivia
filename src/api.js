import axios from "axios";

const musiXmatchApi = axios.create({
  baseURL: "http://api.musixmatch.com/ws/1.1/tracking.url.get?apikey=498cf6080e7352553fa1c4b7dfbf3ae7&format=json&domain=www.mylyricswebsite.com",
});

export default musiXmatchApi;
http://api.musixmatch.com/ws/1.1/tracking.url.get?apikey=498cf6080e7352553fa1c4b7dfbf3ae7&format=json&domain=www.mylyricswebsite.com