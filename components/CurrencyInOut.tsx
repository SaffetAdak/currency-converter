import { Slider, Textarea } from "@nextui-org/react";
import { useState } from "react";
import Rate from "./Rate";
import { convertCurrency, extractSymbol, validateCurrency } from "@/lib/utils";
import { useCurrencyStore } from "@/store/currencyStore";

export default function CurrencyInOut() {
  const [value, setValue] = useState("");
  const { rate, from, to } = useCurrencyStore();

  return (
    <div className="flex items-center justify-center">
      <form>
        <div>
          <Textarea
            type="number"
            isInvalid={validateCurrency(value) !== true}
            label="From"
            placeholder="0.00"
            maxRows={1}
            maxLength={15}
            value={value}
            onValueChange={setValue}
            variant="underlined"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center ">
                <span className="text-default-400 text-4xl">
                  {extractSymbol(from)}
                </span>
              </div>
            }
            classNames={{
              base: "max-w-[16rem] sm:max-w-[50rem] mt-8",
              input: "resize-y text-2xl sm:text-9xl text-center mr-6",
              label: "sm:text-2xl text-default-400 ml-2 text-center",
            }}
          />
          <div className="h-4 text-red-500">
            {validateCurrency(value) !== true && validateCurrency(value)}
          </div>
        </div>

        <Slider
          size="sm"
          value={!isNaN(parseFloat(value)) ? parseFloat(value) : 0}
          defaultValue={40}
          step={5}
          className="max-w-md my-8 sm:max-w-4xl"
          maxValue={100}
          aria-label="Currency slider"
          onChange={(newValue) => setValue(String(newValue))}
          marks={[
            {
              value: 25,
              label: "25",
            },
            {
              value: 50,
              label: "50",
            },
            {
              value: 75,
              label: "75",
            },
          ]}
        />

        <Rate />

        <Textarea
          type="number"
          label="To"
          value={
            typeof value === "string" && typeof rate === "number"
              ? convertCurrency(value, rate).toFixed(3)
              : ""
          }
          placeholder="0.00"
          maxRows={1}
          isReadOnly
          variant="underlined"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center ">
              <span className="text-default-400 text-4xl">
                {extractSymbol(to)}
              </span>
            </div>
          }
          classNames={{
            base: "max-w-[16rem] sm:max-w-[50rem] my-14",
            input: "resize-y text-2xl sm:text-9xl text-center mr-6",
            label: "sm:text-2xl text-default-400 ml-2 text-center",
          }}
        />
      </form>
    </div>
  );
}
