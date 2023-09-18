import { Link } from "react-router-dom";
import { EventsValidator } from "./EventsList";
import useDate from "../hooks/use-date";

import placeholderImage from "../../assets/placeholder-min.png";
import locationIcon from "../../assets/location.svg";

const EventBox = (props: EventsValidator) => {
  let locationImage = placeholderImage;
  let locationCity = "Finland";

  const {
    day: eventDay,
    month: eventMonth,
    year: eventYear,
  } = useDate(props.startDate);

  if (props.locations[0]) {
    locationImage = props.locations[0].image.url;
  }
  return (
    <li className="rounded-lg shadow-md flex flex-col justify-between">
      <div className="w-full h-32">
        <img
          className="h-full w-full rounded-t-lg"
          src={locationImage || placeholderImage}
        />
      </div>
      <div className="px-6 pt-4 py-6 flex flex-col items-center justify-between">
        <div className="flex justify-between mb-4">
          <div className="flex flex-col items-center mr-3">
            <span className="text-purple font-bold text-xs uppercase">
              {eventMonth}
            </span>
            <span className="text-blue font-bold text-2xl">{eventDay}</span>
            <span className="text-blue font-bold text-sm">{eventYear}</span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className=" font-poppins font-medium text-base text-blue">
              {props.name}
            </h2>
            <p className="font-poppins font-normal text-sm text-blue">
              {props.slogan}
            </p>
            <div className="flex gap-1">
              <img src={locationIcon} />
              {props.locations[0]?.city || locationCity}
            </div>
          </div>
        </div>
        <Link
          className="btn-primary w-full hover:bg-opacity-75 ease-in transition-colors "
          to={"event/" + props.id}
        >
          View More
        </Link>
      </div>
    </li>
  );
};

export default EventBox;
