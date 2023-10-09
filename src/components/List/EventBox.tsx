import { useState } from "react";
import { wishlistVar } from "../../graphql/client";

import { Link } from "react-router-dom";
import { Events } from "../../interfaces/interfaces";
import useDate from "../../hooks/use-date";

import placeholderImage from "../../assets/placeholder-min.png";
import locationIcon from "../../assets/location.svg";
import like from "../../assets/heart.svg";
import disLike from "../../assets/heart-unliked.svg";

const EventBox = (props: Events) => {
  const [imageHasError, setImageHasError] = useState(false);

  const addToWishlistHandler = () => {
    const wishList = wishlistVar();
    const updatedWishList = props.isWishlist
      ? wishList.filter((eventId) => eventId !== props.id)
      : [...wishList, props.id];
    wishlistVar(updatedWishList);
    localStorage.setItem("wishList", JSON.stringify(updatedWishList));
  };
  const wishListStyle = props.isWishlist
    ? { backgroundColor: "#f27171" }
    : { backgroundColor: "white" };

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
      <div className="w-full h-32 relative">
        {imageHasError ? (
          <img className="h-full w-full rounded-t-lg" src={placeholderImage} />
        ) : (
          <img
            className="h-full w-full rounded-t-lg"
            src={locationImage || placeholderImage}
            onError={() => setImageHasError(true)}
          />
        )}
        <span
          style={wishListStyle}
          className="rounded-full w-6 h-6 flex justify-center items-center cursor-pointer absolute top-3 right-3"
          onClick={addToWishlistHandler}
        >
          <img
            className="w-4"
            src={props.isWishlist ? like : disLike}
            alt="heart"
          />
        </span>
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
