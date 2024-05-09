"use client";
import SectionHeader from "./Section-header";
import DropdownConverter from "./Dropdown-converter";
import CurrencyInOut from "./Currency-in-out";
import SwitchButton from "./Switch-button";
import { useCurrencyStore } from "@/store/currencyStore";
import { useEffect } from "react";
import { getConversion } from "@/api/route";
import { extractSymbol } from "@/lib/utils";

export default function Converter() {
  const { from, to, setRate } = useCurrencyStore();
  useEffect(() => {
    const fetchConversion = async () => {
      const res = await getConversion({
        from: extractSymbol(from),
        to: extractSymbol(to),
      });
      if (res) {
        const data = JSON.parse(res);
        const rate = Object.values(data)[0] as number;
        setRate(rate);
      }
    };
    fetchConversion();
  });

  return (
    <section className="z-[999]">
      <SectionHeader>Currency Converter</SectionHeader>
      <div className="flex gap-5 items-center justify-center flex-col sm:flex-row">
        <DropdownConverter from={from} isFrom />
        <SwitchButton />
        <DropdownConverter to={to} />
      </div>
      <div>
        <CurrencyInOut />
      </div>
    </section>
  );
}
