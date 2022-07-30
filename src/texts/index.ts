import {Orientations, RoofVariant} from "../types";

const texts = {
  title: 'Napelem kalkulátor',
  bills_title: 'Villanyszámla értéke',
  roofs_title: 'Adja meg a tető típusát',
  orientations_title: 'Adja meg a tető tájolását',
  ...({
    'roof_types.tilted': 'Ferde tető',
    'roof_types.flat': 'Lapos tető',
    'roof_types.ground': 'Talaj',
  } as Record<`roof_types.${RoofVariant}`, string>),
  ...({
    'orientations.north': 'Észak',
    'orientations.north-east': 'Észak-kelet',
    'orientations.east': 'Kelet',
    'orientations.south-east': 'Dél-kelet',
    'orientations.south': 'Dél',
    'orientations.south-west': 'Dél-nyugat',
    'orientations.west': 'Nyugat',
    'orientations.north-west': 'Észak-nyugat',
  } as Record<`orientations.${Orientations}`, string>),
  'emissions_kg.primary': '{value} kg',
  'emissions_kg.secondary': 'CO<sub>2</sub> csökkentés',
  'emissions_trees.primary': '{value} fányi',
  'emissions_trees.secondary': 'CO<sub>2</sub> megkötés',
  'emissions_yearly.primary': '{value} kWh',
  'emissions_yearly.secondary': 'éves fogyasztás',
  'summary.price': 'Várható bruttó költség',
  'summary.capacity': 'Rendszer teljesítmény',
};

export default texts;