import * as React from "react";
import { ComponentProps, useContext } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem as MuiMenuItem,
  Select,
} from "@material-ui/core";
import { PlasmicCanvasContext } from "@plasmicapp/loader-nextjs/host";

export function MuiSelect({
  options,
  defaultValue,
  label,
  className,
  ...props
}: ComponentProps<typeof Select> & {
  label?: string;
  options: { value: string; label: string }[];
}) {
  const inEditor = useContext(PlasmicCanvasContext);
  return (
    <FormControl className={className}>
      <InputLabel id="demo-simple-select-placeholder-label-label">
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
        defaultValue={inEditor ? undefined : defaultValue}
        value={inEditor ? defaultValue : undefined}
        {...props}
      >
        {options.map((option) => (
          <MuiMenuItem value={option.value}>{option.label}</MuiMenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
