import { Suspense } from "react";

async function fetchData(): Promise<string> {
  const res = await fetch("http://localhost:8001");
  return res.text();
}

export default function Home() {
  return (
    <Suspense fallback={<h2 style={{ textAlign: "center", marginTop: "25%" }}>Loading...</h2>}>
      <Content />
    </Suspense>
  );
}

async function Content() {
  const data = await fetchData();

  return (
    <div style={{ textAlign: "center", marginTop: "25%" }}>
      <pre>{data}</pre>
    </div>
  );
}
