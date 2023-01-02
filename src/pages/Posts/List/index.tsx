import { Link } from "react-router-dom";
import Card from "../../../shared/components/Card";
import { Post } from "../../../shared/interfaces/post";

export interface UserListProps {
  posts: Post[];
}

const PostList = ({ posts }: UserListProps) => {
  return (
    <ul>
      {posts?.map((post: Post) => (
        
        <li key={post.id}>
          <Card title={post.title} content={post.text} date={post.timestamp}>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
