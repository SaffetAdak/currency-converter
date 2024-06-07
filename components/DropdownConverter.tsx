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
import { useAnimate } from "@/lib/hooks";
import { motion } from "framer-motion";

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

  const { border, boxShadow } = useAnimate();

  return (
    <Dropdown backdrop="blur" shouldBlockScroll>
      <DropdownTrigger>
        <motion.button
          className="text-white text-medium px-3 py-4 w-80 rounded-xl transition hover:scale-[102%] active:scale-[98%] "
          aria-label="Currency selection button"
          style={{ border, boxShadow }}
        >
          {isFrom ? from : to}
        </motion.button>
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
