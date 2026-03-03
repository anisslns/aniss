import MainHeadline from "../components/MainHeadline";
import DescriptionText from "../components/DescriptionText";
import Subheadline from "../components/Subheadline";
import MuliLines from "../components/MultiLines";
export const metadata = {
  title: "About Anis Lounis – n8n Automation Developer",
  description:
    "Learn how Anis Lounis went from frontend development and site migrations to building custom n8n and AI workflows that replace manual outreach and QA.",
  openGraph: {
    title: "About Anis Lounis – Behind the n8n Workflows",
    description:
      "From migrating sites by hand to automating multi-market creator outreach and website typo detection, this is the story and philosophy behind Anis’s n8n automations.",
    url: "https://your-domain.com/about",
    siteName: "Anis Lounis – n8n Automations",
    type: "website",
  },
};

function About() {
  return (
    <>
      <MainHeadline text="Who am I " />
      <DescriptionText
        text={`I’m Anis Lounis, an AI automation developer focused on building custom n8n workflows, with a frontend background.`}
      />
      <Subheadline text="My journey" />
      <DescriptionText
        text={`I didn’t start in AI. In early 2023, I was working in site migrations, manually moving websites to systeme.io. I spent my nights self-teaching frontend development (React, Next.js), obsessed with understanding how software is actually built.`}
      />

      <Subheadline text="The turning point" />
      <MuliLines>
        <DescriptionText
          text={`The founder of the company I was working for asked me a question that changed my career: "Can we automate our outreach research?"`}
        />
        <DescriptionText
          text={`Our team was drowning in manual work, searching for YouTubers across 6 markets (Portuguese, Arabic, French, Italian, German, Hindi). It was slow, inconsistent, and expensive. I didn't know n8n yet, but I knew code could solve it.`}
        />
        <DescriptionText
          text={`I dove in, learned n8n, and built a custom AI agent. It didn't just "search", it generated niche keywords, verified channel relevancy, and wrote personalized outreach messages in all 6 languages. One click replaced weeks of manual grinding.`}
        />
      </MuliLines>

      <Subheadline text="What I do now" />
      <MuliLines>
        <DescriptionText
          text={`That project hooked me. I realized that businesses don't just need better websites; they need better systems.`}
        />
        <DescriptionText
          text={`Now, I combine my developer background with AI to build custom workflows, like my Website Typo Detector, which automatically scans pages and slacks the team instantly.`}
        />
      </MuliLines>

      <Subheadline text="My philosophy" />
      <MuliLines>
        <DescriptionText
          text={`If a process can be defined, it can be automated. I build the systems that let you focus on growing, not clicking.`}
        />
      </MuliLines>
    </>
  );
}

export default About;
