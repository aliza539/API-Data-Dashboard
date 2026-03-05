import { BASE_URL } from "../core/config.js";
import { fetchClient } from "./fetchuser.js";

export async function fetchCommentsByPost(postId) {
  return await fetchClient(`${BASE_URL}/comments?postId=${postId}`);
}