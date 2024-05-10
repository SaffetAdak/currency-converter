import { ConversionProps } from "@/lib/types";
import axios from "axios";

const host = "https://api.frankfurter.app/latest?";

export async function getConversion({ from, to }: ConversionProps) {
  try {
    const response = await axios.get(`${host}amount=1&from=${from}&to=${to}`);
    const newData = JSON.stringify(response.data.rates);
    return newData;
  } catch (error) {
    console.error(error);
  }
}
