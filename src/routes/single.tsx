import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { singleEvent } from "../graphql/eventsGraph";
import Event from "../components/Event/Event";
import Backdrop from "../components/UI/Backdrop";
import Loader from "../components/UI/Loader";

import { Events } from "../interfaces/interfaces";

const SinglePage = () => {
  const { eventId } = useParams();
  const { loading, error, data } = useQuery<{ conferences: Events[] }>(
    singleEvent
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

export default SinglePage;
