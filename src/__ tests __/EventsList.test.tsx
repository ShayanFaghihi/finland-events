import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { allEvents, singleEvent } from "../graphql/eventsGraph";

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

describe("Single Event Component", () => {
  const mocks = [
    {
      request: {
        query: singleEvent,
        variable: {
          id: "future-frontend-2023",
        },
      },
      result: {
        data: {
          conference: {
            id: "future-frontend-2023",
            name: "Future Frontend 2023",
            slogan: "The future of frontend reimagined",
            startDate: "2023-06-08",
            websiteUrl: "https://futurefrontend.com/",
            organizers: [
              {
                name: "Aleksi Pousar",
                about:
                  "Aleksi Pousar works on the app and is the treasurer of the association.",
                image: {
                  url: "https://api.react-finland.fi/media/people/aleksi.jpg",
                },
                social: {
                  homepage: "https://aleksipousar.fi",
                  twitter: "https://twitter.com/AleksiPousar",
                  github: "https://github.com/stoneman1",
                },
              },
              {
                name: "Eemeli Aro",
                about:
                  "Eemeli has been falling down the rabbit hole of JavaScript localization for about six years now, and keeps wondering at what the next level might be. For work he makes complicated systems seem simple, for fun he writes open-source libraries, and in his spare time he organises science fiction conventions.",
                image: {
                  url: "https://api.react-finland.fi/media/people/eemeli.jpg",
                },
                social: {
                  homepage: null,
                  twitter: "https://twitter.com/eemeli_aro",
                  github: "https://github.com/eemeli",
                },
              },
              {
                name: "Harri Määttä",
                about:
                  "Mobile Developer. Also DevOps Specialist. Otherwise nice guy. Lives in Helsinki, so can help with local issues (=I know bars!)",
                image: {
                  url: "https://api.react-finland.fi/media/people/harri.jpg",
                },
                social: {
                  homepage: null,
                  twitter: "https://twitter.com/HarriMaatta",
                  github: "https://github.com/HarriMaatta",
                },
              },
              {
                name: "Juho Vepsäläinen",
                about:
                  "Juho Vepsäläinen is behind the SurviveJS effort. He has been active in the open source scene since the early 2000s and participated in projects like Blender and webpack as a core team member. Blue Arrow Awards winner.",
                image: {
                  url: "https://api.react-finland.fi/media/people/juho.jpg",
                },
                social: {
                  homepage: "https://survivejs.com/",
                  twitter: "https://twitter.com/bebraw",
                  github: "https://github.com/bebraw",
                },
              },
              {
                name: "Toni Ristola",
                about:
                  "Toni Ristola is a Software Architect at Robu Oy and an organizer for the React Finland conference and contributor for the React Finland App.",
                image: {
                  url: "https://api.react-finland.fi/media/people/toni.jpg",
                },
                social: {
                  homepage: null,
                  twitter: "https://twitter.com/toniristola",
                  github: "https://github.com/tristola",
                },
              },
              {
                name: "Tuuli Tiilikainen",
                about: "",
                image: {
                  url: "https://api.react-finland.fi/media/people/tuuli.jpg",
                },
                social: {
                  homepage:
                    "https://www.columbiaroad.com/people/tuuli-tiilikainen",
                  twitter: null,
                  github: null,
                },
              },
              {
                name: "Juha-Matti Santala",
                about: "",
                image: {
                  url: "https://api.react-finland.fi/media/people/juhis.jpeg",
                },
                social: {
                  homepage: "https://hamatti.org/",
                  twitter: "https://twitter.com/hamatti",
                  github: "https://github.com/hamatti",
                },
              },
            ],
            schedules: [
              {
                day: "2023-06-05",
                description: "Monday",
                intervals: [
                  {
                    begin: "15:00",
                  },
                ],
              },
              {
                day: "2023-06-06",
                description: "Tuesday – workshops",
                intervals: [
                  {
                    begin: "05:00",
                  },
                  {
                    begin: "06:00",
                  },
                  {
                    begin: "09:00",
                  },
                  {
                    begin: "10:00",
                  },
                  {
                    begin: "11:30",
                  },
                  {
                    begin: "12:00",
                  },
                ],
              },
              {
                day: "2023-06-07",
                description: "Wednesday – workshops",
                intervals: [
                  {
                    begin: "05:00",
                  },
                  {
                    begin: "06:00",
                  },
                  {
                    begin: "09:00",
                  },
                  {
                    begin: "10:00",
                  },
                  {
                    begin: "11:30",
                  },
                  {
                    begin: "12:00",
                  },
                ],
              },
              {
                day: "2023-06-08",
                description: "Thursday – conference",
                intervals: [
                  {
                    begin: "05:00",
                  },
                  {
                    begin: "05:50",
                  },
                  {
                    begin: "06:00",
                  },
                  {
                    begin: "07:30",
                  },
                  {
                    begin: "08:00",
                  },
                  {
                    begin: "09:30",
                  },
                  {
                    begin: "10:30",
                  },
                  {
                    begin: "12:00",
                  },
                  {
                    begin: "12:30",
                  },
                  {
                    begin: "14:30",
                  },
                ],
              },
              {
                day: "2023-06-09",
                description: "Friday – conference",
                intervals: [
                  {
                    begin: "05:00",
                  },
                  {
                    begin: "05:50",
                  },
                  {
                    begin: "06:00",
                  },
                  {
                    begin: "07:30",
                  },
                  {
                    begin: "08:00",
                  },
                  {
                    begin: "09:30",
                  },
                  {
                    begin: "10:30",
                  },
                  {
                    begin: "12:00",
                  },
                  {
                    begin: "12:30",
                  },
                  {
                    begin: "14:15",
                  },
                  {
                    begin: "15:00",
                  },
                ],
              },
            ],
            locations: [
              {
                name: "Pörssitalo",
                city: "Helsinki",
                address: "Fabianinkatu 14",
                image: {
                  url: "",
                },
              },
            ],
            isWishlist: false,
          },
        },
      },
    },
  ];

  it("render mock a single event to be shown", async () => {
    render(<MockedProvider mocks={mocks} addTypename={false}></MockedProvider>);
  });
});
