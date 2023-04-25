import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const router = useRouter();
  return (
    <div style={{ position: "absolute" }}>
      <Image
        src="/logo.svg"
        alt="goodjob_logo"
        width={169}
        height={78}
        style={{ margin: "10px", cursor: "pointer" }}
        onClick={() => {
          router.push({
            pathname: "/",
          });
        }}
      />
    </div>
  );
}
