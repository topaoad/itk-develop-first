import styles from "../../styles/Home.module.css";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DarkButton } from "src/components/Darkbutton";
import { Box , Burger } from "@mantine/core";
import { DrawerMenu} from "../DrawerMenu";

export function Header() {
  return (
    <header className="py-5 text-lg leading-6 font-bold">
      <div className="flex items-center sm-position">
        <DrawerMenu/>
        <div className="font-avenirtitle font-semibold">Shimabu IT University</div>
        {/* スマホ時はハンバーガーに */}
        <div  className="flex ml-auto pc-menu">
          <Link href="/">
            <a className=" mr-4">About</a>
          </Link>
          <Link href="/contact">
            <a className=" mr-4">Blog</a>
          </Link>
          <Link href="/contact">
            <a className=" mr-4">Portfolio</a>
          </Link>
          <Link href="/contact">
            <a className=" mr-4">Contact</a>
          </Link>
        </div>
        <DarkButton />

      </div>
    </header>
  );
}
