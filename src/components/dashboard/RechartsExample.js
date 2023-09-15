import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
  Background,
} from "victory";

//

export const RechartsExample = () => {
  const data = [
    {
      name: "Yanvar",
      countSponsors: 3000,
      countStudents: 4000,
    },
    {
      name: "Fevral",
      countSponsors: 2000,
      countStudents: 1500,
    },
    {
      name: "Mart",
      countSponsors: 3000,
      countStudents: 5000,
    },
    {
      name: "Aprel",
      countSponsors: 2300,
      countStudents: 3500,
    },
    {
      name: "May",
      countSponsors: 1500,
      countStudents: 2000,
    },
    {
      name: "Iyun",
      countSponsors: 1800,
      countStudents: 2100,
    },
    {
      name: "Iyul",
      countSponsors: 2100,
      countStudents: 4000,
    },
    {
      name: "Avgust",
      countSponsors: 2000,
      countStudents: 4000,
    },
    {
      name: "Sentyabr",
      countSponsors: 1200,
      countStudents: 1800,
    },
    {
      name: "Oktabr",
      countSponsors: 3000,
      countStudents: 4000,
    },
    {
      name: "Noyabr",
      countSponsors: 1400,
      countStudents: 3600,
    },
    {
      name: "Dekabr",
      countSponsors: 2400,
      countStudents: 3200,
    },
  ];
  // va hokazo ...

  return (
    <div
      style={{
        width: "1000px",
        height: "400px",
        margin: "0 auto",
        Background: "white",
      }}
    >
      <VictoryChart
        width={1000}
        height={400}
        theme={VictoryTheme.material}
        containerComponent={<VictoryVoronoiContainer />}
      >
        <VictoryAxis tickFormat={data.map((d) => d.name)} />
        <VictoryAxis dependentAxis />
        <VictoryLine
          data={data}
          x="name"
          y="countSponsors"
          style={{
            data: { stroke: "#4C6FFF", strokeWidth: 3 },
          }}
          labelComponent={<VictoryTooltip />}
          labels={({ datum }) => `Count Sponsors: ${datum.countSponsors}`}
        />

        <VictoryLine
          data={data}
          x="name"
          y="countStudents"
          style={{
            data: { stroke: "#FF92AE", strokeWidth: 3 },
          }}
          labelComponent={<VictoryTooltip />}
          labels={({ datum }) => `Count Students: ${datum.countStudents}`}
        />
      </VictoryChart>
    </div>
  );
};
