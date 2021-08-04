import { useCallback, useState, useEffect } from "react";
import jwt from "jwt-decode";

/** Timer object to count how long a user has been logged in */
let logoutTimer: ReturnType<typeof setTimeout>;

/** The expected contents of a decrypted token
 * @param {Object} user A nested object which contains user values
 * @param {string} email
 * @param {string} name
 * @param {string} userId
 */
interface tokenObject {
  user: {
    email: string;
    image: string;
    name: string;
    userId: string;
  };
}

/** Defines the response given by the auth hook
 * @param {Object} userData User state object in useAuth
 * @param {Function} login Decodes the user data and stores locally
 * @param {Function} logout Clears user data in state and locally
 */
interface authResponse {
  userData: {
    email: string | null;
    image: string | null;
    name: string | null;
    userId: string | null;
    token: string | null;
    tokenExpiry: Date | null;
  };
  login: (encryptedToken: string, expirationDate: Date) => void;
  logout: () => void;
}

/** A custom hook that gives userData, login, logout functionality
 * @returns {Object} userData: A nested object with user data.
 *
 * login: Decodes the user data and stores locally
 *
 * logout: Clears user data in state and locally
 */
export const useAuth = (): authResponse => {
  const [userData, setUserData] = useState<{
    email: string | null;
    image: string | null;
    name: string | null;
    userId: string | null;
    token: string | null;
    tokenExpiry: Date | null;
  }>({
    email: null,
    image: null,
    name: null,
    userId: null,
    token: null,
    tokenExpiry: null,
  });

  /**
   * Logs in using an encrypted JWT token.
   *
   * Will look for a locally stored expiration or create one itself
   * @param {string} encryptedToken - Received from the server. Encrypted user object.
   * @param {Date} expirationDate - If this was locally stored (ie: close the browser, reopen) it will use this to stay logged in.
   */
  const login = useCallback((encryptedToken: string, expirationDate: Date) => {
    let decryptedToken: tokenObject = jwt(encryptedToken);

    /**
     * Assigns the user a new expiration date (unless they have one)
     */
    const tokenExpirationDate: Date =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);

    setUserData((prevState) => {
      return {
        ...prevState,
        ...decryptedToken.user,
        token: encryptedToken,
        tokenExpiry: tokenExpirationDate,
      };
    });

    /**
     * Stores the user data locally so they can relogin.
     */
    localStorage.setItem(
      "userData",
      JSON.stringify({
        token: encryptedToken,
        tokenExpiry: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  /**
   * Nulls out all of the user values and deletes their local storage.
   */
  const logout = useCallback(() => {
    setUserData({
      email: null,
      image: null,
      name: null,
      userId: null,
      token: null,
      tokenExpiry: null,
    });
    localStorage.removeItem("userData");
  }, []);

  /**
   * Checks remaining time on the user's token.
   */
  useEffect(() => {
    if (userData.token && userData.tokenExpiry) {
      const remainingTime =
        userData.tokenExpiry.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [userData, logout]);

  /**
   * Checks if the user has previously logged in and their token is still valid in local storage.
   * Logs the user in if true, using the previous time.
   */
  useEffect(() => {
    const retrievedData = localStorage.getItem("userData");
    if (retrievedData) {
      const storedData = JSON.parse(retrievedData);
      if (
        storedData &&
        storedData.token &&
        new Date(storedData.tokenExpiry) > new Date()
      ) {
        login(storedData.token, new Date(storedData.tokenExpiry));
      }
    }
  }, [login]);

  return { userData, login, logout };
};
