import { gql, useQuery } from "@apollo/client";
import EventBox from "./EventBox";
import Loader from "../UI/Loader";

const GET_EVENTS = gql`
  query GetEvents {
    conferences {
      id
      name
      startDate
      slogan
      locations {
        name
        city
        image {
          url
        }
      }
    }
  }
`;

export interface EventsValidator {
  id: string;
  name: string;
  startDate: string;
  slogan: string;
  locations: [
    {
      name: string;
      about: string;
      city: string;
      address: string;
      image: { url: string };
    }
  ];
}

const EventsList = ({ searchQuery, dateQuery }) => {
  const { loading, error, data } = useQuery<{ conferences: EventsValidator[] }>(
    GET_EVENTS
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
      conferences = conferences.filter((events) => {
        return events.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }

    if (dateQuery) {
      const selectedDateTimestamp = new Date(dateQuery).getTime();

      conferences = conferences.filter((event) => {
        const eventDateTimestamp = new Date(event.startDate).getTime();
        return eventDateTimestamp === selectedDateTimestamp;
      });
    }

    return (
      <ul className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 min-h-[50vh]">
        {conferences.length > 0 ? (
          conferences?.map((event) => <EventBox key={event.id} {...event} />)
        ) : (
          <div>There are no events</div>
        )}
      </ul>
    );
  }
};

export default EventsList;
