import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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
  cursor: pointer;
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
    background-color: green;
  }
`;

export const TextMobile = styled.p`
  font-weight: bold;
  font-size: 12px;
  opacity: 80%;
`;

export const ViewNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
`;

export const ViewBackground = styled.div`
  position: absolute;
  top: 20px;
  left: 0;

  color: #fff;
`;

export const ButtonMenu = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 15px;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ViewOption = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

export const ContainerOption = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #000;
  border-bottom: 0.5px;
  border-color: #cddce8;
  border-style: solid;
  height: 32px;
`;
