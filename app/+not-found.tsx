import { ROUTES } from "@/constants/routes";
import { Redirect } from "expo-router";

export default function NotFoundScreen() {
  return <Redirect href={`/${ROUTES.NOT_FOUND}`} />;
}
