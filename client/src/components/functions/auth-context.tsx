import { createContext } from "react";

/**
 * Authentication Values for users.
 * @param {boolean} isLoggedIn Based on !!token, if it exists, true
 * @param {string} token The encrypted user token from backend
 * @param {Function} login Decodes user token, saves info in context
 * @param {Function} logout Clears user info, local storage
 * @param {string} email User email string
 * @param {string} User name string
 * @param {string} User id from the server
 */
interface AuthValues {
  isLoggedIn: boolean;
  token: string | null;
  login: (encryptedToken: string, expirationDate?: Date) => void;
  logout: () => void;
  email: string | null;
  image: string | null;
  name: string | null;
  userId: string | null;
}

/** Provides the empty states to be overwritten by useAuth */
export const AuthContext = createContext<AuthValues>({
  isLoggedIn: false,
  token: null,
  login: () => {},
  logout: () => {},
  email: null,
  image: null,
  name: null,
  userId: null,
});
