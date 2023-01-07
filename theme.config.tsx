import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./styles.module.css";
import { NextSeoProps } from "next-seo";
import { useRouter } from "next/router";

export const inter = Inter({
  subsets: ["latin"],
});

const config: DocsThemeConfig = {
  logo: () => {
    const router = useRouter();
    return (
      <>
        <Image
          src="https://cdn.discordapp.com/avatars/645314415578841101/80aa7d2c39e4fa10cf8141d0154093e6.png?size=4096"
          alt="logo"
          width={32}
          height={32}
          style={{ borderRadius: "8px" }}
        />
        <span
          style={{
            marginLeft: "10px",
            fontWeight: 800,
            fontSize: "1.2rem",
          }}
          className={`${inter.className} ${styles.title}`}
        >
          {router.pathname.includes("pl")
            ? "Dokumentacja AmpersandBota"
            : "AmpersandBot Docs"}
        </span>
      </>
    );
  },
  chat: {
    link: "https://discord.gg/ggvm5GKbev",
  },
  docsRepositoryBase: "https://github.com/ampersandbot/docs",
  footer: {
    text: () => {
      const router = useRouter();
      return (
        <p>
          © 2019 - {new Date().getFullYear()} AmpersandBot.{" "}
          {router.pathname.includes("pl")
            ? "Wszelkie prawa zastrzeżone."
            : "All rights reserved."}
        </p>
      );
    },
  },
  useNextSeoProps(): NextSeoProps {
    const router = useRouter();
    return {
      titleTemplate: `%s | ${
        router.pathname.includes("pl")
          ? "Dokumentacja AmpersandBota"
          : "AmpersandBot Docs"
      }`,
    };
  },
  head: (
    <>
      <link rel="icon" href="https://ampersandbot.xyz/favicon.ico" />
    </>
  ),
  i18n: [
    {
      locale: "pl",
      text: "Polski",
    },
    {
      locale: "en-US",
      text: "English (United States)",
    },
  ],
  navigation: {
    next: false,
    prev: true,
  },
  search: {
    emptyResult: () => {
      const router = useRouter();
      return (
        <span className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
          {router.pathname.includes("pl") ? "Brak wyników" : "No results found"}
        </span>
      );
    },
    // @ts-ignore
    loading: () => {
      const router = useRouter();
      return router.pathname.includes("pl")
        ? "Wyszukiwanie..."
        : "Searching...";
    },
    placeholder: () => {
      const router = useRouter();
      return router.pathname.includes("pl") ? "Wyszukaj..." : "Search...";
    },
  },
  editLink: {
    text: () => {
      const router = useRouter();
      return (
        <span>
          {router.pathname.includes("pl")
            ? "Edytuj tę stronę"
            : "Edit this page"}
        </span>
      );
    },
  },
  feedback: {
    content: () => {
      const router = useRouter();
      return (
        <span>
          {router.pathname.includes("pl")
            ? "Pytanie? Daj nam znać!"
            : "Question? Give us feedback!"}
        </span>
      );
    },
  },
  toc: {
    title: () => {
      const router = useRouter();
      return (
        <span>
          {router.pathname.includes("pl") ? "Spis treści" : "On This Page"}
        </span>
      );
    },
  },
};

export default config;
