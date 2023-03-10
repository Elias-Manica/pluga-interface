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
  border-radius: 10px;
  @media (max-width: 900px) {
    height: 300px;
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
  margin-right: 20px;
`;

export const ViewInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: ${(props) => props.colorModal};
  border-radius: 5px 5px 0 0;
`;

export const Text = styled.h1`
  font-weight: bold;
  font-size: 30px;
  color: #fff;
`;

export const ViewName = styled.div``;

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
`;
