// // STEP 1 - Include Dependencies
// // Include react
// import React from "react";

// // Include the react-fusioncharts component
// import ReactFC from "react-fusioncharts";

// // Include the fusioncharts library
// import FusionCharts from "fusioncharts";

// // Include the chart type
// import Chart from "fusioncharts/fusioncharts.charts";

// // Include the theme as fusion
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// // Adding the chart and theme as dependency to the core fusioncharts
// ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);


// const chartData = [
//   {
//     label: "Food",
//     value: "28504"
//   },
//   {
//     label: "Apparels",
//     value: "14633"
//   },
//   {
//     label: "Electronics",
//     value: "10507"
//   },
//   {
//     label: "Household",
//     value: "4910"
//   }
// ];

// // STEP 3 - Creating the JSON object to store the chart configurations

// const ChartComponent = () => {
//   const chartConfigs = {
//     type: "doughnut2d", // The chart type
//     // width: "100%", // Width of the chart
//     // height: "400", // Height of the chart
//     // renderAt: 'chart-container',
//     width: '100%',
//     height: '350',
//     dataFormat: "json", // Data type
//     dataSource: {
//       // Chart Configuration
//       // chart: {
//       //   //Set the chart caption
//       //   caption: 'Languages',
//       //   theme: "fusion",
//       //   decimals: 0,
//         // pieRadius: '45%'
//       // },
//       chart: {
//         caption: "",
//         numberPrefix: "$",
//         bgColor: "#ffffff",
//         startingAngle: "310",
//         showLegend: "1",
//         defaultCenterLabel: "Total revenue: $64.08K",
//         centerLabel: "Revenue from $label: $value",
//         centerLabelBold: "1",
//         showTooltip: "0",
//         labelFontColor: "#ffffff",
//         decimals: "0",
//         theme: "fusion",
//         valuePosition: "inside",
//         minAngleForValue: "75",
//         enablesmartLabel: "0",
//         pieRadius: '55%'
//       },
//       // Chart Data
//       data: chartData
//     }
//   };
//   return (<ReactFC {...chartConfigs} />);
// }

// export default ChartComponent;