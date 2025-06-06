import { ROUTES } from "@/constants/routes";
import { Redirect } from "expo-router";

export default function IndexScreen() {
  return <Redirect href={`/${ROUTES.WELCOME}`} />;
}
