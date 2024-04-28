import React from "react";
import EventItem from "./event-item";

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          location={item.location}
          title={item.title}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
