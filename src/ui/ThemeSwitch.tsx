import React from 'react';
import { Switch } from '@nextui-org/react';
import { HiMoon, HiSun } from 'react-icons/hi';

export const ThemeSwitch = () => {
  return (
    <Switch
      defaultSelected
      size="md"
      color="warning"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <HiSun className={className} /> : <HiMoon className={className} />
      }
    ></Switch>
  );
};
