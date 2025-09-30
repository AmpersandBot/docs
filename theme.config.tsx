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

function formatDay(day: number) {
  const last = day % 10;
  switch (last) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

function getMonth(month: number, locale: string) {
  if (locale === "pl") {
    switch (month + 1) {
      case 1:
        return "stycznia";
      case 2:
        return "lutego";
      case 3:
        return "marca";
      case 4:
        return "kwietnia";
      case 5:
        return "maja";
      case 6:
        return "czerwca";
      case 7:
        return "lipca";
      case 8:
        return "sierpnia";
      case 9:
        return "września";
      case 10:
        return "października";
      case 11:
        return "listopada";
      case 12:
        return "grudnia";
      default:
        return "stycznia";
    }
  } else {
    switch (month + 1) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        return "January";
    }
  }
}

const config: DocsThemeConfig = {
  logo: () => {
    const router = useRouter();
    return (
      <>
        <Image
          src="https://cdn.discordapp.com/avatars/645314415578841101/a56f7eb6256059b86386878c6e3326ba.webp?size=1024"
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
          {router.locale === "pl"
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
        router.locale === "pl"
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
          {router.locale === "pl" ? "Brak wyników" : "No results found"}
        </span>
      );
    },
    // @ts-ignore
    loading: () => {
      const router = useRouter();
      return router.locale === "pl" ? "Wyszukiwanie..." : "Searching...";
    },
    placeholder: () => {
      const router = useRouter();
      return router.locale === "pl" ? "Wyszukaj..." : "Search...";
    },
  },
  editLink: {
    text: () => {
      const router = useRouter();
      return (
        <span>
          {router.locale === "pl" ? "Edytuj tę stronę" : "Edit this page"}
        </span>
      );
    },
  },
  feedback: {
    content: () => {
      const router = useRouter();
      return (
        <span>
          {router.locale === "pl"
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
        <span>{router.locale === "pl" ? "Spis treści" : "On This Page"}</span>
      );
    },
  },
  gitTimestamp: (props) => {
    const router = useRouter();
    const d =
      router.locale === "pl"
        ? `${props.timestamp.getDate()} ${getMonth(
            props.timestamp.getMonth(),
            router.locale
          )} ${props.timestamp.getFullYear()}`
        : `${getMonth(props.timestamp.getMonth(), router.locale)} ${formatDay(
            props.timestamp.getDay()
          )} ${props.timestamp.getFullYear()}`;
    return (
      <span>
        {router.locale === "pl" ? "Ostatnia aktualizacja: " : "Last updated: "}
        {d}
      </span>
    );
  },
};

export default config;
