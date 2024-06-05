import { Input } from '@nextui-org/react';
import React from 'react';
import { RxPaperPlane } from 'react-icons/rx';

const InputField = () => {
  return (
    <Input
      size="lg"
      type="text"
      label=""
      placeholder="برنامه روزانه خود را وارد کنید"
      labelPlacement="outside"
      endContent={
        <RxPaperPlane className="rotate-180 w-6 h-6 text-default-400 pointer-events-none flex-shrink-0" />
      }
    />
  );
};

export default InputField;
