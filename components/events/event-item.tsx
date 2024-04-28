import React from "react";
import Image from "next/image";
import Button from "../ui/button";

const EventItem = (props) => {
  const { id, title, location, image, date } = props;
  const humanReadableData = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li>
      <h1>{title}</h1>
      <Image src={"/" + image} alt={title} width="200" height="200" />
      <time>{humanReadableData}</time>
      <address>{location.replace(", ", "\n")}</address>
      <Button link={`/events/${id}`}>Explore </Button>
    </li>
  );
};

export default EventItem;
