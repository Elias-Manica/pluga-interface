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
