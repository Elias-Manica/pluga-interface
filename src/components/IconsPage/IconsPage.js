import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import CardModal from "../CardModall/CardModal";
import CardTool from "../CardToll/CardTool";

import { Container, View } from "./styles";

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
    icon: "https://assets.pluga.co/apps/icons/hotmart/hotmart-icon.svg",
    link: "https://pluga.co/ferramentas/hotmart/",
  },
  {
    app_id: "eduzz",
    name: "Eduzz",
    color: "#FFCD33",
    icon: "https://assets.pluga.co/apps/icons/eduzz/eduzz-icon.svg",
    link: "https://pluga.co/ferramentas/eduzz/",
  },
  {
    app_id: "jira",
    name: "Jira Software",
    color: "#0052cc",
    icon: "https://assets.pluga.co/apps/icons/jira/jira-icon.svg",
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
    icon: "https://assets.pluga.co/apps/icons/calendly/calendly-icon.svg",
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
    icon: "https://assets.pluga.co/apps/icons/twilio/twilio-icon.svg",
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
    icon: "https://assets.pluga.co/apps/icons/pipefy/pipefy-icon.svg",
    link: "https://pluga.co/ferramentas/pipefy/",
  },
  {
    app_id: "active_campaign",
    name: "ActiveCampaign",
    color: "#356ae6",
    icon: "https://assets.pluga.co/apps/icons/active_campaign/active_campaign-icon.svg",
    link: "https://pluga.co/ferramentas/active_campaign/",
  },
];

export default function IconsPage() {
  const [showModal, setShowModal] = useState(false);
  const [nameModal, setNameModal] = useState("");
  const [imgModal, setImgModal] = useState("");
  const [linkModal, setLinkModal] = useState("");
  const [color, setColor] = useState("");

  return (
    <>
      <Container>
        {list.map((item) => (
          <View
            onClick={() => {
              setNameModal(item.name);
              setImgModal(item.icon);
              setLinkModal(item.link);
              setColor(item.color);
              const pluga0 = localStorage.getItem("pluga0");
              const pluga1 = localStorage.getItem("pluga1");
              const pluga2 = localStorage.getItem("pluga2");
              const pluga3 = localStorage.getItem("pluga3");
              if (pluga0) {
                if (!pluga1 && JSON.parse(pluga0).app_id !== item.app_id) {
                  localStorage.setItem(
                    "pluga1",
                    JSON.stringify(JSON.parse(pluga0))
                  );
                  localStorage.setItem(
                    "pluga0",
                    JSON.stringify({
                      app_id: item.app_id,
                      name: item.name,
                      color: item.color,
                      icon: item.icon,
                      link: item.link,
                    })
                  );
                  return;
                }
                if (pluga1) {
                  if (JSON.parse(pluga0).app_id === item.app_id) {
                    return;
                  }
                  if (!pluga2) {
                    localStorage.setItem(
                      "pluga1",
                      JSON.stringify(JSON.parse(pluga0))
                    );
                    localStorage.setItem(
                      "pluga2",
                      JSON.stringify(JSON.parse(pluga1))
                    );
                    localStorage.setItem(
                      "pluga0",
                      JSON.stringify({
                        app_id: item.app_id,
                        name: item.name,
                        color: item.color,
                        icon: item.icon,
                        link: item.link,
                      })
                    );
                    return;
                  }
                  if (pluga2) {
                    if (JSON.parse(pluga0).app_id === item.app_id) {
                      return;
                    }
                    if (item.app_id === JSON.parse(pluga1).app_id) {
                      return;
                    }
                    if (item.app_id === JSON.parse(pluga2).app_id) {
                      return;
                    }
                    if (!pluga3) {
                      localStorage.setItem(
                        "pluga1",
                        JSON.stringify(JSON.parse(pluga0))
                      );
                      localStorage.setItem(
                        "pluga2",
                        JSON.stringify(JSON.parse(pluga1))
                      );
                      localStorage.setItem(
                        "pluga3",
                        JSON.stringify(JSON.parse(pluga2))
                      );
                      localStorage.setItem(
                        "pluga0",
                        JSON.stringify({
                          app_id: item.app_id,
                          name: item.name,
                          color: item.color,
                          icon: item.icon,
                          link: item.link,
                        })
                      );
                      return;
                    }
                    if (pluga3) {
                      if (JSON.parse(pluga0).app_id === item.app_id) {
                        return;
                      }
                      if (item.app_id === JSON.parse(pluga1).app_id) {
                        return;
                      }
                      if (item.app_id === JSON.parse(pluga2).app_id) {
                        return;
                      }
                      if (item.app_id === JSON.parse(pluga3).app_id) {
                        return;
                      }
                      localStorage.setItem(
                        "pluga1",
                        JSON.stringify(JSON.parse(pluga0))
                      );
                      localStorage.setItem(
                        "pluga2",
                        JSON.stringify(JSON.parse(pluga1))
                      );
                      localStorage.setItem(
                        "pluga3",
                        JSON.stringify(JSON.parse(pluga2))
                      );
                      localStorage.setItem(
                        "pluga0",
                        JSON.stringify({
                          app_id: item.app_id,
                          name: item.name,
                          color: item.color,
                          icon: item.icon,
                          link: item.link,
                        })
                      );
                    }
                  }
                }
              }
              localStorage.setItem(
                "pluga0",
                JSON.stringify({
                  app_id: item.app_id,
                  name: item.name,
                  color: item.color,
                  icon: item.icon,
                  link: item.link,
                })
              );
            }}
            key={item.app_id}
          >
            <CardTool
              name={item.name}
              img={item.icon}
              color={item.color}
              setShowModal={setShowModal}
            />
          </View>
        ))}
      </Container>
      <AnimatePresence>
        {showModal && (
          <CardModal
            showModal={showModal}
            setShowModal={setShowModal}
            name={nameModal}
            imgModal={imgModal}
            linkModal={linkModal}
            color={color}
          />
        )}
      </AnimatePresence>
    </>
  );
}
