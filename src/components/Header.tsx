import { HeaderWrapper } from "@/styles/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <HeaderWrapper>
        <div
          style={{
            textAlign: "left",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Image
            className="background-image"
            src="/title_background_top.png"
            alt="title_background_top"
            width={798}
            height={386}
          />
        </div>
        <Image
          className="background-image"
          src="/title_background_bottom.png"
          alt="title_background_top"
          width={840}
          height={662}
          style={{
            bottom: "0",
            left: "0",
          }}
        />
        <div className="text-container">
          <div className="text-box" style={{ textAlign: "left" }}>
            <Image
              src="/quotation_marks.svg"
              alt="quotation_marks"
              width={50}
              height={50}
            />
            <div className="bold-text-container">
              <span className="bold-text">스티커를 활용한</span>
              <span className="bold-text">칭찬 챌린지!</span>
            </div>
          </div>
          <div className="text-box" style={{ textAlign: "center" }}>
            <div className="text-line">
              <span className="text">가족, 친구가 좋은 일을 할때마다</span>
              <span className="text"> 스티커 하나씩!</span>
            </div>
            <div className="text-line">
              <span className="text">목표를 설정하고 이루어질 때마다</span>
              <span className="text"> 나에게 하나씩!</span>
            </div>
          </div>
          <div className="text-box" style={{ textAlign: "right" }}>
            <span className="bold-text">오늘도 당신을 응원해요!</span>
          </div>

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
      </HeaderWrapper>
    </header>
  );
}
