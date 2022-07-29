import React, {FC, ReactNode} from "react";
import styled from "styled-components";
import {FormattedMessage} from "react-intl";
import {CalculatorResults} from "../../types";

const ConsumptionWrapper = styled.div`
  //margin: 47px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 0 12px 0;
  
  sub {
    font-size: .6rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextColumn = styled(Column)`
  flex: 1 1 auto;
  padding-left: 20px;
`;

const ImageIcon = styled.img.attrs(() => ({ alt: 'icon' }))`
  
`;

const PrimaryText = styled.div`
  font-size: 18px;
  font-weight: 800;
`;

const SecondaryText = styled.div`
  font-size: 14px;
`;

const EmissionBlock: FC<{ primary: ReactNode; secondary: ReactNode; icon: string }> = ({
  primary,
  secondary,
  icon
}) => {
  return (
    <Wrapper>
      <Column>
        <ImageIcon src={icon} />
      </Column>
      <TextColumn>
        <PrimaryText>{primary}</PrimaryText>
        <SecondaryText>{secondary}</SecondaryText>
      </TextColumn>
    </Wrapper>
  );
}

const Consumption: FC<{ result: CalculatorResults; baseUrl: string; }> = ({ result, baseUrl }) => {
  return (
    <ConsumptionWrapper>
      <EmissionBlock
        primary={<FormattedMessage id="emissions_kg.primary" values={{ value: result.emission }} />}
        secondary={
          <FormattedMessage id="emissions_kg.secondary" values={{
            sub: (...chunks: string[]) => <sub>{chunks}</sub>,
          }}  />
        }
        icon={`${baseUrl}/images/house_icon.png`}
      />
      <EmissionBlock
        primary={<FormattedMessage id="emissions_trees.primary" values={{ value: result.trees }} />}
        secondary={
          <FormattedMessage id="emissions_trees.secondary" values={{
            sub: (...chunks: string[]) => <sub>{chunks}</sub>,
          }} />
        }
        icon={`${baseUrl}/images/tree_icon.png`}
      />
      <EmissionBlock
        primary={<FormattedMessage id="emissions_yearly.primary" values={{ value: result.yearlyKWH }} />}
        secondary={<FormattedMessage id="emissions_yearly.secondary" />}
        icon={`${baseUrl}/images/solar_panel_icon.png`}
      />
    </ConsumptionWrapper>
  );
};

export default Consumption;
