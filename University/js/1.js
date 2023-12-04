var chart = echarts.init(document.getElementById("rank"));
chart.setOption({
  title: {
    text: "世界大学排名 Top 10得分",
    left: "center",
    top:18,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  xAxis: {
    type: "category",
    data: [
      "Harvard University",
      "Massachusetts Institute of Technology",
      "Stanford University",
      "University of Cambridge",
      "California Institute of Technology",
      "Princeton University",
      "University of Oxford",
      "Yale University",
      "Columbia University",
      "University of California, Berkeley",
    ],
    axisLabel: {
      interval: 0, // x 轴标签全部显示
      rotate: 45, // 标签旋转角度
      textStyle: {
        fontSize: 10, // 标签字体大小
      },
    },
  },
  yAxis: {
    type: "value",
    name: "Score", // y 轴名称
    nameTextStyle: {
      fontSize: 12,
    },
  },
  series: [
    {
      name: "Score",
      type: "bar",
      data: [
        100, 91.67, 89.5, 86.17, 85.21, 82.5, 82.34, 79.14, 78.86,
        78.55,
      ],
      itemStyle: {
        color: function (params) {
          var colorList = [
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#FFA07A", // 渐变开始的颜色
              },
              {
                offset: 1,
                color: "#8A2BE2", // 渐变结束的颜色
              },
            ]),
            // 更多的渐变颜色设置可以继续添加
          ];
          return colorList[params.dataIndex % colorList.length];
        },
      },
    },
  ],
});