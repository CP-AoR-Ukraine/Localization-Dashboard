// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';



var tcsachart = document.getElementById("TCSA");
var dapcdchart = document.getElementById("DAPCD");
var hstpchart = document.getElementById("HSTP");
var aiuchart = document.getElementById("AIU");
var tclnahart = document.getElementById("TCLNA");


var TCSA = new Chart(tcsachart, {
  type: 'horizontalBar',
  data: {
    labels: ["Percentage"],
    datasets: [{
	  label: ["General Programatic"],
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#4e73df",
      data: [47],
    },{
		label: ["Organisational or Operational"],
      backgroundColor: "#95c651",
      hoverBackgroundColor: "#87a663",
      borderColor: "#dfba4e",
      data: [0],
	},{
		label: ["Technical Child Protection"],
      backgroundColor: "#86789c",
      hoverBackgroundColor: "#7d758d",
      borderColor: "#dfba4e",
      data: [53],
	}
	],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
	  scales: {
        yAxes: [{
			barPercentage: 0.2,
			stacked: true,
            display: false,
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
			display: true,
	  position: 'bottom',
	  align: 'start'
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
                                ctx.fillText((data) + "%", bar._model.x -40, bar._model.y - 5);
								}
								
                          });
                        });
                      }
                    },
  },
});
var DAPCD = new Chart(dapcdchart, {
  type: 'horizontalBar',
  data: {
    labels: ["Percentage"],
    datasets: [{
	  label: ["# of Intl Actors Delivering"],
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#4e73df",
      data: [84],
    },{
		label: ["# of Intl Actors Not Delivering"],
      backgroundColor: "#95c651",
      hoverBackgroundColor: "#87a663",
      borderColor: "#dfba4e",
      data: [16],
	}],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
	  scales: {
        yAxes: [{
			barPercentage: 0.2,
			stacked: true,
            display: false,
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
			display: true,
	  position: 'bottom',
	  align: 'start'
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
                                ctx.fillText((data) + "%", bar._model.x -5, bar._model.y - 5);
								}
								
                          });
                        });
                      }
                    },
  },
});
var HSTP = new Chart(hstpchart, {
  type: 'horizontalBar',
  data: {
    labels: ["Percentage"],
    datasets: [{
	  label: ["Yes"],
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#4e73df",
      data: [100],
    },{
		label: ["No"],
      backgroundColor: "#95c651",
      hoverBackgroundColor: "#87a663",
      borderColor: "#dfba4e",
      data: [0],
	}],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
	  scales: {
        yAxes: [{
			barPercentage: 0.2,
			stacked: true,
            display: false,
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
			display: true,
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
                                ctx.fillText((data) + "%", bar._model.x -100, bar._model.y - 5);
								}
								
                          });
                        });
                      }
                    },
  },
});
var AIU = new Chart(aiuchart, {
  type: 'horizontalBar',
  data: {
    labels: ["Percentage"],
    datasets: [{
	  label: ["Yes"],
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#4e73df",
      data: [53],
    },{
		label: ["No"],
      backgroundColor: "#95c651",
      hoverBackgroundColor: "#87a663",
      borderColor: "#dfba4e",
      data: [47],
	}],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
	  scales: {
        yAxes: [{
			barPercentage: 0.2,
			stacked: true,
            display: false,
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
			display: true,
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
                                ctx.fillText((data) + "%", bar._model.x -20, bar._model.y - 5);
								}
								
                          });
                        });
                      }
                    },
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
