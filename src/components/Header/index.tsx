import styles from "../../styles/Home.module.css";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DarkButton } from "src/components/Darkbutton";
import { Box } from '@mantine/core';

export function Header() {
  return (
    <header className="">


      {/* スマホ時はハンバーガーに */}
      <Link href="/">
        <a href="/" className="rrrr">
          Index
        </a>
      </Link>
      <Link href="/about">
        <a href="/">About page</a>
      </Link>
      <Link href="/contact">
        <a href="/">お問い合わせ</a>
      </Link>

      <DarkButton />
       
    </header>
  );
}
