import React from "react";
import { FooterWrapper } from "@/styles/Wrapper";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <FooterWrapper>
        <div>
          <p style={{ fontWeight: "bold", fontSize: 18 }}>COCHO</p>
          <div className="text-container">
            <div className="text-box">
              <p className="text">주소 : 경기도 부천시 길중로 224</p>
              <p className="text">사업자 등록번호 : 349-12-01737</p>
            </div>
            <div className="text-box">
              <p className="text">대표자(성명) : 이지훈</p>
              <a className="text" href="mailto:support@cocho.io">
                support@cocho.io
              </a>
            </div>
          </div>
          <p>
            Copyright © <span style={{ fontWeight: "bold" }}>COCHO</span>. All
            rights reserved.
          </p>
        </div>
        <div>
          <a
            href="https://play.google.com/store/apps/details?id=io.cocho.goodjob.goodjobapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1/?utm_source=googleplay&utm_medium=referral&utm_campaign=GoodJob"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="download-icon"
              src="/google-play.svg"
              alt="download-to-google-play"
              width={35}
              height={35}
            />
          </a>
          <a
            href="https://apps.apple.com/kr/app/goodjob-%EC%B0%B8%EC%9E%98%ED%96%88%EC%96%B4%EC%9A%94-%EC%8A%A4%ED%8B%B0%EC%BB%A4-%EC%B9%AD%EC%B0%AC-%EC%B1%8C%EB%A6%B0%EC%A7%80/id6446052088/?utm_source=ios&utm_medium=referral&utm_campaign=GoodJob"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="download-icon"
              src="/apple.svg"
              alt="download-to-appstore"
              width={40}
              height={40}
            />
          </a>
        </div>
      </FooterWrapper>
    </footer>
  );
}
