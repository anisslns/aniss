import MainHeadline from "@/app/components/MainHeadline";
import projects from "../../components/projects.json";
import DescriptionText from "@/app/components/DescriptionText";
import Subheadline from "@/app/components/Subheadline";
import MuliLines from "@/app/components/MultiLines";
import BulletLists from "@/app/components/BulletLists";
import Available from "@/app/components/Available";
export const metadata = {
  title: "YouTube Outreach Engine – n8n Workflow Case Study | Anis Lounis",
  description:
    "n8n and AI workflow that finds multi-market YouTube creators, pulls public emails, checks relevancy, and writes personalized outreach messages automatically.",
  openGraph: {
    title: "YouTube Outreach Engine – Automated Creator Lead Generation",
    description:
      "See how this n8n workflow automates YouTube creator discovery across languages, filters by quality, extracts public emails, and drafts outreach so you skip manual research.",
    siteName: "Anis Lounis – n8n Automations",
    type: "article",
     icons: {
    icon: "/favicon.ico",
  },
  },
};

function Youtube() {
  return (
    <>
      <MainHeadline text={projects[0].title} />
      <Available text={`Can share the workflow on request`} />

      <DescriptionText text="A fully automated system that finds relevant YouTube creators in multiple languages, checks if they are a good fit, pulls their contact details, and drafts a personalized outreach message for you." />
      <Subheadline
        text="The problem
"
      />
      <MuliLines className={"space-y-0!"}>
        <DescriptionText
          text={`Finding good creators manually is slow and repetitive.
`}
        />
        <DescriptionText
          text={`Someone has to search YouTube, test keywords, open channels one by one, check if the creator is active, hunt for an email, and then write a custom message from scratch every time.
`}
        />
        <DescriptionText
          className="mt-[18px]"
          text={`This workflow replaces that entire manual process with a system that runs on its own.
`}
        />
      </MuliLines>

      <Subheadline text="What this system does" />
      <MuliLines>
        <DescriptionText text={`In one run, the workflow:`} />
        <BulletLists
          bullets={[
            "Targets multiple markets at once (Arabic, Indian, Portuguese, Spanish, German, Italian).",
            "Generates fresh keyword ideas per market, so you are not searching the same terms over and over.",
            "Pulls YouTube data via the API and filters only channels that meet your quality rules (for example, more than 1k subscribers and recently active).",
          ]}
        />
        <DescriptionText
          text={`You can adjust the thresholds at any time if you want to go after bigger or smaller creators.`}
        />
      </MuliLines>
      <Subheadline text={`How it works behind the scenes`} />
      <MuliLines className={"space-y-0!"}>
        <DescriptionText
          className={"mb-[18px]!"}
          text={`The workflow is built using n8n and integrates with multiple services:`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["1. Multi-market keyword generation"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={` The workflow loops through your target markets and generates a set of keywords for each.`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`It stores those keywords in a table so future runs always explore new variations instead of repeating the same searches.`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["2. Channel discovery via YouTube API"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={` For every keyword, the system calls the YouTube API and collects channel data in bulk.`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`It then filters the results and keeps only channels that match your rules (for example: at least 1k subscribers, still publishing content recently).`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["3. Email extraction (no captcha breaking)"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={` For each qualified channel, the workflow scans the public “About” section and recent video descriptions to find email addresses.
`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`It does not touch emails hidden behind YouTube’s captcha-protected contact form, staying within safe and legal boundaries.`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["4. AI relevance check and mini outreach draft"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`An AI agent reviews the channel details and checks if the creator looks relevant for your use case.
`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`When a lead passes this check, the AI writes a short, personalized outreach message tailored to that specific creator.`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["5. De-duplication and clean lead list"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`The final leads are written into your Google Sheet (or database) and compared to what is already there.
`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`Only brand-new creators are added, so you never waste time re-contacting the same person twice.
`}
        />
      </MuliLines>
      <Subheadline
        text={`What you get out of it
`}
      />
      <MuliLines>
        <BulletLists
          bullets={[
            "A constantly growing list of fresh, relevant YouTube creators across multiple languages and markets.",
            "Verified contact emails collected from public channel/about content.",
            "A ready-to-use, personalized first message for each lead, written automatically.",
          ]}
        />
        <DescriptionText
          text={`You end up with a clean, always-updated outreach list instead of spending hours inside YouTube doing the same searches by hand.`}
        />
      </MuliLines>
    </>
  );
}

export default Youtube;
