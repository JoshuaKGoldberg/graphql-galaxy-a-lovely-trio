import { callSomeApi } from "../someApi";

export default function WithServerSideProps({ data }) {
  return (
    <main>
      <h1>Server side data</h1>
      <ul>
        {data.map((datum) => (
          <li key={datum.id}>{datum.text}</li>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps() {
  const data = await callSomeApi();

  return {
    props: { data },
  };
}
