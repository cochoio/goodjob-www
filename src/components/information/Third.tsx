import { ThirdWrapper } from "@/styles/Wrapper";
import Image from "next/image";
import React from "react";

export default function Third() {
  return (
    <ThirdWrapper>
      <div className="content-container">
        <div className="image-container">
          <Image
            className="content-image"
            src="/share-image.svg"
            alt="share-image"
            width={277}
            height={648}
          />
        </div>
        <div className="text-container">
          <p>
            스티커보드를
            <br />
            가족, 친구와 <span style={{ color: "#FB4848" }}>공유</span>
            해보세요!
          </p>
        </div>
      </div>
      <div className="content-container">
        <div className="text-container">
          <p>
            <span style={{ color: "#FB4848" }}>칭찬메모</span>를 입력하여
            <br />
            더욱 세밀한 기록을 할 수 있어요!
          </p>
        </div>
        <div className="image-container">
          <Image
            className="content-image"
            src="/memo-image.svg"
            alt="memo-image"
            width={271}
            height={632}
          />
        </div>
      </div>
    </ThirdWrapper>
  );
}
