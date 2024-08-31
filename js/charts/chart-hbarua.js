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
    labels: ["Регіональне", "Національнe"],
    datasets: [{
		 label: "Національні",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [4,0],
    },{
      label: "Міжнародні",
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
    labels: ["Відсоток"],
    datasets: [{
	  label: ["Загальнопрограмні"],
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#4e73df",
      data: [47],
    },{
		label: ["Організаційні або операційні"],
      backgroundColor: "#95c651",
      hoverBackgroundColor: "#87a663",
      borderColor: "#dfba4e",
      data: [0],
	},{
		label: ["Технічний захист дітей"],
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
      }
  },
});
var DAPCD = new Chart(dapcdchart, {
  type: 'horizontalBar',
  data: {
    labels: ["Відсоток"],
    datasets: [{
	  label: ["# Кількість міжнародних суб'єктів, що надають допомогу"],
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#4e73df",
      data: [84],
    },{
		label: ["# Кількість міжнародних суб'єктів, що не виконали зобов'язання"],
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
    labels: ["Відсоток"],
    datasets: [{
	  label: ["Так"],
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#4e73df",
      data: [100],
    },{
		label: ["Ні"],
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
	  position: 'bottom',
	  align: 'start'
      }
  },
});
var AIU = new Chart(aiuchart, {
  type: 'horizontalBar',
  data: {
    labels: ["Відсоток"],
    datasets: [{
	  label: ["Так"],
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#4e73df",
      data: [53],
    },{
		label: ["Ні"],
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
    labels: ["Інше", "Партнерство", "Координація", "Безпека", "Організаційна спроможність", "Технічна спроможність", "Доступ до місця проведення робіт", "Фінансування"],
    datasets: [{
		label: "Обмеження",
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
