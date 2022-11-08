import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../interfaces/user";

export interface UserResponse {
  users: User[];
}

const useApi = (initialUrl: string, initialData: UserResponse) => {
  const [data, setData] = useState(initialData);
  const [url, _] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData({ users: result.data });
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }];
};

export default useApi;
