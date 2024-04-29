import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <main className="flex justify-center items-start min-h-screen bg-gray-100">
      <EventList items={featuredEvents} />
    </main>
  );
}
