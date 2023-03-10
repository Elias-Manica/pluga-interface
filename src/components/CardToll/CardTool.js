import { Container, Image, Text, ViewText } from "./styles";

export default function CardTool({ name, img, setShowModal }) {
  return (
    <>
      <Container onClick={() => setShowModal(true)}>
        <Image src={img} />
        <ViewText>
          <Text>{name}</Text>
        </ViewText>
      </Container>
    </>
  );
}
