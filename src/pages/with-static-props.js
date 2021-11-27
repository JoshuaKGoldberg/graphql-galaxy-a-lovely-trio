import { callSomeApi } from "../someApi";

export default function WithStaticProps({ data }) {
  return (
    <main>
      <h1>Static data</h1>
      <ul>
        {data.map((datum) => (
          <li key={datum.id}>{datum.text}</li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const data = await callSomeApi();

  return {
    props: { data },
    revalidate: 10,
  };
}
