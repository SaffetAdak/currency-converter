"use client";
import SectionHeader from "./SectionHeader";
import DropdownConverter from "./DropdownConverter";
import CurrencyInput from "./CurrencyInput";
import SwitchButton from "./SwitchButton";
import { useCurrencyStore } from "@/store/currencyStore";

export default function Converter() {
  const { from, to } = useCurrencyStore();
  return (
    <section className="z-[999]">
      <SectionHeader>Currency Converter</SectionHeader>
      <div className="flex gap-5 items-center justify-center flex-col sm:flex-row">
        <DropdownConverter from={from} isFrom />
        <SwitchButton />
        <DropdownConverter to={to} />
      </div>
      <div>
        <CurrencyInput />
      </div>
    </section>
  );
}
