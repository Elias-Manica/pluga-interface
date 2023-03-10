import styled from "styled-components";

export const Container = styled.div`
  margin-right: 36px;
  margin-top: 44px;
  width: 180px;
  height: 180px;
  border: 1px solid #cddce8;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.6s ease;
  cursor: pointer;
  color: #424242;
  position: relative;
  :hover {
    border-color: #0ea7ff;
    color: #0ea7ff;
    -webkit-box-shadow: 6px 5px 26px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 6px 5px 26px 1px rgba(0, 0, 0, 0.1);
  }
`;

export const ViewText = styled.div`
  margin-top: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 115px;
`;
