import { ConversionProps } from "@/lib/types";
import axios from "axios";

const host = "https://api.frankfurter.app/latest?";

export async function getConversion({ amount, from, to }: ConversionProps) {
  try {
    const response = await axios.get(
      `${host}amount=${amount}&from=${from}&to=${to}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
