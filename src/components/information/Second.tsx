import { CalendarWrapper } from "@/styles/Wrapper";
import Image from "next/image";
import React from "react";

export default function Second() {
  return (
    <CalendarWrapper>
      <div className="image-container">
        <Image
          className="calendar-image"
          src="/calendar-image-1.svg"
          alt="claendar-image-1"
          width={716}
          height={640}
        />
        <Image
          className="calendar-image"
          src="/calendar-image-2.svg"
          alt="claendar-image-2"
          width={708}
          height={632}
        />
      </div>
      <div className="text-container">
        <p>
          날짜 별로 한 눈에 볼 수 있는
          <br />
          스티커
          <span style={{ color: "#FB4848" }}>캘린더</span>로<br />
          다양한 챌린지를 도전해보세요!
        </p>
      </div>
    </CalendarWrapper>
  );
}
