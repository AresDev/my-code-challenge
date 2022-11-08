import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import useApi from "../../shared/hooks/UseApi";
import PostList from "../Posts/List";
import "./index.css";
const BASE_URL = "https://us-central1-mbtcandidate.cloudfunctions.net";

const Home = () => {
  const url = `${BASE_URL}/posts/arestrepo`;
  const [{ data, isLoading }] = useApi(url, { response: [] });
  const id = uuidv4();

  return isLoading ? (
    <>
      <h1>is loading</h1> {isLoading}{" "}
    </>
  ) : (
    <>
      <h1>My Posts</h1>

      <PostList response={data.response}></PostList>
      <Link to={`/posts/create/${id}`}>{"( CREATE NEW POST )"}</Link>
    </>
  );
};

export default Home;
