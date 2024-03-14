'use client';
import {
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

import { Select as SelectComponent } from './styles';
import { ArrowDropDown } from '@mui/icons-material';
import Loader from './components/Loader';

type Option = {
  label: string;
  value: string;
};

interface ISelectProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  animateOnMount?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
}

export default function Select(props: ISelectProps) {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    props.onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="select-label">{props.label}</InputLabel>
      <SelectComponent
        labelId="select-label"
        disabled={props.disabled || props.isLoading}
        id="select"
        inputProps={{ 'data-testid': props.label }}
        value={props.value}
        label={props.label}
        onChange={handleChange}
        $animateOnMount={props.animateOnMount}
        IconComponent={() => (props.isLoading ? <Loader /> : <ArrowDropDown />)}
      >
        {props.options &&
          props.options.map((option) => (
            <MenuItem
              key={`${option.value}`}
              value={option.value}
              data-testid={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
      </SelectComponent>
    </FormControl>
  );
}
