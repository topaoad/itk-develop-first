import Link from "next/link";
import { DarkButton } from "src/components/PageContainer/Darkbutton";

import { DrawerMenu } from "../PageContainer/DrawerMenu";
import { NAV_LINKS } from "./headerLinks";



export function Header() {
  return (
    <header className="py-5 text-lg leading-6 font-bold">
      <div className="flex items-center sm-position">
        <DrawerMenu />
        <div className="tw-text-center  font-avenirtitle font-semibold">
          <Link href="/">
            <a className=" "> Shimabu IT University</a>
          </Link>
        </div>
        {/* スマホ時はハンバーガーに */}
        <div className="flex ml-auto pc-menu">
          {/* navigationをmapで表示 */}
          {NAV_LINKS.map((link,i) => (
            <Link key={i} href={`${link.href}`}>
              <a className="mr-4">{link.label}</a>
            </Link>
          ))}
        </div>
        <DarkButton />
      </div>
    </header>
  );
}
