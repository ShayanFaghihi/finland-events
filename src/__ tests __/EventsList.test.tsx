import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { allEvents } from "../graphql/eventsGraph";

describe("Events List Component", () => {
  const mocks = [
    {
      request: {
        query: allEvents,
      },
      result: {
        data: {
          conferences: [
            {
              id: "Test Id",
              startDate: "2020-01-01",
              name: "Test Event Name",
              slogan: "Test Slogan",
              locations: [
                {
                  name: "Test Name",
                  city: "Test City",
                  image: {
                    url: "https://test.com",
                  },
                },
              ],
            },
          ],
        },
      },
    },
  ];

  it("renders mock events to be shown", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <div>GraphQL Response Test</div>
      </MockedProvider>
    );
    const response = mocks[0].result.data;
    expect(response).toHaveProperty("conferences");
    expect(response.conferences).toHaveLength(1);
    expect(response.conferences[0]).toHaveProperty("id");
    expect(response.conferences[0]).toHaveProperty("startDate");
    expect(response.conferences[0]).toHaveProperty("name");
    expect(response.conferences[0]).toHaveProperty("slogan");
    expect(response.conferences[0]).toHaveProperty("locations");
    expect(response.conferences[0].locations).toMatchObject([
      {
        name: "Test Name",
        city: "Test City",
        image: {
          url: "https://test.com",
        },
      },
    ]);
  });
});
