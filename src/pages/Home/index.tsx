import { useContext } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { MyAppContext } from "../../App";
import useApi from "../../shared/hooks/UseApi";
import PostList from "../Posts/List";
import "./index.css";
import { } from "@mui/material";

const Home = () => {
  const appInfo = useContext(MyAppContext)
  const url = `${appInfo.baseUrl}/posts/arestrepo`;
  const [{ data, isLoading }] = useApi(url, { response: [] });
  const id = uuidv4();

  return isLoading ? (
    <>
      <h1>is loading</h1> {isLoading}{" "}
    </>
  ) : (
    <>
      <h1>My Posts</h1>

      <PostList posts={data.response}></PostList>
      <Link to={`/posts/create/${id}`}>{"( CREATE NEW POST )"}</Link>
    </>
  );
};

export default Home;
