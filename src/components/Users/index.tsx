import { Link } from "react-router-dom";
import useApi from "../../shared/hooks/UseApi";
const BASE_URL = "https://jsonplaceholder.typicode.com";

const Users = () => {
  const url = `${BASE_URL}/users`;
  const [{ data, isLoading }] = useApi(url, { users: [] });

  return isLoading ? (
    <>
      <h1>is loading</h1> {isLoading}{" "}
    </>
  ) : (
    <>
      <ul>
        {data.users?.map((user) => (
          <li key={user.username}>
            <Link to={`/users/${user.id}`} key={user.id}>
              {user.username}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
