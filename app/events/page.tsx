"use client";
import EventList from "@/components/events/event-list";
import EventsSerach from "@/components/events/events-serach";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/navigation";
import React from "react";

const events = getAllEvents();

const AllEvents = () => {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <div>
      <EventsSerach onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export default AllEvents;
