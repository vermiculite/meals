import { AppProps } from "$fresh/server.ts";
import NavComponent from "../components/NavComponent.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <NavComponent />
      <Component />
    </>
  );
}