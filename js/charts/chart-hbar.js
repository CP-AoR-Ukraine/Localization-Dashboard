// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


var lnsnchart = document.getElementById("LNSN");
var tcsachart = document.getElementById("TCSA");
var dapcdchart = document.getElementById("DAPCD");
var hstpchart = document.getElementById("HSTP");
var aiuchart = document.getElementById("AIU");
var tclnahart = document.getElementById("TCLNA");
var LNSN = new Chart(lnsnchart, {
  type: 'horizontalBar',
  data: {
    labels: ["Sub-National", "National"],
    datasets: [{
		 label: "National",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [4,0],
    },{
      label: "International",
      backgroundColor: "#dfba4e",
      hoverBackgroundColor: "#be9622",
      borderColor: "#dfba4e",
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
      }
  },
});
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
			position: 'bottom'
      }
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
			position: 'bottom'
      }
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
      }
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
      }
  },
});
var TCLNA = new Chart(tclnahart, {
  type: 'horizontalBar',
  data: {
    labels: ["Other", "Partnerships", "Coordination", "Security", "Organisational capacity", "Technical capacity", "Access to the field", "Funding"],
    datasets: [{
		label: "Constraints",
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#4e73df",
      data: [0,5,4,27,6,10,14,24],
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
      }
  },
});
