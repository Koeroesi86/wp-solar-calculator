export interface CalculatorResults {
  emission: number;
  trees: number;
  kwp: number;
  yearlyKWH: number;
  price: number;
}

export type Orientations =
  | 'north'
  | 'north-east'
  | 'east'
  | 'south-east'
  | 'south'
  | 'south-west'
  | 'west'
  | 'north-west';

export type RoofVariant = 'tilted' | 'flat' | 'ground';

export type BillValues =
  | 6000
  | 6500
  | 7000
  | 7500
  | 8000
  | 8500
  | 9000
  | 9500
  | 10000
  | 10500
  | 11000
  | 11500
  | 12000
  | 12500
  | 13000
  | 13500
  | 14000
  | 14500
  | 15000
  | 15500
  | 16000
  | 16500
  | 17000
  | 17500
  | 18000
  | 18500
  | 19000
  | 19500
  | 20000
  | 20500
  | 21000
  | 21500
  | 22000
  | 22500
  | 23000
  | 23500
  | 24000
  | 24500
  | 25000
  | 25500
  | 26000
  | 26500
  | 27000
  | 27500
  | 28000
  | 28500
  | 29000
  | 29500
  | 30000
  | 30500;

export interface DataLine {
  bill: BillValues;
  orientation: Orientations;
  roof: RoofVariant;
  results: CalculatorResults;
}

export type DataSource = DataLine[];
