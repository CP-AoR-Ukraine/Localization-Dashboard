// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#3a3b45';
Chart.defaults.global.defaultFontSize = 14;
var CPbackgroundColor = ['#d7e039', '#95c651', '#86789c','#9fd5b5','#5a5a50']
var CPhoverBackgroundColor = ['#c3cb4a', '#87a663', '#7d758d', '#90af9f', '#595853']
var sagchart = document.getElementById("SAG");
var wcsamchart = document.getElementById("WCSAM");
var lnsnchart = document.getElementById("LNSN");

var SAG = new Chart(sagchart, {
  type: 'pie',
  data: {
    labels: ["# UN agencies (2 partners)", "# INGOs (4 partners)", "# NNGOs (7 partners)"],
    datasets: [{
      data: [2, 4, 7],
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
        showZero: true,

        // font size, default is defaultFontSize
        fontSize: 16,

        // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
        fontColor: '#fff',

        // font style, default is defaultFontStyle
        fontStyle: 'normal',

        // font family, default is defaultFontFamily
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // draw text shadows under labels, default is false
        textShadow: false,

        // text shadow intensity, default is 6
        shadowBlur: 10,

        // text shadow X offset, default is 3
        shadowOffsetX: -5,

        // text shadow Y offset, default is 3
        shadowOffsetY: 5,

        // text shadow color, default is 'rgba(0,0,0,0.3)'
        shadowColor: 'rgba(255,0,0,0.75)',

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
        outsidePadding: 4,

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
      display: false,
	  position: 'bottom',
	  align: 'start'
    },
    cutoutPercentage: 0,
	
  },
});
var WCSAM = new Chart(wcsamchart, {
  type: 'pie',
  data: {
    labels: [ "# INGOs (39 partners)", "# Goverment (7 partners)", "# NNGOs (160 partners)", "# UN agencies (3 partners)"],
    datasets: [{
      data: [39, 7, 160,3 ],
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
        showZero: true,

        // font size, default is defaultFontSize
        fontSize: 15,

        // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
        fontColor: '#000',

        // font style, default is defaultFontStyle
        fontStyle: 'normal',

        // font family, default is defaultFontFamily
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // draw text shadows under labels, default is false
        textShadow: true,

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
      display: false,
	  position: 'bottom',
	  align: 'start',
	  maxWidth: 10,
    },
    cutoutPercentage: 0,
	
  },
});
var LNSN = new Chart(lnsnchart, {
  type: 'horizontalBar',
  data: {
    labels: [" Regional / Sub-National", "National"],
    datasets: [{
		 label: "National",
      backgroundColor: "#95c651",
      hoverBackgroundColor: "#87a663",
      borderColor: "#95c651",
      data: [6,0],
    },{
      label: "International",
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#d7e039",
      data: [4,1],
	}
	],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
	  scales: {
        yAxes: [{
			barPercentage: 0.6,
			stacked: true,
            display: true,
        }],
		xAxes: [{
			stacked: true,
			display: false,
		}]
    },
	
    plugins: [],	
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
								if (data > 2) {
                                ctx.fillText((data*10)+"%", bar._model.x -25, bar._model.y - 5);
								}
								
								
                          });
                        });
                      }
                    },
  },
});
