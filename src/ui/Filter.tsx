const statusOptions = [
  {
    label: 'همه',
    value: 'ALL',
  },
  {
    label: 'انجام شده',
    value: 'COMPLETED',
  },
  {
    label: 'انجام نشده',
    value: 'UNCOMPLETED',
  },
];
import { Button, ButtonGroup } from '@nextui-org/react';

import React, { useState } from 'react';

const Filter = () => {
  return (
    <div className="flex items-center gap-x-2">
      <span>وضعیت</span>
      <ButtonGroup>
        {statusOptions.map(({ value, label }) => {
          //   const isActive = value === currentFilter;
          return (
            <Button
              //   disabled={isActive}
              key={value}
            >
              {label}
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  );
};

export default Filter;
