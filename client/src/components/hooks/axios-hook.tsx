import { useState, useCallback } from "react";
import axios, { Method } from "axios";

/** The response package to be imported elsewhere.
 * @param {boolean} isLoading a boolean that details whether axios is working on a request
 * @param {string | null} error contains an error message if axios receives one
 * @param {sendParams} sendRequest Async callback function that makes an HTTP request using specified parameters
 * @param {Function} clearError Erases the current error. Ex: User presses "OK"
 */
interface AxiosHook {
  isLoading: boolean;
  error: string | null;
  sendRequest: (
    url: string,
    method: Method,
    expectation: {},
    data?: {},
    headers?: {}
  ) => Promise<any>;
  clearError: () => void;
}

/** Self contained axios hook that returns loading and error states.
 *
 * @example useAxios("http://some.url", "POST", {userId, password}, {Authentication: Bearer ${token}})
 *
 * @example useAxios("http://some.url", "get")
 *
 * @returns {{boolean, string | null, Function, Function}}
 * isLoading: a boolean that details whether axios is working on a request.
 *
 * error: contains an error message if axios receives one
 *
 * sendRequest: Async callback function that makes an HTTP request using specified parameters
 *
 * clearError: A function that erases the current error. Ex: User presses "OK"
 */
export const useAxios = (): AxiosHook => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async (
      url: string,
      method: Method = "GET",
      data: {} | null = null,
      headers: {} = {}
    ) => {
      setIsLoading(true);
      console.log(method, url, data, headers);
      await axios({ method, url, data, headers })
        .then((res) => {
          setIsLoading(false);
          return { responseData: res.data };
        })
        .catch((err) => {
          setError(err.response.data.message);
          setIsLoading(false);
          throw err;
        });
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  return { isLoading, error, sendRequest, clearError };
};
