var chart = echarts.init(document.getElementById("rank4"), null, {
    width: "auto",
    height: "auto",
  });
  option = {
    title: {
      text: "2012-2015 年排名前 5 的大学",
      left: "center",
      top:18,
    },
    parallelAxis: [
      {
        dim: 0,
        name: "name",
        type: "category",
        data: ["Harvard", "MIT", "Stanford", "Cambridge", "Caltech"],
        nameLocation: "start",
        nameRotate: 45,
        nameTextStyle: { fontSize: 12 },
        nameTextStyle: {
          align: "right", // 将文字对齐到轴的右侧
        },
      },
      {
        dim: 1,
        name: "2012",
        type: "category",
        data: ["1", "2", "3", "4", "5"],
        nameLocation: "start",
      },
      {
        dim: 2,
        name: "2013",
        type: "category",
        data: ["1", "2", "3", "4", "5"],
        nameLocation: "start",
      },
      {
        dim: 3,
        name: "2014",
        type: "category",
        data: ["1", "2", "3", "4", "5"],
        nameLocation: "start",
      },
      {
        dim: 4,
        name: "2015",
        type: "category",
        data: ["1", "2", "3", "4", "5"],
        nameLocation: "start",
      },
    ],
    parallel: {
      parallelAxisDefault: {
        type: "category",
        nameLocation: "end",
        nameGap: 20,
        nameTextStyle: {
          fontSize: 10,
          padding: [0, 0, 20, 0], // Increase padding to ensure labels are not cut off
        },
      },
    },
    series: [
      {
        type: "parallel",
        lineStyle: { width: 4 },
        data: [
          { value: ["Caltech", 4], lineStyle: { color: "red" } },
          {
            value: ["Cambridge", 3, 4, 3, 3],
            lineStyle: { color: "blue" },
          },
          {
            value: ["Stanford", 2, 1, 1, 1],
            lineStyle: { color: "green" },
          },
          { value: ["MIT", 1, 3, 2, 2], lineStyle: { color: "orange" } },
          {
            value: ["Harvard", 0, 0, 0, 0],
            lineStyle: { color: "purple" },
          },
        ],
      },
    ],
  };
  chart.setOption(option);