export const single = [
  {
    name: "Enablement",
    value: 40
  },
  {
    name: "Checkout",
    value: 100
  },
  {
    name: "Chai",
    value: 36
  },
  {
    name: "Orxe",
    value: 36
  },
  {
    name: "Flights",
    value: 33
  },
  {
    name: "Bizops",
    value: 35
  },
  {
    name: "Orxe and Flights",
    value: 20
  }
];

export const tribes = [
  "Enablement",
  "Checkout",
  "Chai",
  "Orxe",
  "Flights",
  "Bizops",
  "Orxe and Flights"
];

export function generateData(
  seriesLength: number,
  includeMinMaxRange: boolean
): any[] {
  const results = [];

  const domain: Date[] = []; // array of time stamps in milliseconds

  for (let j = 0; j < 8; j++) {
    // random dates between Sep 12, 2016 and Sep 24, 2016
    domain.push(
      new Date(Math.floor(1473700105009 + Math.random() * 1000000000))
    );
  }

  for (let i = 0; i < seriesLength; i++) {
    const country = tribes[Math.floor(Math.random() * tribes.length)];
    const series = {
      name: country,
      series: []
    };

    for (let j = 0; j < domain.length; j++) {
      const value = Math.floor(2 + Math.random() * 5);
      // let timestamp = Math.floor(1473700105009 + Math.random() * 1000000000);
      const timestamp = domain[j];
      if (includeMinMaxRange) {
        const errorMargin = 0.02 + Math.random() * 0.08;

        series.series.push({
          value,
          name: timestamp,
          min: Math.floor(value * (1 - errorMargin)),
          max: Math.ceil(value * (1 + errorMargin))
        });
      } else {
        series.series.push({
          value,
          name: timestamp
        });
      }
    }

    results.push(series);
  }
  return results;
}
