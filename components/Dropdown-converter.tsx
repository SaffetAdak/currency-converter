import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { DropdownItemProps } from "@/lib/types";

export default function DropdownConverter({
  name,
  color,
  data,
}: DropdownItemProps) {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          className="text-white text-xs sm:text-medium px-3 sm:px-16 py-6"
          variant="bordered"
        >
          {name}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        className="px-16"
        variant="faded"
        aria-label="Static Actions"
      >
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
