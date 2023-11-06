import React from "react";
import { SearchEventsProps } from "../../interfaces/interfaces";
import Wishlist from "../Wishlist/Wishlist";

const SearchEvents = ({ searchEvents, filterDate }: SearchEventsProps) => {
  const searchHandler = (query: string) => {
    if (query.trim()) {
      searchEvents(query);
    }
  };

  const filterDateHandler = (date: string) => {
    filterDate(date);
  };

  return (
    <div className="flex justify-start mt-7 gap-3">
      <form className=" w-2/3 mr-auto sm:w-10/12">
        <input
          type="text"
          name="search-events"
          id="search-events"
          placeholder="Search for events..."
          className="p-3 text-grey bg-greyLight rounded-lg w-full"
          onChange={(e) => searchHandler(e.target.value)}
        />
      </form>
      <input
        onChange={(e) => filterDateHandler(e.target.value)}
        type="date"
        name="event-date"
        id="event-date"
        className="bg-purple text-white rounded-lg p-3 cursor-pointer"
        style={{ colorScheme: "dark" }}
      />
      <Wishlist />
    </div>
  );
};

export default SearchEvents;
