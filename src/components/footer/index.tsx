import React, {FC} from "react";
import {FormattedMessage, FormattedNumber} from "react-intl";
import {CalculatorResults} from "../../types";
import {Result, Row, Text, Wrapper} from "./styles";

const Footer: FC<{ result: CalculatorResults }> = ({ result }) => {
  return (
    <Wrapper>
      <Row style={{ fontWeight: 600 }}>
        <Text><FormattedMessage id="summary.price"/></Text>
        <Result style={{ fontSize: '25px' }}>
          <FormattedNumber
            value={result.price}
            // eslint-disable-next-line react/style-prop-object
            style="currency"
            currency="HUF"
            maximumFractionDigits={0}
          />
        </Result>
      </Row>
      <Row style={{ height: '7px'}} />
      <Row>
        <Text><FormattedMessage id="summary.capacity"/></Text>
        <Result>
          {result.kwp.toLocaleString('hu-HU')} kWp
        </Result>
      </Row>
    </Wrapper>
  );
};

export default Footer;
