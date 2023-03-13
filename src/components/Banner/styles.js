import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
  background-color: ${(props) => props.colorBanner};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s linear;
  overflow: hidden;
  margin-top: ${(props) => (props.openMenu ? 190 : 0)}px;
`;

export const Logo = styled.img`
  height: 80px;
`;

export const Name = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
`;

export const View = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconRight = styled.div`
  position: absolute;
  top: 50;
  right: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
`;

export const IconLeft = styled.div`
  position: absolute;
  top: 50;
  left: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
`;
