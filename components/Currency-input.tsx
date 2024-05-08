import { Slider, Textarea } from "@nextui-org/react";
import { useState } from "react";
import Rate from "./Rate";

export default function CurrencyInput() {
  const convertCurrency = (value: string) => {
    return Number(value) * 32.5;
  };

  const validateCurrency = (value: string) => {
    if (isNaN(Number(value))) {
      return "Please enter a valid number";
    }
    return true;
  };

  const [value, setValue] = useState("");

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
                <span className="text-default-400 text-4xl">$</span>
              </div>
            }
            classNames={{
              base: "max-w-[16rem] sm:max-w-[50rem] mt-8",
              input: "resize-y text-2xl sm:text-9xl text-center mr-6",
              label: "sm:text-2xl text-default-400 ml-2 sm:ml-6 text-center",
            }}
          />
          <div className="h-1 text-red-500">
            {validateCurrency(value) !== true && validateCurrency(value)}
          </div>
        </div>

        <Slider
          showTooltip={true}
          size="sm"
          value={Number(value)}
          formatOptions={{ style: "currency", currency: "USD" }}
          tooltipValueFormatOptions={{ style: "currency", currency: "USD" }}
          defaultValue={40}
          className="max-w-md my-8 sm:max-w-4xl"
          maxValue={5000}
          onChange={(newValue) => setValue(String(newValue))}
        />

        <Rate />

        <Textarea
          type="number"
          label="To"
          value={convertCurrency(value).toString()}
          placeholder="0.00"
          maxRows={1}
          isReadOnly
          variant="underlined"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center ">
              <span className="text-default-400 text-4xl">$</span>
            </div>
          }
          classNames={{
            base: "max-w-[16rem] sm:max-w-[50rem] my-14",
            input: "resize-y text-2xl sm:text-9xl text-center mr-6",
            label: "sm:text-2xl text-default-400 ml-2 sm:ml-4 text-center",
          }}
        />
      </form>
    </div>
  );
}
