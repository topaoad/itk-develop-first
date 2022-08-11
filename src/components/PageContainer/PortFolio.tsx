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
        <div className="mt-6 ">
          <Card shadow="sm" p="lg"  withBorder>
            <Card.Section>
              <Image
                src="/assets/img/Thumbnail.jpg"
                // height={184}
                alt="sin国王"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        </div>

        <div className="mt-6 ">
          <Button className="font-semibold button-style">View All</Button>
        </div>
      </div>
    </div>
  );
}
