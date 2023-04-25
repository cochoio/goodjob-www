import { HeaderWrapper } from "@/styles/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <HeaderWrapper>
        <div className="text-box" style={{ textAlign: "left" }}>
          <Image
            src="/quotation_marks.svg"
            alt="quotation_marks"
            width={50}
            height={50}
          />

          <p className="bold-text">
            스티커를 활용한
            <br />
            칭찬 챌린지!
          </p>
        </div>
        <div className="text-box" style={{ textAlign: "center" }}>
          <p className="text">
            가족, 친구가 좋은 일을 할때마다 스티커 하나씩!
            <br />
            목표를 설정하고 이루어질 때마다 나에게 하나씩!
          </p>
        </div>
        <div className="text-box" style={{ textAlign: "right" }}>
          <p className="bold-text">오늘도 당신을 응원해요!</p>
          <div style={{ alignItems: "center" }}>
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
                height={83}
                style={{ margin: "0 30px 0 20px" }}
              />
            </Link>
          </div>
        </div>
      </HeaderWrapper>
    </header>
  );
}
