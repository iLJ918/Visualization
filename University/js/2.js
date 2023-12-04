document.addEventListener("DOMContentLoaded", function () {
    // 初始化图表，修正了使用getElementById的参数和变量名
    var myChart = echarts.init(document.getElementById("myChart"));

    // 图表配置选项
    var option = {
      // legend: {bottom: 1, },
      tooltip: {
        trigger: "axis",
        showContent: false,
      },
      dataset: {
        source: [
          ["product", "2012", "2013", "2014", "2015"],
          ["Australia", 2, 2, 27, 27],
          ["Canada", 3, 4, 32, 33],
          ["China", 0, 0, 84, 83],
          ["France", 5, 5, 50, 49],
          ["Germany", 3, 2, 55, 55],
          ["Italy", 1, 1, 47, 47],
          ["Japan", 5, 6, 74, 74],
          ["South Korea", 1, 1, 34, 36],
          ["Spain", 0, 0, 41, 40],
          ["USA", 58, 57, 229, 229],
          ["United Kingdom", 8, 7, 64, 65],
        ],
      },
      xAxis: { type: "category" },
      yAxis: { gridIndex: 0 },
      grid: { top: "55%" },
      series: [
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          emphasis: { focus: "series" },
        },
        {
          type: "pie",
          id: "pie",
          radius: "30%",
          center: ["50%", "25%"],
          emphasis: { focus: "self" },
          label: { formatter: "{b}: {@2012} ({d}%)" },
          encode: { itemName: "product", value: "2012", tooltip: "2012" },
        },
      ],
    };

    // 设置图表选项
    myChart.setOption(option);

    // 监听事件，更新鼠标指针信息
    myChart.on("updateAxisPointer", function (event) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        myChart.setOption({
          series: {
            id: "pie",
            label: { formatter: "{b}: {@[" + dimension + "]} ({d}%)" },
            encode: { value: dimension, tooltip: dimension },
          },
        });
      }
    });
  });