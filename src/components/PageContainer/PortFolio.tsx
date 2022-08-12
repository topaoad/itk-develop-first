import styles from "../../styles/Home.module.css";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export function PortFolio() {
  return (
    <div className="mmd:mt-10 mt-20">
      <h2 className="sub-title">Blog</h2>
      <div className="mt-5 blog-box">
        <div className="mt-6 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          <Card shadow="sm" p="lg"  withBorder className="rounded-sm">
            <Card.Section>
              <Image
                src="/assets/img/Thumbnail.jpg"
                // height={184}
                alt="sin国王"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={700} className=" text-2xl ">IT KINGDOM</Text>
           
            </Group>

            <Text size="sm" color="dimmed" className="  mt-2 font-medium">
            当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
            </Text>

            <div className="  mt-2 text-xs font-bold">2021.10 - 2021.12</div>
          </Card>
         
          <Card shadow="sm" p="lg"  withBorder>
            <Card.Section>
              <Image
                src="/assets/img/Thumbnail.jpg"
                // height={184}
                alt="sin国王"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={700} className=" text-2xl ">IT KINGDOM</Text>
           
            </Group>

            <Text size="sm" color="dimmed" className="  mt-2 font-medium">
            当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
            </Text>

            <div className="  mt-2 text-xs font-bold">2021.10 - 2021.12</div>
          </Card>
         
          <Card shadow="sm" p="lg"  withBorder>
            <Card.Section>
              <Image
                src="/assets/img/Thumbnail.jpg"
                // height={184}
                alt="sin国王"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={700} className=" text-2xl ">IT KINGDOM</Text>
           
            </Group>

            <Text size="sm" color="dimmed" className="  mt-2 font-medium">
            当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
            </Text>

            <div className="  mt-2 text-xs font-bold">2021.10 - 2021.12</div>
          </Card>
         
          <Card shadow="sm" p="lg"  withBorder >
            <Card.Section>
              <Image
                src="/assets/img/Thumbnail.jpg"
                // height={184}
                alt="sin国王"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={700} className=" text-2xl ">IT KINGDOM</Text>
           
            </Group>

            <Text size="sm" color="dimmed" className="  mt-2 font-medium">
            当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
            </Text>

            <div className="  mt-2 text-xs font-bold">2021.10 - 2021.12</div>
          </Card>
         
          <Card shadow="sm" p="lg"  withBorder>
            <Card.Section>
              <Image
                src="/assets/img/Thumbnail.jpg"
                // height={184}
                alt="sin国王"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={700} className=" text-2xl ">IT KINGDOM</Text>
           
            </Group>

            <Text size="sm" color="dimmed" className="  mt-2 font-medium">
            当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
            </Text>

            <div className="  mt-2 text-xs font-bold">2021.10 - 2021.12</div>
          </Card>
         
          <Card shadow="sm" p="lg"  withBorder>
            <Card.Section>
              <Image
                src="/assets/img/Thumbnail.jpg"
                // height={184}
                alt="sin国王"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={700} className=" text-2xl ">IT KINGDOM</Text>
           
            </Group>

            <Text size="sm" color="dimmed" className="  mt-2 font-medium">
            当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
            </Text>

            <div className="  mt-2 text-xs font-bold">2021.10 - 2021.12</div>
          </Card>
         
        </div>

        <div className="mt-6 ">
          <Button className="font-semibold button-style">View All</Button>
        </div>
      </div>
    </div>
  );
}
