import { makeVar, InMemoryCache, ApolloClient, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

// Function to initialize the Reactive Variable function (makeVar())
const eventsIdList = () => {
  const storedList = localStorage.getItem("wishList");
  if (storedList && storedList.length > 0) {
    try {
      const parsedList = JSON.parse(storedList);
      if (
        Array.isArray(parsedList) &&
        parsedList.every((id) => typeof id === "string")
      ) {
        return parsedList;
      }
    } catch (error) {
      console.error("Error parsing wishList from localStorage:", error);
    }
  }
  return [];
};

export const wishlistVar = makeVar<string[]>(eventsIdList());

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Conference: {
        fields: {
          isWishlist: {
            read(_, { readField }) {
              const eventId = readField("id") as string;
              return wishlistVar().includes(eventId);
            },
          },
        },
      },
    },
  }),
  link: new HttpLink({ uri: "https://api.react-finland.fi/graphql", fetch }),
});

export default client;
