import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EventList items={featuredEvents} />
    </main>
  );
}
