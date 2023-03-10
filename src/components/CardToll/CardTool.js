import { Container, Image, Text, ViewImage, ViewText } from "./styles";

export default function CardTool({ name, img, setShowModal, color }) {
  return (
    <>
      <Container onClick={() => setShowModal(true)}>
        <ViewImage colorCard={color}>
          <Image src={img} />
        </ViewImage>
        <ViewText>
          <Text>{name}</Text>
        </ViewText>
      </Container>
    </>
  );
}
