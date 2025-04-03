"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const indianStates = [
  {
    label: "Andhra Pradesh",
    value: "andhra-pradesh",
  },
  {
    label: "Arunachal Pradesh",
    value: "arunachal-pradesh",
  },
  {
    label: "Assam",
    value: "assam",
  },
  {
    label: "Bihar",
    value: "bihar",
  },
  {
    label: "Chhattisgarh",
    value: "chhattisgarh",
  },
  {
    label: "Goa",
    value: "goa",
  },
  {
    label: "Gujarat",
    value: "gujarat",
  },
  {
    label: "Haryana",
    value: "haryana",
  },
  {
    label: "Himachal Pradesh",
    value: "himachal-pradesh",
  },
  {
    label: "Jharkhand",
    value: "jharkhand",
  },
  {
    label: "Karnataka",
    value: "karnataka",
  },
  {
    label: "Kerala",
    value: "kerala",
  },
  {
    label: "Madhya Pradesh",
    value: "madhya-pradesh",
  },
  {
    label: "Maharashtra",
    value: "maharashtra",
  },
  {
    label: "Manipur",
    value: "manipur",
  },
  {
    label: "Meghalaya",
    value: "meghalaya",
  },
  {
    label: "Mizoram",
    value: "mizoram",
  },
  {
    label: "Nagaland",
    value: "nagaland",
  },
  {
    label: "Odisha",
    value: "odisha",
  },
  {
    label: "Punjab",
    value: "punjab",
  },
  {
    label: "Rajasthan",
    value: "rajasthan",
  },
  {
    label: "Sikkim",
    value: "sikkim",
  },
  {
    label: "Tamil Nadu",
    value: "tamil-nadu",
  },
  {
    label: "Telangana",
    value: "telangana",
  },
  {
    label: "Tripura",
    value: "tripura",
  },
  {
    label: "Uttar Pradesh",
    value: "uttar-pradesh",
  },
  {
    label: "Uttarakhand",
    value: "uttarakhand",
  },
  {
    label: "West Bengal",
    value: "west-bengal",
  },
  {
    label: "Andaman and Nicobar Islands",
    value: "andaman-and-nicobar-islands",
  },
  {
    label: "Chandigarh",
    value: "chandigarh",
  },
  {
    label: "Daman and Diu",
    value: "daman-and-diu",
  },
  {
    label: "Delhi",
    value: "delhi",
  },
  {
    label: "Jammu and Kashmir",
    value: "jammu-and-kashmir",
  },
  {
    label: "Ladakh",
    value: "ladakh",
  },
  {
    label: "Lakshadweep",
    value: "lakshadweep",
  },
  {
    label: "Puducherry",
    value: "puducherry",
  },
];

interface ComboboxProps {
  value?: string;
  onChange?: (value: string) => void;
}

export function Combobox({ value, onChange, ...props }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? indianStates.find((state) => state.value === value)?.label
            : "Select state..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search state..." />
          <CommandList>
            <CommandEmpty>No state found.</CommandEmpty>
            <CommandGroup>
              {indianStates.map((state) => (
                <CommandItem
                  key={state.value}
                  value={state.value}
                  onSelect={(currentValue) => {
                    onChange?.(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === state.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {state.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
