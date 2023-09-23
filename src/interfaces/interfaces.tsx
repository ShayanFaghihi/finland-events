import { ReactNode } from "react";

export interface Events {
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

export interface EventsListProps {
  searchQuery: string;
  dateQuery: string;
}

export interface SearchEventsProps {
  searchEvents: (value: string) => void;
  filterDate: (value: string) => void;
}

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}
