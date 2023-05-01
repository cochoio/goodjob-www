import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import First from "@/components/information/First";
import Second from "@/components/information/Second";
import Third from "@/components/information/Third";
import Last from "@/components/information/Last";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          굿잡 goodjob | 가족, 친구와 함께 즐기는 스티커를 활용한 칭찬 챌린지
          애플리케이션
        </title>
        <meta
          name="description"
          content="💪 스티커를 활용한 칭찬 챌린지! 🙂 가족, 친구가 좋은 일을 할때마다 스티커 하나씩! 목표를 설정하고 이루어질 때마다 나에게 하나씩! 오늘도 당신을 응원해요! 👍, 칭찬 스티커, 참 잘했어요, 챌린지, 칭찬 어플리케이션"
        />
        <meta
          name="google-site-verification"
          content="dzK6vbDsyX99RnB3_bEyP5lsP1ZkaNTgfvnrjkPE9nA"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />

        {/* Google tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <Header />
      <First />
      <Second />
      <Third />
      <Last />
      <Footer />
    </>
  );
}
