import { BASE_URL } from "../core/config.js";
import { fetchClient } from "./fetchuser.js";

export async function fetchUsers() {
  return await fetchuser(`${BASE_URL}/users`);
}