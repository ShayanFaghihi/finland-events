import { gql } from "@apollo/client";

export const allEvents = gql`
  query GetEvents {
    conferences {
      id
      name
      startDate
      slogan
      locations {
        name
        city
        image {
          url
        }
      }
    }
  }
`;

export const singleEvent = gql`
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
