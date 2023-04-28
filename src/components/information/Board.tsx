import { BoardWrapper } from "@/styles/Wrapper";
import Image from "next/image";
import React from "react";

export default function Board() {
  return (
    <BoardWrapper>
      <div className="image-container">
        <Image
          className="board-image"
          src="/board-image.svg"
          alt="board-image"
          width={1040}
          height={928}
        />
        <div className="text-container">
          <div className="text-left">
            <p>
              스티커 <span style={{ color: "#FB4848" }}>칭찬보드</span>를 만들어
            </p>
            <p>가족, 친구를 칭찬해보세요!</p>
          </div>
          <div className="text-right">
            <p>스티커를 활용한</p>
            <p>
              다양한 <span style={{ color: "#FB4848" }}>챌린지</span>를
              도전해보세요!
            </p>
          </div>
        </div>
      </div>
    </BoardWrapper>
  );
}
