import MainHeadline from "../components/MainHeadline";
import ContactForm from "../components/ContactForm";
import DescriptionText from "../components/DescriptionText";
export const metadata = {
  title: "Contact – n8n Automation Developer | Anis Lounis",
  description:
    "Ready to automate a process with n8n and AI? Share what you want to stop doing manually and get a focused workflow proposal from Anis Lounis.",
  openGraph: {
    title: "Contact Anis Lounis – n8n Automation Developer",
    description:
      "Use the contact form to describe your workflow idea or problem. Get a tailored n8n automation proposal instead of more manual busywork.",    siteName: "Anis Lounis – n8n Automations",
    type: "website",
     icons: {
    icon: "/favicon.ico",
  },
  },
};

function ContactPage() {
  return (
    <>
      <MainHeadline text="Contact me" />
      <ContactForm />
    </>
  );
}

export default ContactPage;
