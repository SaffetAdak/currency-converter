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
  return (
    <Dropdown backdrop="blur" shouldBlockScroll>
      <DropdownTrigger>
        <Button
          className="text-white text-medium w-60 sm:w-80 px-3 sm:px-16 py-6"
          variant="bordered"
        >
          {isFrom ? from : to}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        className="p-2 max-h-96 overflow-auto"
        variant="faded"
        aria-label="Static Actions"
        onAction={isFrom ? (e) => setFrom(String(e)) : (e) => setTo(String(e))}
      >
        {currencies.map((currency) => (
          <DropdownItem key={currency.display}>
            <span className="mr-8">{currency.flag}</span>
            {currency.symbol}-{currency.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
