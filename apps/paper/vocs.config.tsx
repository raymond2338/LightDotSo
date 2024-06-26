// Copyright 2023-2024 Light, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { defineConfig } from "vocs";
import pkg from "../../package.json";

export default defineConfig({
  // baseUrl:
  //   process.env.VERCEL_ENV === "production"
  //     ? "https://paper.light.so"
  //     : undefined,
  description: "Technical specifications for Light.",
  title: "Lightpaper",
  titleTemplate: "%s | Lightpaper",
  head() {
    return (
      // eslint-disable-nextline react/jsx-no-useless-fragment
      <>
        <link
          rel="icon"
          href="https://light.so/favicon.ico"
          type="image/x-icon"
          sizes="255x256"
        />
      </>
    );
  },
  editLink: {
    pattern:
      "https://github.com/LightDotSo/LightDotSo/edit/main/apps/paper/pages/:path",
    text: "Suggest changes to this page.",
  },
  // iconUrl: {
  //   light: "https://paper.light.so/light-icon-light.svg",
  //   dark: "https://paper.light.so/light-icon-dark.svg",
  // },
  logoUrl: {
    light: "/light-logo-light.svg",
    dark: "/light-logo-dark.svg",
  },
  rootDir: ".",
  ogImageUrl: {
    "/":
      process.env.VERCEL_ENV === "production"
        ? "https://paper.light.so/og-image.png"
        : "https://paper.light.so/preview-og-image.png",
    // Thank you `wevm` team for providing the OG image service!
    "/docs":
      "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  },
  socials: [
    {
      icon: "discord",
      link: "https://discord.gg/Vgfxg2Rcy8",
    },
    {
      icon: "github",
      link: "https://github.com/LightDotSo/LightDotSo",
    },
    // {
    //   icon: "warpcast",
    //   link: "https://warpcast.com/~/channel/lightdotso",
    // },
    {
      icon: "x",
      link: "https://x.com/LightDotSo",
    },
  ],
  sidebar: [
    {
      text: "Introduction",
      items: [
        {
          text: "Why Light",
          link: "/introduction",
        },
        {
          text: "Chain Abstraction",
          link: "/introduction/chain-abstraction",
        },
        {
          text: "Products",
          link: "/introduction/products",
        },
        {
          text: "User Flow",
          link: "/introduction/user-flow",
        },
        {
          text: "Comparison",
          link: "/introduction/comparison",
        },
        {
          text: "Philosophy",
          link: "/introduction/philosophy",
        },
      ],
    },
    {
      text: "Goals",
      // collapsed: false,
      items: [
        {
          text: "Goals for Light",
          link: "/goals",
        },
        {
          text: "The Endgame",
          link: "/goals/end-game",
        },
      ],
    },
    // {
    //   text: "Concepts",
    //   collapsed: false,
    //   items: [
    //     {
    //       text: "Cross-chain Smart Account",
    //       link: "/concepts/cross-chain-smart-account",
    //     },
    //     {
    //       text: "Gas Abstraction",
    //       link: "/concepts/gas-abstraction",
    //     },
    //     {
    //       text: "Programmable Execution",
    //       link: "/concepts/programmable-execution",
    //     },
    //     {
    //       text: "Keystore Management",
    //       link: "/concepts/keystore-management",
    //     },
    //     {
    //       text: "Signature Aggregation",
    //       link: "/concepts/signature-aggregation",
    //     },
    //     {
    //       text: "Transaction Initiation",
    //       link: "/concepts/transaction-initiation",
    //     },
    //   ],
    // },
    {
      text: "Products",
      items: [
        {
          text: "Light Smart Wallet",
          link: "/smart-wallet",
        },
        {
          text: "Light Gas Abstraction",
          link: "/gas-abstraction",
        },
        {
          text: "Light Programmable Intents",
          link: "/programmable-intents",
          items: [
            {
              text: "Operators",
              link: "/programmable-intents/operators",
            },
          ],
        },
      ],
    },
    {
      text: "Resources",
      collapsed: false,
      items: [
        {
          text: "Actors",
          link: "/resources/actors",
        },
        {
          text: "Contracts",
          link: "/resources/contracts",
        },
        {
          text: "Fees",
          link: "/resources/fees",
        },
      ],
    },
    {
      text: "Glossary",
      collapsed: true,
      items: [
        {
          text: "FAQ",
          link: "/glossary/faq",
        },
        {
          text: "Known Limitations",
          link: "/glossary/limitations",
          items: [
            {
              text: "EVM",
              link: "/glossary/limitations/evm",
            },
            {
              text: "4337",
              link: "/glossary/limitations/4337",
            },
          ],
        },
        {
          text: "Problems",
          link: "/glossary/problems",
        },
        {
          text: "Terms",
          link: "/glossary/terms",
        },
      ],
    },
    {
      text: "References",
      collapsed: true,
      items: [
        {
          text: "Acknowledgements",
          link: "/references/acknowledgements",
        },
        {
          text: "Sources",
          link: "/references/sources",
        },
        {
          text: "Thinking",
          link: "/references/thinking",
        },
      ],
    },
    {
      text: "Use Cases",
      collapsed: true,
      items: [
        {
          text: "Comparison",
          link: "/use-cases/comparison",
        },
        {
          text: "List of Use Cases",
          link: "/use-cases/list",
        },
        {
          text: "Zora's Example",
          link: "/use-cases/zora",
        },
      ],
    },
  ],
  topNav: [
    {
      text: "Home",
      link: "https://light.so/home",
    },
    {
      text: "Demo",
      link: "https://light.so/demo",
    },
    {
      text: pkg.version,
      items: [
        {
          text: pkg.version,
          link: `https://github.com/LightDotSo/LightDotSo/commit/${process.env.VERCEL_GIT_COMMIT_SHA}`,
        },
        {
          text: "Changelog",
          link: "https://github.com/LightDotSo/LightDotSo/blob/main/CHANGELOG.md",
        },
        // {
        //   text: "Contributing",
        //   link: "https://github.com/LightDotSo/LightDotSo/blob/main/CONTRIBUTING.md",
        // },
      ],
    },
  ],
});
