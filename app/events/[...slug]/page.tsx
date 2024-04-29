"use client";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import { getFilteredEvents } from "@/dummy-data";
import { useParams } from "next/navigation";
import React from "react";

const FilteredEvents = () => {
  const router = useParams();

  if (!router.slug) {
    return <p className="text-center mx-auto">Loading...</p>;
  }
  const filteredYear = router.slug[0];
  const filteredMonth = router.slug[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <div className="errorAlert">
        <p>Invalid filter, Please adjust your values!</p>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="errorAlert">
        <p>No events found for the chosen filter!</p>
      </div>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEvents;
