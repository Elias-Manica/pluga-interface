import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  border-radius: 40px;
  border: 1px solid #cddce8;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0.9em 0.6em 0.9em 60px;
  font-size: 1.3em;
  color: #5b7180;
  line-height: 24px;
  transition: all 0.2s ease;
  :focus {
    outline: none !important;
    border-color: #0ea7ff;
  }
  :hover {
    border-color: #0ea7ff;
  }

  :focus::-webkit-input-placeholder {
    color: #0ea7ff;
  }
`;

export const View = styled.div`
  margin-top: 50px;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`;

export const Icon = styled.div`
  transition: all 0.2s ease;
  position: absolute;
  top: 274px;
  font-size: 1.1em;

  color: ${(props) => (props.inputRef ? "#0ea7ff" : "#bacbd8")};
  margin-left: 25px;
`;
