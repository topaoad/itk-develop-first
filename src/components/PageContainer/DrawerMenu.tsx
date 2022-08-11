import styles from "../../styles/Home.module.css";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DarkButton } from "src/components/PageContainer/Darkbutton";
import { Drawer, Button, Group, Box, Burger } from "@mantine/core";
import { useState } from "react";

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
      >
        <div className="flex flex-col font-avenirtitle">
          <Link href="/">
            <a className=" leading-10 text-3xl mt-4 font-bold">About</a>
          </Link>
          <Link href="/contact">
            <a className=" leading-10 text-3xl mt-4 font-bold">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="leading-10  text-3xl mt-4 font-bold">Portfolio</a>
          </Link>
          <Link href="/contact">
            <a className=" leading-10 text-3xl mt-4 font-bold">Contact</a>
          </Link>
        </div>
      </Drawer>
      {/* スマホ用ドロワー */}
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
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
