import React, {FC, useEffect, useMemo, useState} from "react";
import axios from "axios";
import {Validator} from 'jsonschema';
import {FormattedMessage, FormattedNumber} from "react-intl";
import {BillValues, DataSource, Orientations, RoofVariant} from "../../types";
import schema from "./schema";
import Footer from "../footer";
import Slider from "../slider";
import Dropdown, {DropdownSelectionItem} from "../dropdown";
import Consumption from "../consumption";
import {BillValue, Content, ContentColumn, GlobalStyle, SectionHeader, Title, Wrapper} from "./styles";

interface AppProps {
  config: string;
  baseUrl: string;
}

const validator = new Validator();

const App: FC<AppProps> = ({ config, baseUrl }) => {
  const [dataSource, setDataSource] = useState<DataSource>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bill, setBill] = useState<BillValues>(6000);
  const [roof, setRoof] = useState<RoofVariant>('tilted');
  const [orientation, setOrientation] = useState<Orientations>('north');
  const bills = useMemo(() =>
    [...new Set(dataSource.map((d) => d.bill))],
    [dataSource]
  );
  const roofs = useMemo(() =>
    [...new Set(dataSource.map((d) => d.roof))],
    [dataSource]
  );
  const orientations = useMemo(() =>
    [...new Set(dataSource.map((d) => d.orientation))],
    [dataSource]
  );
  const current = useMemo(() =>
    dataSource.find((line) =>
      line.bill === bill
      && line.orientation === orientation
      && line.roof === roof
    ),
    [bill, dataSource, orientation, roof]
  );

  useEffect(() => {
    axios.get<DataSource>(config)
      .then((r) => r.data)
      .then((result) => {
        const validatorResult = validator.validate(result, schema);
        if (validatorResult.valid) {
          setDataSource(result);
          setBill(result[0].bill);
          setRoof(result[0].roof);
          setOrientation(result[0].orientation);
        } else {
          console.error(validatorResult);
        }

        setIsLoaded(true);
      })
  }, [config]);

  if (!isLoaded) {
    return null; // loading
  }

  if (!current) {
    console.warn(`No result found for ${bill}, ${roof}, ${orientation}`)
  }
  
  return (
    <Wrapper>
      <GlobalStyle baseUrl={baseUrl} />
      <Title><FormattedMessage id="title" /></Title>
      <Content>
        <ContentColumn>
          <SectionHeader><FormattedMessage id="bills_title" /></SectionHeader>
          <Slider
            min={bills[0]}
            max={bills[bills.length - 1]}
            step={bills[1] - bills[0]}
            onChange={(value) => setBill(value as BillValues)}
            value={bill}
          />
          <BillValue>
            <FormattedNumber
              value={bill}
              // eslint-disable-next-line react/style-prop-object
              style="currency"
              currency="HUF"
              maximumFractionDigits={0}
            />
          </BillValue>
          <SectionHeader><FormattedMessage id="roofs_title" /></SectionHeader>
          <Dropdown
            options={roofs}
            onChange={(r) => setRoof(r)}
            renderOption={(opt: RoofVariant) => (
              <DropdownSelectionItem current={roof === opt}>
                <FormattedMessage id={`roof_types.${opt}`} />
              </DropdownSelectionItem>
            )}
          >
            <FormattedMessage id={`roof_types.${roof}`} />
          </Dropdown>
          <div style={{ height: '12px' }} />
          <SectionHeader><FormattedMessage id="orientations_title" /></SectionHeader>
          <Dropdown
            options={orientations}
            onChange={(o) => setOrientation(o)}
            renderOption={(opt: Orientations) => (
              <DropdownSelectionItem current={orientation === opt}>
                <FormattedMessage id={`orientations.${opt}`} />
              </DropdownSelectionItem>
            )}
          >
            <FormattedMessage id={`orientations.${orientation}`} />
          </Dropdown>
        </ContentColumn>
        <ContentColumn style={{ width: '42px', flex: '0 0 auto' }} />
        <ContentColumn>
          {current && <Consumption result={current.results} baseUrl={baseUrl} />}
        </ContentColumn>
      </Content>
      {current && <Footer result={current.results} />}
    </Wrapper>
  );
};

export default App;
