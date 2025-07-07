export const sunSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.25"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-sun-icon lucide-sun"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

export const moonSvg = (
  <svg
    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium header-icons css-1c80anv-MuiSvgIcon-root"
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    data-testid="MoonIcon"
    fill="black"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
    </svg>
  </svg>
);

export const dashaData = {
  chera: {
    subArr: [
      "Gemini",
      "Taurus",
      "Aries",
      "Pisces",
      "Aquarius",
      "Capricorn",
      "Sagittarius",
      "Scorpio",
      "Libra",
      "Virgo",
      "Leo",
      "Cancer",
    ],
    resultArr: [4, 5, 4, 10, 8, 8, 5, 1, 12, 11, 11, 8],
    Moon: 8,
    subArr1: [
      "Sagittarius",
      "Scorpio",
      "Libra",
      "Virgo",
      "Leo",
      "Cancer",
      "Gemini",
      "Taurus",
      "Aries",
      "Pisces",
      "Aquarius",
      "Capricorn",
    ],
    d: [
      {
        dashaStartDate: "2000-10-02",
        dashaEndDate: "2004-10-02T00:36:38.000Z",
        planet: "Gemini",
        years: 4,
        lagna: 3,
      },
      {
        dashaStartDate: "2004-10-02T00:36:38.000Z",
        dashaEndDate: "2009-10-02T07:22:25.000Z",
        planet: "Taurus",
        years: 5,
        lagna: 3,
      },
      {
        dashaStartDate: "2009-10-02T07:22:25.000Z",
        dashaEndDate: "2013-10-02T07:59:03.000Z",
        planet: "Aries",
        years: 4,
        lagna: 3,
      },
      {
        dashaStartDate: "2013-10-02T07:59:03.000Z",
        dashaEndDate: "2023-10-02T21:30:38.000Z",
        planet: "Pisces",
        years: 10,
        lagna: 3,
      },
      {
        dashaStartDate: "2023-10-02T21:30:38.000Z",
        dashaEndDate: "2031-10-02T22:43:54.000Z",
        planet: "Aquarius",
        years: 8,
        lagna: 3,
      },
      {
        dashaStartDate: "2031-10-02T22:43:54.000Z",
        dashaEndDate: "2039-10-02T23:57:10.000Z",
        planet: "Capricorn",
        years: 8,
        lagna: 3,
      },
      {
        dashaStartDate: "2039-10-02T23:57:10.000Z",
        dashaEndDate: "2044-10-02T06:42:57.000Z",
        planet: "Sagittarius",
        years: 5,
        lagna: 3,
      },
      {
        dashaStartDate: "2044-10-02T06:42:57.000Z",
        dashaEndDate: "2045-10-02T12:52:06.000Z",
        planet: "Scorpio",
        years: 1,
        lagna: 3,
      },
      {
        dashaStartDate: "2045-10-02T12:52:06.000Z",
        dashaEndDate: "2057-10-02T14:42:00.000Z",
        planet: "Libra",
        years: 12,
      },
      {
        dashaStartDate: "2057-10-02T14:42:00.000Z",
        dashaEndDate: "2068-10-02T10:22:44.000Z",
        planet: "Virgo",
        years: 11,
        lagna: 3,
      },
      {
        dashaStartDate: "2068-10-02T10:22:44.000Z",
        dashaEndDate: "2079-10-03T06:03:28.000Z",
        planet: "Leo",
        years: 11,
        lagna: 3,
      },
      {
        dashaStartDate: "2079-10-03T06:03:28.000Z",
        dashaEndDate: "2087-10-03T07:16:44.000Z",
        planet: "Cancer",
        years: 8,
        lagna: 3,
      },
    ],
  },
  yoginidasa: [
    {
      dashaEndDate: "2004-07-12T10:12:24.000Z",
      dashaStartDate: "2000-07-12T09:35:46.000Z",
      planet: "Mars",
    },
    {
      dashaEndDate: "2009-07-12T16:58:11.000Z",
      dashaStartDate: "2004-07-12T10:12:24.000Z",
      planet: "Mercury",
    },
    {
      dashaEndDate: "2015-07-13T05:53:08.000Z",
      dashaStartDate: "2009-07-12T16:58:11.000Z",
      planet: "Saturn",
    },
    {
      dashaEndDate: "2022-07-13T00:57:14.000Z",
      dashaStartDate: "2015-07-13T05:53:08.000Z",
      planet: "Venus",
    },
    {
      dashaEndDate: "2030-07-13T02:10:30.000Z",
      dashaStartDate: "2022-07-13T00:57:14.000Z",
      planet: "Rahu",
    },
    {
      dashaEndDate: "2031-07-13T08:19:39.000Z",
      dashaStartDate: "2030-07-13T02:10:30.000Z",
      planet: "Moon",
    },
    {
      dashaEndDate: "2033-07-12T20:37:58.000Z",
      dashaStartDate: "2031-07-13T08:19:39.000Z",
      planet: "Sun",
    },
    {
      dashaEndDate: "2036-07-12T15:05:26.000Z",
      dashaStartDate: "2033-07-12T20:37:58.000Z",
      planet: "Jupiter",
    },
    {
      dashaEndDate: "2040-07-12T15:42:04.000Z",
      dashaStartDate: "2036-07-12T15:05:26.000Z",
      planet: "Mars",
    },
    {
      dashaEndDate: "2045-07-12T22:27:51.000Z",
      dashaStartDate: "2040-07-12T15:42:04.000Z",
      planet: "Mercury",
    },
    {
      dashaEndDate: "2051-07-13T11:22:48.000Z",
      dashaStartDate: "2045-07-12T22:27:51.000Z",
      planet: "Saturn",
    },
    {
      dashaEndDate: "2058-07-13T06:26:54.000Z",
      dashaStartDate: "2051-07-13T11:22:48.000Z",
      planet: "Venus",
    },
    {
      dashaEndDate: "2066-07-13T07:40:10.000Z",
      dashaStartDate: "2058-07-13T06:26:54.000Z",
      planet: "Rahu",
    },
    {
      dashaEndDate: "2067-07-13T13:49:19.000Z",
      dashaStartDate: "2066-07-13T07:40:10.000Z",
      planet: "Moon",
    },
    {
      dashaEndDate: "2069-07-13T02:07:38.000Z",
      dashaStartDate: "2067-07-13T13:49:19.000Z",
      planet: "Sun",
    },
    {
      dashaEndDate: "2072-07-12T20:35:06.000Z",
      dashaStartDate: "2069-07-13T02:07:38.000Z",
      planet: "Jupiter",
    },
    {
      dashaEndDate: "2076-07-12T21:11:44.000Z",
      dashaStartDate: "2072-07-12T20:35:06.000Z",
      planet: "Mars",
    },
    {
      dashaEndDate: "2081-07-13T03:57:31.000Z",
      dashaStartDate: "2076-07-12T21:11:44.000Z",
      planet: "Mercury",
    },
    {
      dashaEndDate: "2087-07-13T16:52:28.000Z",
      dashaStartDate: "2081-07-13T03:57:31.000Z",
      planet: "Saturn",
    },
    {
      dashaEndDate: "2094-07-13T11:56:34.000Z",
      dashaStartDate: "2087-07-13T16:52:28.000Z",
      planet: "Venus",
    },
    {
      dashaEndDate: "2102-07-14T13:09:50.000Z",
      dashaStartDate: "2094-07-13T11:56:34.000Z",
      planet: "Rahu",
    },
    {
      dashaEndDate: "2103-07-14T19:18:59.000Z",
      dashaStartDate: "2102-07-14T13:09:50.000Z",
      planet: "Moon",
    },
    {
      dashaEndDate: "2105-07-14T07:37:18.000Z",
      dashaStartDate: "2103-07-14T19:18:59.000Z",
      planet: "Sun",
    },
    {
      dashaEndDate: "2108-07-14T02:04:46.000Z",
      dashaStartDate: "2105-07-14T07:37:18.000Z",
      planet: "Jupiter",
    },
  ],
  Dasha: [
    {
      dashaEndDate: "2018-09-10T05:32:42.000Z",
      dashaStartDate: "1999-09-10T08:38:42.000Z",
      planet: "Saturn",
    },
    {
      dashaEndDate: "2035-09-10T14:08:23.000Z",
      dashaStartDate: "2018-09-10T05:32:42.000Z",
      planet: "Mercury",
    },
    {
      dashaEndDate: "2042-09-10T09:12:29.000Z",
      dashaStartDate: "2035-09-10T14:08:23.000Z",
      planet: "Ketu",
    },
    {
      dashaEndDate: "2062-09-10T12:15:39.000Z",
      dashaStartDate: "2042-09-10T09:12:29.000Z",
      planet: "Venus",
    },
    {
      dashaEndDate: "2068-09-10T01:10:36.000Z",
      dashaStartDate: "2062-09-10T12:15:39.000Z",
      planet: "Sun",
    },
    {
      dashaEndDate: "2078-09-10T14:42:11.000Z",
      dashaStartDate: "2068-09-10T01:10:36.000Z",
      planet: "Moon",
    },
    {
      dashaEndDate: "2085-09-10T09:46:17.000Z",
      dashaStartDate: "2078-09-10T14:42:11.000Z",
      planet: "Mars",
    },
    {
      dashaEndDate: "2103-09-12T00:31:08.000Z",
      dashaStartDate: "2085-09-10T09:46:17.000Z",
      planet: "Rahu",
    },
    {
      dashaEndDate: "2119-09-12T02:57:40.000Z",
      dashaStartDate: "2103-09-12T00:31:08.000Z",
      planet: "Jupiter",
    },
  ],
};

export const dashaBukthidata = {
  birthchart: {
    Mahadasha: {
      planet: "Saturn",
      startdate: "10-09-1999",
      enddate: "10-09-2018",
    },
    Antardasha: {
      planet: "Saturn",
      startdate: "10-09-1999",
      enddate: "13-09-2002",
    },
  },
};
dashaProgression: {
  progressionchart: {
    Mahadasha: {
      planet: "Mercury";
      startdate: "10-09-2018";
      enddate: "10-09-2035";
    }
    Antardasha: {
      planet: "Sun";
      startdate: "03-12-2024";
      enddate: "10-10-2025";
    }
  }
}
dashaTransist: {
  transistchart: {
    Mahadasha: {
      planet: "Me";
      startdate: "10-09-2018";
      enddate: "10-09-2035";
    }
    Antardasha: {
      planet: "Su";
      planet1: "Ve";
      planet2: "Me";
      startdate: "30-09-2025";
      enddate: "07-10-2025";
    }
  }
}
