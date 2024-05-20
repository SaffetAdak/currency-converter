import React, { useMemo } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { currencies } from "@/lib/data";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { ConversionNameProps } from "@/lib/types";
import { useCurrencyStore } from "@/store/currencyStore";

export default function DropdownConverter({
  from,
  to,
  isFrom,
}: ConversionNameProps) {
  polyfillCountryFlagEmojis();
  const { setFrom, setTo } = useCurrencyStore();

  const dropdownItems = useMemo(
    () =>
      currencies.map((currency) => (
        <DropdownItem key={currency.display} textValue={currency.display}>
          {currency.display}
        </DropdownItem>
      )),
    []
  );

  const handleChange = (e: any) => {
    const selectedCurrency = String(e);
    if (isFrom) {
      setFrom(selectedCurrency);
    } else {
      setTo(selectedCurrency);
    }
  };

  return (
    <Dropdown backdrop="blur" shouldBlockScroll>
      <DropdownTrigger>
        <Button
          className="text-white text-medium px-3 sm:px-16 py-6"
          variant="bordered"
          aria-label="Currency selection button"
          style={{ width: "auto" }} // Adjust width dynamically
        >
          {isFrom ? from : to}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        className="p-2 max-h-96 overflow-auto"
        variant="faded"
        aria-label="Currency selection"
        onAction={handleChange}
      >
        {dropdownItems}
      </DropdownMenu>
    </Dropdown>
  );
}
