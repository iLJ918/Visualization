var myChart = echarts.init(document.getElementById("map"));
var data = [
  { name: "United States", value: 161 },
  { name: "United Kingdom", value: 78 },
  { name: "Japan", value: 41 },
  { name: "Germany", value: 39 },
  { name: "China", value: 38 },
  { name: "Italy", value: 34 },
  { name: "Australia", value: 31 },
  { name: "France", value: 28 },
  { name: "Canada", value: 25 },
  { name: "Spain", value: 25 },
  { name: "Korea", value: 24 },
  { name: "Taiwan", value: 24 },
  { name: "Brazil", value: 17 },
  { name: "India", value: 17 },
  { name: "Netherlands", value: 13 },
  { name: "Russia", value: 13 },
  { name: "Turkey", value: 11 },
  { name: "Sweden", value: 11 },
  { name: "Switzerland", value: 10 },
  { name: "Ireland", value: 9 },
  { name: "Finland", value: 9 },
  { name: "Czech", value: 9 },
  { name: "Iran", value: 8 },
  { name: "New Zealand", value: 7 },
  { name: "Belgium", value: 7 },
  { name: "Thailand", value: 7 },
  { name: "Portugal", value: 7 },
  { name: "Greece", value: 7 },
  { name: "Poland", value: 7 },
  { name: "Austria", value: 7 },
  { name: "Hong Kong", value: 6 },
  { name: "Hungary", value: 6 },
  { name: "Chile", value: 6 },
  { name: "Israel", value: 6 },
  { name: "Denmark", value: 6 },
  { name: "South Africa", value: 6 },
  { name: "Malaysia", value: 5 },
  { name: "Norway", value: 4 },
  { name: "Romania", value: 4 },
  { name: "Egypt", value: 3 },
  { name: "Saudi Arabia", value: 3 },
  { name: "Jordan", value: 2 },
  { name: "United Arab Emirates", value: 2 },
  { name: "Slovakia", value: 2 },
  { name: "Pakistan", value: 2 },
  { name: "Slovenia", value: 2 },
  { name: "Mexico", value: 2 },
  { name: "Colombia", value: 2 },
  { name: "Estonia", value: 2 },
  { name: "Singapore", value: 2 },
  { name: "Ukraine", value: 2 },
  { name: "Kenya", value: 1 },
  { name: "Argentina", value: 1 },
  { name: "Latvia", value: 1 },
  { name: "Qatar", value: 1 },
  { name: "Oman", value: 1 },
  { name: "Ghana", value: 1 },
  { name: "Indonesia", value: 1 },
  { name: "Nigeria", value: 1 },
  { name: "Cyprus", value: 1 },
  { name: "Bangladesh", value: 1 },
  { name: "Serbia", value: 1 },
  { name: "Belarus", value: 1 },
  { name: "Lebanon", value: 1 },
  { name: "Uganda", value: 1 },
  { name: "Luxembourg", value: 1 },
  { name: "Morocco", value: 1 },
  { name: "Macau", value: 1 },
  { name: "Iceland", value: 1 },
  { name: "Lithuania", value: 1 },
];
var option = {
  title: {
    text: "top 818 世界各国大学数量统计",
    left: "center",
    textStyle: {
        fontFamily: '666',
      },
  },
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      console.log(params);
      if (params.name) {
        return (
          params.name +
          " : " +
          (isNaN(params.value) ? 0 : parseInt(params.value))
        );
      }
    },
  },
  visualMap: {
    min: 0,
    max: 161, // 最大值（例如，USA的573）
    left: "left",
    top: "bottom",
    text: ["High", "Low"],
    calculable: true,
    realtime: false, // 拖拽时，是否实时更新
    color: ["orangered", "yellow", "lightskyblue"],
  },
  series: [
    {
      name: "University Count",
      type: "map",
      mapType: "world",
      roam: true,
      data: data, // 使用 JSON 数据
    },
  ],
};
myChart.setOption(option);