import MainHeadline from "@/app/components/MainHeadline";
import projects from "../../components/projects.json";
import DescriptionText from "@/app/components/DescriptionText";
import Subheadline from "@/app/components/Subheadline";
import MuliLines from "@/app/components/MultiLines";
import BulletLists from "@/app/components/BulletLists";
import Available from "@/app/components/Available";
export const metadata = {
  title: "Instagram Outreach Engine – n8n Workflow Case Study | Anis Lounis",
  description:
    "Automated Instagram outreach system using n8n, AI, and Apify to discover multi-market creators, filter by niche, extract public emails, and write personalized messages.",
  openGraph: {
    title: "Instagram Outreach Engine – Automated Creator Lead Generation",
    description:
      "See how this n8n workflow uses Apify scrapers and AI to find relevant Instagram creators across markets, pull public emails, de-duplicate leads, and draft outreach for you.",
    siteName: "Anis Lounis – n8n Automations",
    type: "article",
     icons: {
    icon: "/favicon.ico",
  },
  },
};

function Instagram() {
  return (
    <>
      <MainHeadline text={projects[1].title} />
      <Available text={`Can share the workflow on request`} />

      <DescriptionText text="A fully automated system that discovers relevant Instagram creators across multiple markets, checks if they match your niche, pulls their public contact emails, and drafts a personalized outreach message for each qualified profile." />
      <Subheadline
        text="The problem
"
      />
      <MuliLines className={"space-y-0!"}>
        <DescriptionText
          text={`Finding good Instagram creators in multiple markets is slow and inconsistent.
`}
        />
        <DescriptionText
          text={`Someone has to test keywords, scroll results, open profiles, guess the niche, search for emails, and then write custom messages one by one.
`}
        />
        <DescriptionText
          className="mt-[18px]"
          text={`This workflow turns that into a repeatable system that feeds you fresh, relevant Instagram leads every time it runs.
`}
        />
      </MuliLines>

      <Subheadline text="What this system does" />
      <MuliLines>
        <DescriptionText text={`In one run, the workflow:`} />
        <BulletLists
          bullets={[
            "Targets multiple markets at once (Arabic, Hindi, Portuguese, Italian, Spanish, German – and can be expanded).",
            "Generates and stores new keywords per market so you always explore fresh segments instead of scraping the same people.",
            "Uses Apify actors to find Instagram profiles, extract public data, and pull emails when available.",
          ]}
        />
        <DescriptionText
          text={`The result is a clean sheet of new, de-duplicated leads, each with a short AI-written outreach message.`}
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
          text={`The workflow loops through your markets and generates a fixed number of keywords per market (for example, 5 each).`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`It saves them for reference and only uses keywords that haven’t been used before, so each run explores new profiles, not the same old ones.`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["2. Profile discovery with Apify scrapers"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`For every keyword, the system calls the Apify actor “Instagram Scraper (apify/instagram-scraper)” to search and collect Instagram profiles.`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`If a given keyword returns no leads, it automatically moves on and tries the next keyword so the workflow never gets “stuck” on an empty result.`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["3. Niche filtering + AI relevance check"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`From the scraped profiles, the workflow keeps only those that match the target niche you care about (for example, a certain industry or content theme).
`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`An AI agent then reviews the profile data and decides which creators are actually relevant, discarding noisy or off-topic accounts.`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["4.Email extraction for relevant leads"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`Only for profiles that pass the relevance check, the workflow triggers the Apify actor “Instagram Email Scraper (exporter24/instagram-email-scraper)” to extract email addresses when available.
`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`This focuses your scraping budget on high-signal leads instead of wasting calls on random profiles.`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["5. Personalized outreach message generation"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`For each relevant profile with an email, the AI agent generates a short, personalized outreach message based on the profile’s niche and context.
`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`You get a ready-to-send first touch that feels tailored instead of a generic template.
`}
        />
        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["6. Clean lead storage and de-duplication"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`The final leads are written into the correct Google Sheet (or sheet per market), including profile handle, market, niche, email, and AI message.
`}
        />
        <DescriptionText
          className={"ml-4"}
          text={`Before saving, the workflow compares against existing rows and only keeps new leads, so every run delivers a fresh batch instead of duplicates.
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
            "A multi-market Instagram creator pipeline that runs by itself.",
            "Only profiles that match your niche, with public emails attached when available.",
            "A list that is always “net new”, cleaned of duplicates, with personalized outreach messages ready to send.",
          ]}
        />
        <DescriptionText
          text={`You end up with a clean, always-updated list of Instagram creators instead of spending hours inside the app doing the same manual searches and profile checks`}
        />
      </MuliLines>
    </>
  );
}

export default Instagram;
