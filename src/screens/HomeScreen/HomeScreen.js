import { useEffect, useState } from "react";
import IconsPage from "../../components/IconsPage/IconsPage";
import InputSearch from "../../components/InputSearch/InputSearch";
import { getData } from "../../services/api";

import { Container } from "./styles";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);

  async function getList(page) {
    try {
      const response = await getData(page);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getList(1);
  }, []);

  return (
    <>
      <Container>
        <InputSearch
          data={data}
          setData={setData}
          page={page}
          setPage={setPage}
        />
        <IconsPage data={data} page={page} setPage={setPage} />
      </Container>
    </>
  );
}
