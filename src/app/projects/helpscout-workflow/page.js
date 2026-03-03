import MainHeadline from "@/app/components/MainHeadline";
import projects from "../../components/projects.json";
import DescriptionText from "@/app/components/DescriptionText";
import Subheadline from "@/app/components/Subheadline";
import MuliLines from "@/app/components/MultiLines";
import BulletLists from "@/app/components/BulletLists";
import Available from "@/app/components/Available";

function HelpscoutTranslation() {
  return (
    <>
      <MainHeadline text={projects[0].title} />
      <Available text={`Can share the workflow on request`} />

      <DescriptionText text="A one-click n8n automation that translates a newly published HelpScout article into all 27 languages and creates each version as a draft in the correct Help Center categories automatically." />

      <Subheadline text="The problem" />
      <MuliLines className={"space-y-0!"}>
        <DescriptionText
          text={`Translating Help Center content at scale is painfully manual.`}
        />
        <DescriptionText
          text={`Every time an English article is published, someone has to notify language owners, open HelpScout, translate (often via GPT), copy/paste everything, fix formatting, and then repeat the exact same steps 27 times.`}
        />
        <DescriptionText
          className="mt-[18px]"
          text={`This workflow removes that repetitive work and turns it into a single action.`}
        />
      </MuliLines>

      <Subheadline text="What this system does" />
      <MuliLines>
        <DescriptionText text={`In one click, the workflow:`} />
        <BulletLists
          bullets={[
            "Creates draft translations for all 27 HelpScout languages automatically.",
            "Preserves formatting (bold, bullet lists, structure, spacing).",
            "Maps and assigns each translated article to the correct language categories.",
            "Keeps everything organized so each language version lands in the right place by default.",
          ]}
        />
        <DescriptionText
          text={`The team only reviews the drafts and publishes when ready.`}
        />
      </MuliLines>

      <Subheadline text={`How it works behind the scenes`} />
      <MuliLines className={"space-y-0!"}>
        <DescriptionText
          className={"mb-[18px]!"}
          text={`The workflow is built in n8n and connects directly with HelpScout:`}
        />

        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["1. Trigger: English article is published"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`Once an English article is live, the author opens a simple n8n form and clicks “Translate Now”.`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`That click starts the automation and grabs the full article content from HelpScout.`}
        />

        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["2. Translation into 27 languages"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`The workflow translates the article into every supported language in one run.`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`It keeps the structure intact so the output matches the original layout instead of becoming a messy block of text.`}
        />

        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["3. Draft creation in HelpScout (per language)"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`For each language, the workflow creates a new HelpScout article as a draft.`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`This lets language owners review quickly without rebuilding the article from scratch.`}
        />

        <BulletLists
          className={"list-none text-[#1e1e28] font-medium"}
          bullets={["4. Automatic category mapping"]}
        />
        <DescriptionText
          className={"ml-4"}
          text={`If the English article is in categories like “Affiliation” and “Deliverability”, each translation is placed into the equivalent category for that language automatically.`}
        />
        <DescriptionText
          className={"ml-4 mb-[18px]!"}
          text={`No manual sorting, no missed categories, no repetitive clicking through HelpScout.`}
        />
      </MuliLines>

      <Subheadline text={`What still needs manual work`} />
      <MuliLines>
        <DescriptionText text={`Two items still require a human check:`} />
        <BulletLists
          bullets={[
            "Internal links: if the English article links to other Help Center articles, those URLs must be swapped to the translated article links (EN → ES, EN → FR, etc.).",
            "Screenshots: UI screenshots can’t be translated automatically, so they must be updated per language when needed.",
          ]}
        />
        <DescriptionText
          text={`Everything else is handled automatically: 1 click → 27 drafts ready.`}
        />
      </MuliLines>

      <Subheadline text={`What you get out of it`} />
      <MuliLines>
        <BulletLists
          bullets={[
            "Massive time savings for every new Help Center article published in English.",
            "Consistent formatting across all languages (no broken lists or weird spacing).",
            "Correct categorization in every language Help Center automatically.",
            "A clean draft workflow: language owners review + publish instead of rebuilding content.",
          ]}
        />
        <DescriptionText
          text={`The result is a scalable translation process that turns a repetitive 27x task into a single click, with only links and screenshots left for manual review.`}
        />
      </MuliLines>
    </>
  );
}

export default HelpscoutTranslation;
