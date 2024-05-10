"use client";
import SectionHeader from "./SectionHeader";
import DropdownConverter from "./DropdownConverter";
import CurrencyInOut from "./CurrencyInOut";
import SwitchButton from "./SwitchButton";
import { useCurrencyStore } from "@/store/currencyStore";
import { useEffect } from "react";
import { getConversion } from "@/api/route";
import { extractCode } from "@/lib/utils";

export default function Converter() {
  const { from, to, setFrom, setTo, setRate } = useCurrencyStore();
  useEffect(() => {
    const fetchConversion = async () => {
      const res = await getConversion({
        from: extractCode(from),
        to: extractCode(to),
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
        <SwitchButton
          onSwitch={() => {
            const temp = from;
            setFrom(to);
            setTo(temp);
          }}
        />
        <DropdownConverter to={to} />
      </div>
      <div>
        <CurrencyInOut />
      </div>
    </section>
  );
}
