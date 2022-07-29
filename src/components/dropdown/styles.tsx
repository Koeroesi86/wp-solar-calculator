import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: visible;
  position: relative;
  cursor: pointer;
`;

export const Current = styled.div`
  padding: 10px 19px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #E0E0E0;
  background: #ffffff;
`;

export const DropdownSelection = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 3px;
  width: 100%;
  max-height: 200px;
  overflow: auto;
  z-index: 100;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .6);
`;

export const DropdownIconWrapper = styled.svg<{ isOpen: boolean; }>`
  width: 13px;
  height: 7px;
  transition: all .2s linear;
  transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;
