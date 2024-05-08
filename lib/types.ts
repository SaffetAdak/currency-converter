export type SectionHeaderProps = {
  children: React.ReactNode;
};

export type CurrencyInputProps = {
  value: string;
  symbol: string;
};

export type ConversionNameProps = {
  from?: string;
  to?: string;
  isFrom?: boolean;
};

export type ConversionProps = {
  amount: number;
  from: string;
  to: string;
};

export type currencyStore = {
  from: string;
  setFrom: (fromBasic: string) => void;
  to: string;
  setTo: (toBasic: string) => void;
};
