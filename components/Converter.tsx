"use client";
import SectionHeader from "./Section-header";
import DropdownConverter from "./Dropdown-converter";
import CurrencyInput from "./Currency-input";
import SwitchButton from "./Switch-button";

export default function Converter() {
  return (
    <section className="z-[999]">
      <SectionHeader>Currency Converter</SectionHeader>
      <div className="flex gap-5 items-center justify-center">
        <DropdownConverter name="🇹🇷 TRY - Turkish Lira" />
        <SwitchButton />
        <DropdownConverter name="🇺🇸 USD - US Dollar" />
      </div>
      <div>
        <CurrencyInput />
      </div>
    </section>
  );
}
