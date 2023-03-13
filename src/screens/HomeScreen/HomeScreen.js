import { AnimatePresence, useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import IconsPage from "../../components/IconsPage/IconsPage";
import InputSearch from "../../components/InputSearch/InputSearch";
import { getData, randomTool } from "../../services/api";

import { Container } from "./styles";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);
  const [listBanner, setListBanner] = useState("");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isOpen, toggleOpen] = useCycle(false, true);

  async function getList(page) {
    try {
      const response = await getData(page);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function getToolBanner() {
    const index = Math.floor(Math.random() * 55);
    const response = randomTool(index);

    setListBanner(response);

    return response;
  }

  useEffect(() => {
    getList(1);
    getToolBanner();
  }, []);

  return (
    <>
      <Container>
        <AnimatePresence>
          {listBanner && (
            <Banner
              list={listBanner}
              index={index}
              setIndex={setIndex}
              direction={direction}
              setDirection={setDirection}
              isOpen={isOpen}
              toggleOpen={toggleOpen}
            />
          )}
        </AnimatePresence>
        <InputSearch
          data={data}
          setData={setData}
          page={page}
          setPage={setPage}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
        />
        <IconsPage data={data} page={page} setPage={setPage} />
      </Container>
    </>
  );
}
