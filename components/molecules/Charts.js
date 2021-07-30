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


// // const data = [
// //   {
// //     label: "Venezuela",
// //     value: "290"
// //   },
// //   {
// //     label: "Saudi",
// //     value: "260"
// //   },
// //   {
// //     label: "Canada",
// //     value: "180"
// //   },
// //   {
// //     label: "Iran",
// //     value: "140"
// //   },
// //   {
// //     label: "Russia",
// //     value: "115"
// //   },
// //   {
// //     label: "UAE",
// //     value: "100"
// //   },
// //   {
// //     label: "US",
// //     value: "30"
// //   },
// //   {
// //     label: "China",
// //     value: "30"
// //   }
// // ];

// // STEP 3 - Creating the JSON object to store the chart configurations

// const ChartComponent = ({data}) => {
//   const chartConfigs = {
//     type: "doughnut2d", // The chart type
//     width: "100%", // Width of the chart
//     height: "400", // Height of the chart
//     dataFormat: "json", // Data type
//     dataSource: {
//       // Chart Configuration
//       chart: {
//         //Set the chart caption
//         caption: 'Languages',
//         theme: "fusion",
//         decimals: 0,
//         pieRadius: '45%'
//       },
//       // Chart Data
//       data,
//     }
//   };
//   return (<ReactFC {...chartConfigs} />);
// }

// export default ChartComponent;