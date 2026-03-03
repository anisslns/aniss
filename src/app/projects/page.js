import DescriptionText from "../components/DescriptionText";
import MainHeadline from "../components/MainHeadline";
import ProjectsShowCase from "../components/ProjectsShowCase";
export const metadata = {
  title: "n8n Automation Projects – Custom AI Workflows | Anis Lounis",
  description:
    "Portfolio of n8n and AI automations, from multi-market creator outreach engines to website typo detection systems that remove busywork and human error.",
  openGraph: {
    title: "Automation Systems I’ve Built | n8n Workflows by Anis Lounis",
    description:
      "Explore real n8n workflows: YouTube, Instagram, and TikTok outreach engines plus a website typo finder, all built to save time and cut operational mistakes.",
    siteName: "Anis Lounis – n8n Automations",
    type: "website",
     icons: {
    icon: "/favicon.ico",
  },
  },
};

function Projects() {
  return (
    <>
      <MainHeadline text="Systems I’ve built" />
      <DescriptionText text="A collection of custom automations designed to eliminate busywork. Each system below was built to solve a specific business problem, saving time and removing human error." />
      <ProjectsShowCase />

    </>
  );
}

export default Projects;
