import { useState } from "react";

import Footer from "../components/Footer";
import EventsList from "../components/List/EventsList";
import MainHeader from "../components/MainHeader";
import SearchEvents from "../components/SearchEvents";
import Container from "../components/UI/Container";

const Root = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateQuery, setDateQuery] = useState();

  const searchEventsHandler = (query: string) => {
    if (query) {
      setSearchQuery(query);
    }
  };

  const filterDateHandler = (date) => {
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

export default Root;
