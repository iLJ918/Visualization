var mainChart = echarts.init(document.getElementById("mainChart"));

var option = {
  title: {
    text: "Top 5 Universities Radar Charts",
    left: "center",
    top:18,
  },
  legend: {
    orient: "horizontal", // 设置图例水平排列
    bottom: 10, // 设置图例位于底部距离
    data: [
      "Harvard University",
      "Stanford University",
      "MIT",
      "University of California, Berkeley",
      "University of Cambridge",
      "Princeton University",
      "California Institute of Technology",
      "Columbia University",
      "University of Chicago",
      "University of Oxford",
    ],
  },
  radar: {
    indicator: [
      { name: "alumni" },
      { name: "award" },
      { name: "hici" },
      { name: "ns" },
      { name: "pub" },
      { name: "pcp" },
    ],
    radius: "60%", // 雷达图半径大小
  },
  series: [],
};

// 学校数据
var universityData = [
  { name: "Harvard University", data: [100, 100, 100, 100, 100, 76.6] },
  {
    name: "Stanford University",
    data: [40.7, 89.6, 80.1, 70.1, 70.6, 53.8],
  },
  {
    name: "Massachusetts Institute of Technology (MIT)",
    data: [68.2, 80.7, 60.6, 73.1, 61.1, 68],
  },
  {
    name: "University of California, Berkeley",
    data: [65.1, 79.4, 66.1, 65.6, 67.9, 56.5],
  },
  {
    name: "University of Cambridge",
    data: [77.1, 96.6, 50.8, 55.6, 66.4, 55.8],
  },
];

// 生成十个雷达图的子图
for (var i = 0; i < universityData.length; i++) {
  option.series.push({
    type: "radar",
    symbol: "none", // 不显示标记点
    itemStyle: {
      normal: {
        lineStyle: {
          width: 3, // 设置线条粗细
        },
      },
    },
    data: [
      {
        value: universityData[i].data,
        name: universityData[i].name,
      },
    ],
  });
}

mainChart.setOption(option);