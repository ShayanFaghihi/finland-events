import { useQuery } from "@apollo/client";
import { allEvents } from "../../graphql/eventsGraph";
import EventBox from "./EventBox";
import Loader from "../UI/Loader";

import { EventsListProps, Events } from "../../interfaces/interfaces";

const EventsList = ({ searchQuery, dateQuery }: EventsListProps) => {
  const { loading, error, data } = useQuery<{ conferences: Events[] }>(
    allEvents
  );

  if (error) console.log(error);
  if (loading) {
    return (
      <div className="w-full min-h-[50vh]">
        <Loader />
      </div>
    );
  } else {
    let conferences = data?.conferences;
    if (searchQuery) {
      conferences = conferences?.filter((events) => {
        return events.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }

    if (dateQuery) {
      const selectedDateTimestamp = new Date(dateQuery).getTime();

      conferences = conferences?.filter((event) => {
        const eventDateTimestamp = new Date(event.startDate).getTime();
        return eventDateTimestamp === selectedDateTimestamp;
      });
    }
    return (
      <ul className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 min-h-[50vh]">
        {conferences && conferences.length > 0 ? (
          conferences?.map((event) => {
            return <EventBox key={event.id} {...event} />;
          })
        ) : (
          <div>There are no events</div>
        )}
      </ul>
    );
  }
};

export default EventsList;
