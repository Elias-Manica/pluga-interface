import styled from "styled-components";

export const View = styled.div`
  position: relative;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Container = styled.input`
  height: 40px;
  padding: 10px 10px 10px 35px;
  border: 1px solid #fff;
  border-radius: 5px;
  opacity: 80%;
  color: #fff;
  transition: all 0.2s linear;
  background: transparent;
  ::-webkit-input-placeholder {
    color: #fff;
  }
  :focus {
    outline: none !important;
    border-color: #fff;
    opacity: 100%;
  }
  :hover {
    opacity: 100%;
  }

  :focus::-webkit-input-placeholder {
    color: #fff;
    opacity: 100%;
  }
`;

export const Icon = styled.div`
  transition: all 0.2s ease;
  position: absolute;
  top: 12px;
  left: 10px;
  font-size: 0.9em;
  color: #fff;
  opacity: ${(props) => (props.isSelect ? "100%" : "80%")};
`;

export const ContainerTool = styled.div`
  width: 100%;
  position: absolute;
  top: 43px;
  left: 0;
  background-color: #fff;
  border-radius: 5px;
`;

export const ViewTool = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #cddce8;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    background-color: #f5faff;
  }
`;

export const BackIcon = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.backColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextIcon = styled.p`
  margin-left: 5px;
`;

export const ImageTool = styled.img`
  height: 20px;
`;
