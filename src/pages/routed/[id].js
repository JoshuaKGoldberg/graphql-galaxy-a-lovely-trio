// src/pages/routed/[id].js
import { useRouter } from "next/router";

export default function Routed() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main>
      <h1>Routed page!</h1>
      <p>Query ID: {id}</p>
    </main>
  );
}
