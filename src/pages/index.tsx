import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
      <main>
        <Link href="https://play.google.com/store/apps/details?id=io.cocho.goodjob.goodjobapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1/?utm_source=googleplay&utm_medium=referral&utm_campaign=GoodJob">
          <Image
            alt="google_play_download"
            src="/google_play_download.png"
            width={215}
            height={83}
          />
        </Link>
        <Link href="https://apps.apple.com/kr/app/goodjob-%EC%B0%B8%EC%9E%98%ED%96%88%EC%96%B4%EC%9A%94-%EC%8A%A4%ED%8B%B0%EC%BB%A4-%EC%B9%AD%EC%B0%AC-%EC%B1%8C%EB%A6%B0%EC%A7%80/id6446052088/?utm_source=ios&utm_medium=referral&utm_campaign=GoodJob">
          <Image
            alt="app_store_download"
            src="/app_store_download.svg"
            width={215}
            height={81}
          />
        </Link>
      </main>
    </>
  );
}
