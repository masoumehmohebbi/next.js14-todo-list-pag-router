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
import React from 'react';

const Filter = () => {
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   const currentFilter = searchParams.get(filterField) || options.at(0).value;

  //   const handleClick = (value) => {
  //     searchParams.set(filterField, value);
  //     setSearchParams(searchParams);
  //   };
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
              //   onClick={() => handleClick(value)}
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
