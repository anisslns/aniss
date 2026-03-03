import MainHeadline from "@/app/components/MainHeadline";
import projects from "../../components/projects.json";
import DescriptionText from "@/app/components/DescriptionText";
import Subheadline from "@/app/components/Subheadline";
import MuliLines from "@/app/components/MultiLines";
import BulletLists from "@/app/components/BulletLists";
import Available from "@/app/components/Available";
export const metadata = {
  title: "Website Typo Finder – n8n Workflow Case Study | Anis Lounis",
  description:
    "Automated website QA system using n8n that crawls pages, cleans HTML, detects typos across languages with AI, logs to Google Sheets, and alerts translators via Slack.",
  openGraph: {
    title: "Website Typo Finder – Automated Multilingual QA Workflow",
    description:
      "See how this n8n workflow scans live websites for spelling/grammar errors, extracts clean content, uses AI proofreading, and notifies language teams automatically via Sheets and Slack.",
    siteName: "Anis Lounis – n8n Automations",
    type: "article",
     icons: {
    icon: "/favicon.ico",
  },
  },
};

function WebsiteTypo() {
  return (
    <>
      <MainHeadline text={projects[3].title} />
      <Available text={`Can share the workflow on request`} />

      <DescriptionText text="A fully automated system that crawls public website pages, cleans the raw HTML into readable text, lets an AI proofreader spot real spelling and grammar mistakes in many languages, logs every issue with the current and corrected wording into Google Sheets, and notifies the right language team in Slack when a new typo is found." />
      <Subheadline
        text="The problem
"
      />
      <MuliLines className={"space-y-0!"}>
        <DescriptionText
          text={`Catching typos on a live site is boring and unreliable.
`}
        />
        <DescriptionText
          text={`Someone has to click through pages, scan every headline, paragraph, and button, guess what is noise from the layout, paste each fix into a tracking sheet, and ping the translators manually.
`}
        />
        <DescriptionText
          className="mt-[18px]"
          text={`This workflow turns that manual QA loop into a repeatable scan that also alerts the right people automatically.​
`}
        />
      </MuliLines>

      <Subheadline text="What this system does" />
      <MuliLines>
        <DescriptionText text={`In one run, the workflow:`} />
        <BulletLists
          bullets={[
            "Fetches the live HTML of each page you want to review, using a normal browser‑like user agent and headers.​",
            "Extracts headlines, paragraphs, bullets, buttons, links, spans, and metadata while stripping scripts, nav, footers, and other non‑content blocks.",
            "Lets the AI return real mistakes only (not style rewrites), with a description, the current wording, and the corrected version.",
            "Writes each typo into a language‑specific Google Sheet and posts a Slack message to the relevant language channel or translator group with the URL and suggested fix.",
          ]}
        />
      </MuliLines>
      <Subheadline text={`How it works behind the scenes`} />
      <MuliLines className={"space-y-0!"}>
        <DescriptionText
          text={`The workflow is built in n8n and chains together HTTP requests, HTML parsing, AI, Google Sheets, and Slack.`}
        />
        <BulletLists
          className={"list-none mt-4 text-[#1e1e28] font-medium"}
          bullets={["1. Fetching live pages"]}
        />
        <DescriptionText
          className={"ml-4 mb-4"}
          text={`A manual trigger node feeds URLs into an HTTP Request node that downloads each page’s HTML with realistic headers so it behaves like a normal browser visit.`}
        />

        <BulletLists
          className={"list-none mt-4 text-[#1e1e28] font-medium"}
          bullets={["2. Parsing and cleaning the content"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`A Cheerio Parser node pulls out selected elements such as h1–h6, p, li, buttons, and links, while ignoring layout elements like script, style, nav, header, and footer.`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`A custom code step normalizes text, filters obvious noise, deduplicates near‑identical strings, and combines fragments into clean sentences for review.`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["3. AI typo detection"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`The cleaned lines are batched through an AI “Loop”, where a proofreading agent receives the text, the page language, and strict rules on what to flag.
`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`An AI agent then reviews the profile data and decides which creators are actually relevant, discarding noisy or off-topic accounts.`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`The agent returns JSON objects that either contain a real issue (description, original text, corrected full text) or a clear “no mistakes found” signal.`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["4. Parsing, de‑duping, and routing"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`Another code node parses the AI response safely, discards “no mistakes found”, de‑duplicates corrections, and enriches each record with the page URL and language.
`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`A Switch node routes each typo to the correct language path so it can be saved into the matching Google Sheet.`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["5. Sheets logging and Slack alerts"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`For every language, a Google Sheets node appends a new row with typo details, current wording, suggested correction, URL, and workflow status fields.​
`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`A Slack node then posts a concise summary of the typo and link to the sheet into the corresponding translator or locale channel, so the right team can fix it immediately.
`}
        />
      </MuliLines>
      <Subheadline
        text={`What you get out of it
`}
      />
      <MuliLines className="space-y-0!">
        <DescriptionText
          text={`You get a central “typo backlog” for your whole website, organized by language and page URL, plus automatic Slack alerts whenever new issues appear.`}
        />
        <DescriptionText
          text={`Instead of reading pages line by line and chasing people manually, your team just opens the sheet from Slack, fixes the copy, and marks the item done.`}
        />
      </MuliLines>
    </>
  );
}

export default WebsiteTypo;
