import Link from "next/link";
import React from "react";
import { Drawer, Burger } from "@mantine/core";
import { useState } from "react";
import { NAV_LINKS } from "../Header/headerLinks";

export const DrawerMenu = () => {
  const [opened, setOpened] = useState(false);

  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        // title="Register"
        padding="xl"
        position="top"
        size="full"
        className="hello-eff"
      >
        <div className="flex flex-col font-avenirtitle">
          {/* navigationをmapで表示 */}
          {NAV_LINKS.map((link) => (
          <Link key={link.label} href={`${link.href}`}>
            <a onClick={(() => opened?setOpened(false):setOpened(true))} className="leading-10 text-3xl mt-4 font-bold">{link.label}</a>
          </Link>
          ))}
        </div>
      </Drawer>
      {/* スマホ用ドロワー */}
      <Burger
        opened={opened}
        onClick={() => opened?setOpened(false):setOpened(true)}
        title={title}
        className="z-500"
      />
      {/* <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group> */}
    </>
  );
};

// export function Header() {
//   return (
//     <header className="py-5 text-lg leading-6">
//       <div className="flex justify-between">
//         <div className="font-headertitle font-semibold">Shimabu IT University</div>
//         {/* スマホ時はハンバーガーに */}
//         <div  className="flex ">
//           <Link href="/">
//             <a className=" mr-4">About</a>
//           </Link>
//           <Link href="/contact">
//             <a className=" mr-4">Blog</a>
//           </Link>
//           <Link href="/contact">
//             <a className=" mr-4">Portfolio</a>
//           </Link>
//           <Link href="/contact">
//             <a className=" mr-4">Contact</a>
//           </Link>
//         <DarkButton />
//         </div>

//       </div>
//     </header>
//   );
// }
