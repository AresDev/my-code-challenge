import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "../interfaces/post";

export interface ApiResponse {
  response: Post[];
}

const useApi = (initialUrl: string, initialData: ApiResponse) => {
  const [data, setData] = useState(initialData);
  const [url] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData({ response: result.data.response });
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
