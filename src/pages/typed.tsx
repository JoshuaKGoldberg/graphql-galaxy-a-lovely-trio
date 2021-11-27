import { GetServerSideProps } from "next";

export interface TypedProps {
  heading: string;
  paragraphs: string[];
}

export default function Typed({ heading, paragraphs }: TypedProps) {
  return (
    <main>
      <h1>{heading}</h1>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<TypedProps> = async () => {
  return {
    props: {
      heading: "Yay, TypeScript!",
      paragraphs: ["TypeScript is love", "TypeScript is life"],
    },
  };
};
