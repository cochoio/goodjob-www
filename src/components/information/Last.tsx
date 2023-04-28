import { LastWrapper } from "@/styles/Wrapper";
import Image from "next/image";
import React from "react";

export default function Last() {
  return (
    <LastWrapper>
      <div className="image-container">
        <Image
          className="main-image"
          src="/main.svg"
          alt="main"
          width={301}
          height={641}
        />
      </div>
      <div className="text-container">
        <p>
          다양한 소셜 계정으로
          <br />
          쉽고 간편하게 시작해보세요!
        </p>
        <div className="download-container">
          <a
            href="https://play.google.com/store/apps/details?id=io.cocho.goodjob.goodjobapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1/?utm_source=googleplay&utm_medium=referral&utm_campaign=GoodJob"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="download-image"
              alt="google_play_download"
              src="/google_play_download.png"
              width={215}
              height={83}
            />
          </a>
          <a
            href="https://apps.apple.com/kr/app/goodjob-%EC%B0%B8%EC%9E%98%ED%96%88%EC%96%B4%EC%9A%94-%EC%8A%A4%ED%8B%B0%EC%BB%A4-%EC%B9%AD%EC%B0%AC-%EC%B1%8C%EB%A6%B0%EC%A7%80/id6446052088/?utm_source=ios&utm_medium=referral&utm_campaign=GoodJob"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="download-image"
              alt="app_store_download"
              src="/app_store_download.svg"
              width={215}
              height={83}
            />
          </a>
        </div>
      </div>
    </LastWrapper>
  );
}
