import React, { useState } from "react";

import Footer from "../components/sections/Footer";
import EventsList from "../components/List/EventsList";
import MainHeader from "../components/sections/MainHeader";
import SearchEvents from "../components/sections/SearchEvents";
import Container from "../components/UI/Container";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateQuery, setDateQuery] = useState("");

  const searchEventsHandler = (query: string) => {
    if (query) {
      setSearchQuery(query);
    }
  };

  const filterDateHandler = (date: string) => {
    setDateQuery(date);
  };

  return (
    <>
      <MainHeader />
      <Container>
        <SearchEvents
          searchEvents={searchEventsHandler}
          filterDate={filterDateHandler}
        />
        <EventsList searchQuery={searchQuery} dateQuery={dateQuery} />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
