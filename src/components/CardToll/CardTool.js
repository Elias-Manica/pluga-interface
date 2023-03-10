import { Container, Image, Text, ViewText } from "./styles";

export default function CardTool({ name, img }) {
  return (
    <>
      <Container>
        <Image src={img} />
        <ViewText>
          <Text>{name}</Text>
        </ViewText>
      </Container>
    </>
  );
}
