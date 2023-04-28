import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import First from "@/components/information/First";
import Second from "@/components/information/Second";

export default function Home() {
  return (
    <>
      <Head>
        <title>굿잡</title>
        <meta
          name="description"
          content="굿잡 | 가족, 친구와 함께 즐기는 스티커를 활용한 칭찬 챌린지 애플리케이션"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <First />
      <Second />
      <Footer />
    </>
  );
}
