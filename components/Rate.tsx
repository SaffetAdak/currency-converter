import { extractCode } from "@/lib/utils";
import { useCurrencyStore } from "@/store/currencyStore";

export default function Rate() {
  const { from, to, rate } = useCurrencyStore();
  return (
    <div className="text-center border rounded-lg border-zinc-300 text-zinc-100 sm:mx-72 p-2 sm:py-2">
      <h2>{`Rate: 1 ${extractCode(from)} = ${rate} ${extractCode(to)}`}</h2>
    </div>
  );
}
