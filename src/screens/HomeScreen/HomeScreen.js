import { useEffect, useState } from "react";
import IconsPage from "../../components/IconsPage/IconsPage";
import InputSearch from "../../components/InputSearch/InputSearch";
import getData from "../../services/api";
import { Container } from "./styles";

export default function HomeScreen() {
  const [data, setData] = useState([]);
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
        <InputSearch />
        <IconsPage data={data} />
      </Container>
    </>
  );
}
