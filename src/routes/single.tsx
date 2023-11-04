import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { singleEvent } from "../graphql/eventsGraph";
import Event from "../components/Event/Event";
import Backdrop from "../components/UI/Backdrop";
import Loader from "../components/UI/Loader";

import { Events } from "../interfaces/interfaces";

const SinglePage = () => {
  const { eventId } = useParams();
  const { loading, error, data } = useQuery<{ conference: Events[] }>(
    singleEvent,
    { variables: { eventId } }
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
    const event = data?.conference;
    return event && <Event {...event} />;
  }
};

export default SinglePage;
