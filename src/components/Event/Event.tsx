import { EventValidator } from "../../routes/single";
import useDate from "../hooks/use-date";
import { Link } from "react-router-dom";

import placeholderImage from "../../assets/placeholder.png";
import locationIcon from "../../assets/location.svg";
import Container from "../UI/Container";

import Footer from "../sections/Footer";

const Event = (props: EventValidator) => {
  let locationImage = placeholderImage;
  let locationCity = "Finland";
  const {
    day: eventDay,
    month: eventMonth,
    year: eventYear,
  } = useDate(props.startDate);

  return (
    <>
      <header
        className="w-full shadow-sm h-[40vh] bg-cover bg-no-repeat bg-center bg-[black] bg-opacity-20 bg-blend-multiply mb-8"
        style={{
          backgroundImage: `url(${
            props.locations[0]?.image.url || locationImage
          })`,
        }}
      ></header>
      <Container>
        <main className="block sm:flex justify-between">
          <div className="">
            <h1 className="font-poppins font-bold capitalize text-blue text-xl sm:text-3xl">
              {props.name}
            </h1>
            <p className="font-poppins text-blue font-light text-md sm:text-xl">
              {props.slogan}
            </p>
            <ul className="flex justify-start list-none mt-4 mb-4 flex-wrap">
              {props.organizers.map((organizer) => (
                <li
                  key={organizer.name}
                  className="w-8 h-8 rounded-full not -ml-2 first-of-type:ml-0 hover:mr-2 transition-all"
                >
                  <img
                    className="rounded-full"
                    src={organizer.image.url}
                    alt={organizer.name}
                    title={organizer.name}
                  />
                </li>
              ))}
            </ul>
          </div>
          <aside>
            <h2 className="font-bold text-xl text-blue font-poppins mb-2">
              Event Information
            </h2>
            <div className="font-normal">
              <span>🗓️</span> {`${eventDay} of ${eventMonth}, ${eventYear}`}
            </div>
            <div className="flex gap-1 font-poppins">
              <img width="15" src={locationIcon} />
              <span className="font-light">
                {props.locations.length > 0
                  ? props.locations.map((location) => location.city)
                  : locationCity}
              </span>
            </div>
            <p className="flex gap-1 mb-4">
              <span>🧭</span>
              <span className="font-light ">
                {props.locations.length > 0
                  ? props.locations?.map((location) => location.address)
                  : locationCity}
              </span>
            </p>
            <a
              className="btn-primary w-full hover:bg-opacity-75 ease-in transition-colors"
              href={props.websiteUrl}
            >
              Event Website
            </a>
          </aside>
        </main>

        <section>
          <h2 className="font-bold text-xl text-blue font-poppins mb-2">
            Schedule
          </h2>
          <ul className="flex flex-col gap-6 w-full">
            {props.schedules.map((schedule, key) => {
              const { day: scheduleDay, month: scheduleMonth } = useDate(
                schedule.day
              );
              return (
                <li
                  key={key}
                  className="w-full bg-white p-8 flex justify-start items-center rounded-t-xl relative custom-shadow"
                >
                  <div className="flex flex-col justify-center items-center mr-4 ">
                    {/* <span className="font-poppins font-bold text-sm">Date</span> */}
                    <div className="font-poppins font-normal text-lg absolute top-0 left-0 bottom-0 rounded-tl-xl bg-purple text-white flex flex-col justify-center items-center ">
                      <span className="-rotate-90">{scheduleDay}</span>
                      <span className=" -rotate-90">{scheduleMonth}</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center mr-auto">
                    <span className="font-poppins font-bold text-sm">
                      Start At
                    </span>
                    <span className="font-poppins font-normal text-xs">
                      {schedule.intervals[0]?.begin}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-end w-2/4">
                    <span className="font-poppins font-bold text-sm text-center w-full">
                      Title
                    </span>
                    <span className="font-poppins font-normal text-xs text-center w-full">
                      {schedule.description}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <div className="flex w-full justify-center">
          <Link
            className="btn-primary hover:bg-opacity-75 ease-in transition-colors"
            to="/"
          >
            Review All Events
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Event;
