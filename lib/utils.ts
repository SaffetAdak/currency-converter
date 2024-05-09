export const convertCurrency = (value: string, rate: number) => {
  return Number(value) * rate;
};

export const extractSymbol = (text: string) => {
  return text.substring(10, 13);
};

export const validateCurrency = (value: string) => {
  if (isNaN(Number(value))) {
    return "Please enter a valid number";
  }
  return true;
};
