import { Link } from "react-router-dom";
import { Post } from "../../../shared/interfaces/post";

export interface UserListProps {
  response: Post[];
}

const PostList = ({ response }: UserListProps) => {
  return (
    <ul>
      {response?.map((post: Post) => (
        <li key={post.id}>
          <h2>{`${post.timestamp} - ${post.title}`}</h2>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
