import { Post } from "./interfaces/post";
import axios from "axios";

export function createPost(url: string, post: Post): Promise<Post> {
  return axios(url, { data: post, method: "POST" });
}

export function updatePost(url: string, post: Post): Promise<Post> {
  return axios(url, { data: post, method: "PUT" });
}

export function deletePost(url: string): Promise<Post> {
  return axios(url, { method: "DELETE" });
}
