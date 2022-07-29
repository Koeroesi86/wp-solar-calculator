import React, {FC, ReactNode, useState} from "react";
import styled from "styled-components";
import {Current, DropdownIconWrapper, DropdownSelection, Wrapper} from "./styles";

interface DropdownSelectionItemProps {
  current?: boolean;
}

const DropdownIcon: FC<{ isOpen: boolean; }> = ({ isOpen }) => (
  <DropdownIconWrapper
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12.598 6.884"
    isOpen={isOpen}
  >
    <path
      d="M3886.877,524.493l5.7,5.677,5.485-5.677"
      transform="translate(-3886.17 -523.786)"
      fill="none" stroke="#343a40"
      strokeLinecap="round" strokeLinejoin="round"
      strokeWidth="1"
    />
  </DropdownIconWrapper>
);

export const DropdownSelectionItem: FC<DropdownSelectionItemProps> = styled.div<DropdownSelectionItemProps>`
  padding: 12px;
  background-color: ${({ current }) => current ? 'rgba(0, 0, 0, .1)' : 'transparent'};

  &:hover {
    background-color: rgba(0, 0, 0, .2);
    transition: all .2s linear;
  }
`;

interface DropdownProps {
  options: any[];
  onChange: (option: any) => void;
  renderOption?: (option: any) => ReactNode;
}

const Dropdown: FC<DropdownProps> = ({
  children,
  options,
  onChange,
  renderOption = (option) => <DropdownSelectionItem>{option}</DropdownSelectionItem>,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper
      onFocus={() => {}}
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
    >
      <Current>
        {children}
        <DropdownIcon isOpen={isOpen} />
      </Current>
      <DropdownSelection style={{ display: isOpen ? 'block' : 'none' }}>
        {options.map((option, i) => (
          <div
            key={`DropdownSelection-${i}-${JSON.stringify(option)}`}
            onClick={(e) => {
              onChange(option);
              document.body.focus();
              setIsOpen(false);
            }}
          >
            {renderOption(option)}
          </div>
        ))}
      </DropdownSelection>
    </Wrapper>
  );
};

export default Dropdown;