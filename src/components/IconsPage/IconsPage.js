import CardTool from "../CardToll/CardTool";
import { Container } from "./styles";

const list = [
  {
    app_id: "omie",
    name: "Omie",
    color: "#001E27",
    icon: "https://assets.pluga.co/apps/icons/omie/omie-icon.svg",
    link: "https://pluga.co/ferramentas/omie/",
  },
  {
    app_id: "hotmart",
    name: "Hotmart",
    color: "#F04E23",
    icon: "https://assets.pluga.co/apps/logos/hotmart/hotmart.png",
    link: "https://pluga.co/ferramentas/hotmart/",
  },
  {
    app_id: "eduzz",
    name: "Eduzz",
    color: "#FFCD33",
    icon: "https://assets.pluga.co/apps/logos/eduzz/eduzz.png",
    link: "https://pluga.co/ferramentas/eduzz/",
  },
  {
    app_id: "jira",
    name: "Jira Software",
    color: "#0052cc",
    icon: "https://assets.pluga.co/apps/logos/jira/jira.png",
    link: "https://pluga.co/ferramentas/jira/",
  },
  {
    app_id: "superlogica",
    name: "Superlógica Assinaturas",
    color: "#43AA96",
    icon: "https://assets.pluga.co/apps/icons/superlogica/superlogica-icon.svg",
    link: "https://pluga.co/ferramentas/superlogica/",
  },
  {
    app_id: "calendly",
    name: "Calendly",
    color: "#656a74",
    icon: "https://assets.pluga.co/apps/logos/calendly/calendly.png",
    link: "https://pluga.co/ferramentas/calendly/",
  },
  {
    app_id: "google_docs",
    name: "Google Docs",
    color: "#005CE2",
    icon: "https://assets.pluga.co/apps/icons/google_docs/google_docs-icon.svg",
    link: "https://pluga.co/ferramentas/google_docs/",
  },
  {
    app_id: "twilio",
    name: "Twilio",
    color: "#cf272c",
    icon: "https://assets.pluga.co/apps/logos/twilio/twilio.png",
    link: "https://pluga.co/ferramentas/twilio/",
  },
  {
    app_id: "eventbrite",
    name: "Eventbrite",
    color: "#FF8300",
    icon: "https://assets.pluga.co/apps/icons/eventbrite/eventbrite-icon.svg",
    link: "https://pluga.co/ferramentas/eventbrite/",
  },
  {
    app_id: "pipefy",
    name: "Pipefy",
    color: "#3B5BFD",
    icon: "https://assets.pluga.co/apps/logos/pipefy/pipefy.png",
    link: "https://pluga.co/ferramentas/pipefy/",
  },
  {
    app_id: "active_campaign",
    name: "ActiveCampaign",
    color: "#356ae6",
    icon: "https://assets.pluga.co/apps/logos/active_campaign/active_campaign.png",
    link: "https://pluga.co/ferramentas/active_campaign/",
  },
];

export default function IconsPage() {
  return (
    <>
      <Container>
        {list.map((item) => (
          <CardTool name={item.name} img={item.icon} />
        ))}
      </Container>
    </>
  );
}
