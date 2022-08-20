import Head from "next/head";

export default function Seo({ title }) {
  const lsTitle = `${title}  | Next Movies`;
  return (
    <Head>
      <title>{lsTitle}</title>
    </Head>
  );
}
