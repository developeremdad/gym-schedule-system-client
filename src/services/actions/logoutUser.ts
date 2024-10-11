import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { deleteCookies } from "./deleteCookies";

export const logoutUser = (router: AppRouterInstance) => {
  localStorage.removeItem("token");
  deleteCookies(["token", "refreshToken"]);
  router.push("/");
  router.refresh();

  setTimeout(() => {
    window.location.reload();
  }, 500);
};
