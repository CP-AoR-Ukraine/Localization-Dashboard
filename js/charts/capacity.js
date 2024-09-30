// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#3a3b45';
Chart.defaults.global.defaultFontSize = 14;
var CPbackgroundColor = ['#d7e039', '#95c651', '#86789c','#9fd5b5','#5a5a50']
var CPhoverBackgroundColor = ['#c3cb4a', '#87a663', '#7d758d', '#90af9f', '#595853']


var tcsachart = document.getElementById("TCSA");
var dapcdchart = document.getElementById("DAPCD");
var hstpchart = document.getElementById("HSTP");
var aiuchart = document.getElementById("AIU");
var tclnahart = document.getElementById("TCLNA");

var TCSA = new Chart(tcsachart, {
  type: 'pie',
  data: {
    labels: ["General Programatic", "Organisational or Operational", "Technical Child Protection"],
    datasets: [{
      data: [47,0,53],
      backgroundColor: CPbackgroundColor,
      hoverBackgroundColor: CPhoverBackgroundColor,
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
	  plugins: {
      labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
        render: 'percentage',

        // precision for percentage, default is 0
        precision: 0,

        // identifies whether or not labels of value 0 are displayed, default is false
        showZero: false,

        // font size, default is defaultFontSize
        fontSize: 16,

        // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
        fontColor: '#000',

        // font style, default is defaultFontStyle
        fontStyle: 'normal',

        // font family, default is defaultFontFamily
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // draw text shadows under labels, default is false
        textShadow: false,

        // text shadow intensity, default is 6
        shadowBlur: 6,

        // text shadow X offset, default is 3
        shadowOffsetX: -5,

        // text shadow Y offset, default is 3
        shadowOffsetY: 1,

        // text shadow color, default is 'rgba(0,0,0,0.3)'
        shadowColor: 'rgba(255,255,255,1)',

        // draw label in arc, default is false
        // bar chart ignores this
        arc: false,

        // position to draw label, available value is 'default', 'border' and 'outside'
        // bar chart ignores this
        // default is 'default'
        position: 'default',

        // draw label even it's overlap, default is true
        // bar chart ignores this
        overlap: true,

        // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
        showActualPercentages: true,

        // set images when `render` is 'image'
        images: [
          {
            src: 'image.png',
            width: 16,
            height: 16
          }
        ],

        // add padding when position is `outside`
        // default is 2
        outsidePadding: 8,

        // add margin of text when position is `outside` or `border`
        // default is 2
        textMargin: 4
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true,
	  position: 'bottom',
	  align: 'start'
    },
    cutoutPercentage: 0,
	
  },
});
var DAPCD = new Chart(dapcdchart, {
  type: 'pie',
  data: {
    labels: ["# of Intl Actors Delivering", "# of Intl Actors Not Delivering"],
    datasets: [{
      data: [84,16],
      backgroundColor: CPbackgroundColor,
      hoverBackgroundColor: CPhoverBackgroundColor,
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
	  plugins: {
      labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
        render: 'percentage',

        // precision for percentage, default is 0
        precision: 0,

        // identifies whether or not labels of value 0 are displayed, default is false
        showZero: false,

        // font size, default is defaultFontSize
        fontSize: 16,

        // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
        fontColor: '#000',

        // font style, default is defaultFontStyle
        fontStyle: 'normal',

        // font family, default is defaultFontFamily
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // draw text shadows under labels, default is false
        textShadow: false,

        // text shadow intensity, default is 6
        shadowBlur: 6,

        // text shadow X offset, default is 3
        shadowOffsetX: -5,

        // text shadow Y offset, default is 3
        shadowOffsetY: 1,

        // text shadow color, default is 'rgba(0,0,0,0.3)'
        shadowColor: 'rgba(255,255,255,1)',

        // draw label in arc, default is false
        // bar chart ignores this
        arc: false,

        // position to draw label, available value is 'default', 'border' and 'outside'
        // bar chart ignores this
        // default is 'default'
        position: 'default',

        // draw label even it's overlap, default is true
        // bar chart ignores this
        overlap: true,

        // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
        showActualPercentages: true,

        // set images when `render` is 'image'
        images: [
          {
            src: 'image.png',
            width: 16,
            height: 16
          }
        ],

        // add padding when position is `outside`
        // default is 2
        outsidePadding: 8,

        // add margin of text when position is `outside` or `border`
        // default is 2
        textMargin: 4
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true,
	  position: 'bottom',
	  align: 'start'
    },
    cutoutPercentage: 0,
	
  },
});

var HSTP = new Chart(hstpchart, {
  type: 'pie',
  data: {
    labels: ["Yes", "No"],
    datasets: [{
      data: [100,0],
      backgroundColor: CPbackgroundColor,
      hoverBackgroundColor: CPhoverBackgroundColor,
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
	  plugins: {
      labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
        render: 'percentage',

        // precision for percentage, default is 0
        precision: 0,

        // identifies whether or not labels of value 0 are displayed, default is false
        showZero: false,

        // font size, default is defaultFontSize
        fontSize: 16,

        // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
        fontColor: '#000',

        // font style, default is defaultFontStyle
        fontStyle: 'normal',

        // font family, default is defaultFontFamily
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // draw text shadows under labels, default is false
        textShadow: false,

        // text shadow intensity, default is 6
        shadowBlur: 6,

        // text shadow X offset, default is 3
        shadowOffsetX: -5,

        // text shadow Y offset, default is 3
        shadowOffsetY: 1,

        // text shadow color, default is 'rgba(0,0,0,0.3)'
        shadowColor: 'rgba(255,255,255,1)',

        // draw label in arc, default is false
        // bar chart ignores this
        arc: false,

        // position to draw label, available value is 'default', 'border' and 'outside'
        // bar chart ignores this
        // default is 'default'
        position: 'default',

        // draw label even it's overlap, default is true
        // bar chart ignores this
        overlap: true,

        // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
        showActualPercentages: true,

        // set images when `render` is 'image'
        images: [
          {
            src: 'image.png',
            width: 16,
            height: 16
          }
        ],

        // add padding when position is `outside`
        // default is 2
        outsidePadding: 8,

        // add margin of text when position is `outside` or `border`
        // default is 2
        textMargin: 4
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true,
	  position: 'bottom',
	  align: 'start'
    },
    cutoutPercentage: 0,
	
  },
});
var AIU = new Chart(aiuchart, {
  type: 'pie',
  data: {
    labels: ["Yes", "No"],
    datasets: [{
      data: [53,47],
      backgroundColor: CPbackgroundColor,
      hoverBackgroundColor: CPhoverBackgroundColor,
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
	  plugins: {
      labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
        render: 'percentage',

        // precision for percentage, default is 0
        precision: 0,

        // identifies whether or not labels of value 0 are displayed, default is false
        showZero: false,

        // font size, default is defaultFontSize
        fontSize: 16,

        // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
        fontColor: '#000',

        // font style, default is defaultFontStyle
        fontStyle: 'normal',

        // font family, default is defaultFontFamily
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // draw text shadows under labels, default is false
        textShadow: false,

        // text shadow intensity, default is 6
        shadowBlur: 6,

        // text shadow X offset, default is 3
        shadowOffsetX: -5,

        // text shadow Y offset, default is 3
        shadowOffsetY: 1,

        // text shadow color, default is 'rgba(0,0,0,0.3)'
        shadowColor: 'rgba(255,255,255,1)',

        // draw label in arc, default is false
        // bar chart ignores this
        arc: false,

        // position to draw label, available value is 'default', 'border' and 'outside'
        // bar chart ignores this
        // default is 'default'
        position: 'default',

        // draw label even it's overlap, default is true
        // bar chart ignores this
        overlap: true,

        // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
        showActualPercentages: true,

        // set images when `render` is 'image'
        images: [
          {
            src: 'image.png',
            width: 16,
            height: 16
          }
        ],

        // add padding when position is `outside`
        // default is 2
        outsidePadding: 8,

        // add margin of text when position is `outside` or `border`
        // default is 2
        textMargin: 4
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true,
	  position: 'bottom',
	  align: 'start'
    },
    cutoutPercentage: 0,
	
  },
});
var TCLNA = new Chart(tclnahart, {
  type: 'horizontalBar',
  data: {
    labels: ["Security", "Funding", "Access to the field", "Technical capacity", "Organisational capacity", "Partnerships", "Coordination", "Other"],
    datasets: [{
		label: "Constraints",
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#4e73df",
      data: [27, 24, 14, 10, 6, 5,4,0],
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
	  scales: {
        yAxes: [{
			stacked: true,
            display: true,
        }],
		xAxes: [{
			stacked: true,
			display: false,
		}]
    },
	
    plugins: {
     datalabels: {
        formatter: (value, ctx) => {
          return;
        },
        color: '#fff',
      }
},
	
	   legend: {
			display: false,
			position: 'bottom'
      },
	  "hover": {
                      "animationDuration": 0
                    },
                    "animation": {
                      "duration": 1,
                      "onComplete": function() {
                        var chartInstance = this.chart
                        ctx = chartInstance.ctx;
                        ctx.font = Chart.helpers.fontString(14, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                        ctx.fillStyle = "#000";
                        ctx.textAlign = 'end';
                        ctx.textBaseline = 'top';

                        this.data.datasets.forEach(function(dataset, i) {
                          var meta = chartInstance.controller.getDatasetMeta(i);
                          meta.data.forEach(function(bar, index) {
                                var data = dataset.data[index];
								if (data > 0) {
                                ctx.fillText((data), bar._model.x -20, bar._model.y - 5);
								}
								
                          });
                        });
                      }
                    },
  },
});
