import MainHeadline from "@/app/components/MainHeadline";
import projects from "../../components/projects.json";
import DescriptionText from "@/app/components/DescriptionText";
import Subheadline from "@/app/components/Subheadline";
import MuliLines from "@/app/components/MultiLines";
import BulletLists from "@/app/components/BulletLists";
import Available from "@/app/components/Available";
export const metadata = {
  title: "TikTok Outreach Engine – n8n Workflow Case Study | Anis Lounis",
  description:
    "Automated TikTok outreach system using n8n, AI, and Apify to discover business-focused creators across markets, filter by relevance, extract public emails, and generate personalized notes.",
  openGraph: {
    title: "TikTok Outreach Engine – Automated Creator Lead Generation",
    description:
      "See how this n8n workflow targets multi-language TikTok creators in online business niches, uses Apify scrapers for discovery, AI for relevance checks, and delivers de-duplicated leads with personalized outreach.",
    siteName: "Anis Lounis – n8n Automations",
    type: "article",
     icons: {
    icon: "/favicon.ico",
  },
  },
};

function TikTok() {
  return (
    <>
      <MainHeadline text={projects[2].title} />
      <Available text={`Can share the workflow on request`} />

      <DescriptionText text="A fully automated TikTok outreach engine that finds business‑focused creators in multiple languages, checks if they are relevant for your offer, pulls their public emails, and generates a personalized outreach note for each lead, turning manual profile hunting into a repeatable one‑click system." />
      <Subheadline
        text="The problem
"
      />
      <MuliLines className={"space-y-0!"}>
        <DescriptionText
          text={`Finding serious TikTok creators by hand is slow and noisy.
`}
        />
        <DescriptionText
          text={`Someone has to search in each language, open profiles one by one, guess if they talk about online business or marketing, check followers, hunt for an email, and then write a custom DM or email.
`}
        />
        <DescriptionText
          className="mt-[18px]"
          text={`This workflow turns that chaos into a structured system so you get qualified leads instead of random profiles.
`}
        />
      </MuliLines>

      <Subheadline text="What this system does" />
      <MuliLines>
        <DescriptionText text={`In one run, the workflow:`} />
        <BulletLists
          bullets={[
            "Targets several markets at once (Arabic, Portuguese, Hindi, Italian, German, Spanish).",
            "Generates fresh, native‑language keyword ideas per market so discovery does not go stale.",
            "Scrapes TikTok profiles and videos via Apify, keeping only accounts that match your follower and niche rules.",
            "Extracts public emails where available and generates a short, language‑matched personalized note for each relevant creator.",
            "Writes all new leads into your Google Sheets, marking only never‑seen profiles as “Never contacted”.",
          ]}
        />
      </MuliLines>
      <Subheadline text={`How it works behind the scenes`} />
      <MuliLines className={"space-y-0!"}>
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["1. Multi-market keyword generation"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`The workflow loops through your target markets and asks an AI agent to create native‑language TikTok search keywords around online business, digital products, funnels, and creator monetization, while avoiding specific brand names.`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`These keywords are stored in a data table so future runs always explore new search phrases instead of repeating the same ones.`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["2. Profile discovery via Apify"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`For each keyword, the system triggers an Apify TikTok Scraper actor and retrieves batches of profiles plus their latest video captions.`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`A code step normalizes everything into a clean structure with username, profile URL, followers, bio, caption, market, and keyword.​`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["3. AI relevance check and note generation"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`An AI agent reviews each profile and decides if it fits: content about online business, digital marketing, funnels, digital products, side hustles, or creator growth in the right language.​
`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`When a profile is marked “Relevant”, the agent returns a short, hyper‑specific personalized note in the creator’s language, based on their bio and recent video.​

`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["4. Email extraction for qualified profiles"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`Only after a profile passes the relevance check does the workflow call a dedicated TikTok email scraper actor on their profile URL.
`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`The results are merged so each lead has username, link, market, followers, keyword, email (if found), and the AI‑written personalized note.`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["5. De‑duplication and clean sheets per market"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`For each market, the workflow appends leads to a “raw” sheet, compares them against a cleaned master sheet, and keeps only profiles whose link does not already exist.
`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`New leads are enriched with “Status = Never contacted”, moved into the cleaned sheet, and also logged into a global compiled list so you can track outreach across platforms.
`}
        />
      </MuliLines>
      <Subheadline
        text={`What you get out of it
`}
      />
      <MuliLines className={"space-y-0!"}>
        <DescriptionText
          text={`You end up with a constantly updated list of TikTok creators across several languages who actually talk about online business and digital marketing.`}
        />
        <DescriptionText
          text={`Each row already includes a public email where available and a personalized intro line in their language, ready to plug into your CRM or outreach system.`}
        />{" "}
        <DescriptionText
          text={`Instead of hunting profiles inside TikTok search, you just open your sheet, sort by followers or market, and start sending highly targeted messages.`}
        />{" "}
      </MuliLines>
    </>
  );
}

export default TikTok;
