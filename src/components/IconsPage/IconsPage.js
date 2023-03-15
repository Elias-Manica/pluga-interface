import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { getData } from "../../services/api";

import CardModal from "../CardModall/CardModal";
import CardTool from "../CardToll/CardTool";

import { Container, TextEmpty, View } from "./styles";

export default function IconsPage({
  data,
  page,
  setPage,
  hasMore,
  setHasMore,
}) {
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nameModal, setNameModal] = useState("");
  const [imgModal, setImgModal] = useState("");
  const [linkModal, setLinkModal] = useState("");
  const [color, setColor] = useState("");

  async function getTools() {
    try {
      const response = await getData(page);

      return response;
    } catch (error) {}
  }

  const fetchData = async () => {
    const response = await getTools();

    setList([...list, ...response]);

    if (response.length === 0 || response.length < 10) {
      setHasMore(false);
    }

    setPage(page + 1);
  };

  useEffect(() => {
    setList(data);
  }, [data]);

  return (
    <>
      <InfiniteScroll
        dataLength={list.length}
        next={fetchData}
        hasMore={hasMore}
      >
        <Container>
          {list.length > 0 ? (
            list.map((item) => (
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
            ))
          ) : (
            <TextEmpty>
              Ainda não temos essa ferramenta disponível,{" "}
              <b
                onClick={() =>
                  window
                    .open("https://pluga.co/ferramentas/#soon", "_blank")
                    .focus()
                }
              >
                clique aqui
              </b>{" "}
              para ver algumas que estamos de olho
            </TextEmpty>
          )}
        </Container>
      </InfiniteScroll>
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
