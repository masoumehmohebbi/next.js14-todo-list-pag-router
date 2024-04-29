import React from "react";
import Image from "next/image";
import Button from "../ui/button";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";

const EventItem = (props) => {
  const { id, title, location, image, date } = props;
  const humanReadableData = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  return (
    <li>
      <div className="flex rounded-md shadow-md border m-5 bg-pink-200 text-gray-800">
        <Image src={"/" + image} alt={title} width="200" height="200" />
        <div className="p-2 flex flex-col space-y-3">
          <h1 className="font-bold text-lg">{title}</h1>
          <div className="flex space-x-1 items-center">
            <DateIcon width={20} height={20} />
            <time>{humanReadableData}</time>
          </div>
          <div className="flex space-x-1 items-center">
            <AddressIcon width={20} height={20} />
            <address>{formattedAddress}</address>
          </div>
          <div className="w-full flex justify-end">
            <Button link={`/events/${id}`}>
              <span> Explore Event</span>
              <span>
                <ArrowRightIcon width={20} height={20} />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
