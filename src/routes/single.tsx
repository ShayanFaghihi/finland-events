import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import Event from "../components/Event/Event";
import Backdrop from "../components/UI/Backdrop";
import Loader from "../components/UI/Loader";

const GET_EVENTS = gql`
  query GetEvents {
    conferences {
      id
      name
      slogan
      startDate
      websiteUrl
      organizers {
        name
        about
        image {
          url
        }
        social {
          homepage
          twitter
          github
        }
      }
      schedules {
        day
        description
        intervals {
          begin
        }
      }
      locations {
        name
        city
        address
        image {
          url
        }
      }
    }
  }
`;

export interface EventValidator {
  id: string;
  name: string;
  slogan: string;
  websiteUrl: string;
  startDate: string;
  organizers: {
    name: string;
    about: string;
    image: {
      url: string;
    };
    social: {
      homepage: string;
      twitter: string;
      github: string;
    };
  }[];
  schedules: {
    day: string;
    description: string;
    intervals: {
      begin: string;
    }[];
  }[];
  locations: {
    name: string;
    city: string;
    address: string;
    image: {
      url: string;
    };
  }[];
}

const Single = () => {
  const { eventId } = useParams();
  const { loading, error, data } = useQuery<{ conferences: EventValidator[] }>(
    GET_EVENTS
  );

  if (error) console.log(error);
  if (loading) {
    return (
      <>
        <Backdrop />
        <div className="w-full h-screen flex justify-center items-center">
          <Loader />
        </div>
      </>
    );
  } else {
    const event = data?.conferences.filter((item) => item.id === eventId);
    return event && <Event {...event[0]} />;
  }
};

export default Single;
