import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = ({ token }: { token: string }) => {
  return setToLocalStorage("token", token);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("token");
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role?.toLowerCase(),
    };
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("token");
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedData.exp < currentTime) {
      removeUser();
      // deleteCookies(["token", "refreshToken"]);
      return false;
    }
    return !!authToken;
  } else {
    return false;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage("token");
};
