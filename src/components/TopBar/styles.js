import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.backColor};
  transition: all 0.5s linear;
`;

export const View = styled.div`
  display: flex;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 900px) {
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 13px;
  opacity: 80%;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    opacity: 100%;
  }
  @media (max-width: 1070px) {
    font-size: 8px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 125px;
`;

export const Button = styled.div`
  color: #fff;
  border: 2px solid #fff;
  padding: 8px 15px;
  font-weight: bold;
  font-size: 13px;
  border-radius: 40px;
  width: 80px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
  :hover {
    background-color: rgba(
      255,
      255,
      255,
      0.2
    ); /*where 0.5 stands for 50% opacity*/
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const ButtonPluga = styled.div`
  color: #fff;
  padding: 10px 18px;
  font-weight: bold;
  font-size: 13px;
  border-radius: 40px;
  width: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #41baff;
  opacity: 90%;
  transition: all 0.2s linear;
  :hover {
    opacity: 100%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Icon = styled.div`
  display: none;
  @media (max-width: 900px) {
    color: #fff;
    display: initial;
    font-size: 26px;
  }
`;
