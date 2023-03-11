import styled from "styled-components";

export const Container = styled.div`
  height: 400px;
  width: 60%;
  position: fixed;
  background-color: white;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 25px;
  @media (max-width: 900px) {
    height: 380px;
  }
`;

export const ViewOpacity = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

export const Image = styled.img`
  height: 100px;
  margin-right: 50px;
  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    height: 60px;
  }
`;

export const ViewInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.firstWatch ? 400 : 250)}px;
  background-color: ${(props) => props.colorModal};
  border-radius: ${(props) => (props.firstWatch ? "25px" : "25px 25px 0 0")};
  @media (max-width: 900px) {
    flex-direction: column;
    height: 200px;
  }
`;

export const Text = styled.h1`
  font-weight: bold;
  font-size: 30px;
  color: #fff;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

export const ViewName = styled.div`
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.div`
  color: #fff;
  border: 2px solid #fff;
  padding: 10px 20px;
  margin-top: 20px;
  font-weight: bold;
  border-radius: 40px;
  width: 100px;
  cursor: pointer;
  :hover {
    background-color: rgba(
      255,
      255,
      255,
      0.2
    ); /*where 0.5 stands for 50% opacity*/
  }
  @media (max-width: 900px) {
    padding: 7px 15px;
    margin-top: 10px;
  }
`;

export const TextLast = styled.h1`
  font-weight: 600;
  font-size: 20px;
  margin-top: 5px;
  margin-left: 30px;
  color: #424242;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 18px;
    margin-left: 0px;
  }
`;

export const ViewLast = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerLast = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const ImageLast = styled.img`
  height: 50px;
`;

export const ContatinerImage = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  background-color: ${(props) => props.colorModal};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextLastTool = styled.h1`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
`;

export const ViewLastInfos = styled.div`
  display: ${(props) => (props.firstWatch ? "none" : "inicial")};
`;
