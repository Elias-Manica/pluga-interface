import IconsPage from "../../components/IconsPage/IconsPage";
import InputSearch from "../../components/InputSearch/InputSearch";
import { Container } from "./styles";

export default function HomeScreen() {
  return (
    <>
      <Container>
        <InputSearch />
        <IconsPage />
      </Container>
    </>
  );
}
