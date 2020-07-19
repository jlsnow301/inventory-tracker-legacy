// Module imports
import { useState, useCallback } from "react";
import axios from "axios";

export const useAxiosClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      await axios({
        method,
        url,
        body,
        headers,
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.message);
          }
          setIsLoading(false);
          return res.data;
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
          throw err;
        });
    }
  );

  const clearError = () => {
    setError(null);
  };

  return { isLoading, error, sendRequest, clearError };
};
