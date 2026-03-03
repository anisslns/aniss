import MainHeadline from "./components/MainHeadline";
import Button from "./components/Button";
import InfiniteScroller from "./components/InfiniteScroller";
import Available from "./components/Available";
import DescriptionText from "./components/DescriptionText";

export const metadata = {
  title: "n8n Automation Developer – Custom AI Workflows | Anis Lounis",
  description:
    "AI-powered n8n developer building custom automations that replace repetitive work with reliable 24/7 workflows, so you save time, cut errors, and scale your business.",
  openGraph: {
    title: "Custom n8n Automations for Creators and SaaS | Anis Lounis",
    description:
      "Done-for-you AI and n8n workflows that turn manual tasks into systems. Book a project, see live automations, and free yourself from repetitive ops.",
    siteName: "Anis Lounis – n8n Automations",
    type: "website",
     icons: {
    icon: "/favicon.ico",
  },
  },
};

export default function Home() {
  return (
    <div>
      <Available text={`Now booking`} />
      <MainHeadline
        text="If you can describe the task, "
        colored="I can automate it"
      />
      <DescriptionText text="Custom AI automations and n8n workflows replace repetitive work with systems that run 24/7, saving you time, reducing errors, and giving you freedom to scale your business." />
      <div className="flex gap-4 mt-10">
        <Button
          hoverEffect="hover:opacity-90"
          backgroundColor="bg-[#1e1e28]"
          textColor="text-white"
          text="Contact me"
          href={"/contact"}
        />

        <Button
          hoverEffect="hover:opacity-90"
          backgroundColor="bg-[#f0f0f0]"
          textColor="text-[#1e1e28]"
          text="View projects"
          href={"/projects"}
        />
      </div>
      <InfiniteScroller
        className="mt-[clamp(2.5rem,-6.7754rem+14.4928vw,5rem)] w-full"
        direction="left"
        speed="slow"
        images={[
          "/n8n.svg",
          "/robot.svg",
          "/js.svg",
          "/next.svg",
          "/react.svg",
          "/tailwind.svg",
          "/html5.svg",
          "/css3.svg",
        ]}
      />
    </div>
  );
}
