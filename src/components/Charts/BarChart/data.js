const data = {
  chart: {
    type: "bar",

    height: 800,
    zoomType: "y",
  },

  title: {
    style: {
      display: "none",
    },
    text: null,
  },
  xAxis: {
    labels: {
      style: {
        color: "#14144B",
        fontWeight: 600,
        FontSize: "14px",
      },
    },
    categories: [
      "Russia",
      "China",
      "India",
      "United States",
      "Indonesia",
      "Nigeria",
      "Brazil",
      "Mexico",
      "Japan",
      "Ethiopia",
      "Austria",
      "Estonia",
      "Sweden",
      "Italy",
      "Czechia",
      "Latvia",
      "Finland",
      "Slovenia",
    ],

    title: {
      style: {
        display: "none",
      },
      text: null,
    },

    accessibility: {
      description: "Countries",
    },
  },

  credits: {
    enabled: false,
  },

  yAxis: {
    min: 0,
    max: 30,

    tickInterval: 0,
    title: {
      style: {
        display: "none",
      },
      text: null,
    },

    labels: {
      style: {
        display: "none",
      },
      overflow: "justify",
      // format: "{value}%",
    },
  },
  plotOptions: {
    series: {
      pointPadding: -0.1,
      borderRadius: 3,
    },
    bar: {
      dataLabels: {
        enabled: false,
        // format: "{y}%",
      },
    },
  },
  tooltip: {
    valueSuffix: "M",
    useHTML: true,
    backgroundColor: null,
    borderWidth: 0,
    shadow: false,
    pointFormat:
      "{series.name}: <strong>{point.y}</strong><br/>Happy: <strong>70%</strong><br/>Sad: <strong>30%</strong>",
    stickOnContact: false,
    style: {
      zIndex: 200000000,
    },
    // backgroundColor: "rgba(255, 255, 255, 0.93)",
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "Interest",
      color: "rgba(100, 143, 255, 0.5)",
      // color: "rgba(240, 87, 40, 0.35)",
      // borderColor: "rgba(240, 87, 40, 0.35)",
      data: [27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1.5],
    },
  ],
};

export default data;
