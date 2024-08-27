// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
var CPbackgroundColor = ['#d7e039', '#95c651', '#86789c','#9fd5b5','#5a5a50']
var CPhoverBackgroundColor = ['#c3cb4a', '#87a663', '#7d758d', '#90af9f', '#595853']

var idaachart = document.getElementById("IDAA");
var pdaachart = document.getElementById("PDAA");
var lnashpchart = document.getElementById("LNASHP");
var ipgchart = document.getElementById("IPG");
var ppdtachart = document.getElementById("PPDTA");
var flpchart = document.getElementById("FLP");
var IDAA = new Chart(idaachart, {
  type: 'bar',
  data: {
    labels: ["Вплив місцевих суб'єктів", "Вплив міжнародних суб'єктів"],
    datasets: [{
      label: "Відповідно до: Всі",
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#d7e039",
      data: [3.6,4],
    },{
		label: "Відповідно до: Місцева або національна організація",
      backgroundColor: "#95c651 ",
      hoverBackgroundColor: "#87a663",
      borderColor: "#95c651",
      data: [3.7,4],
	},{
		label: "Відповідно до: Міжнародна громадська організація",
      backgroundColor: "#86789c ",
      hoverBackgroundColor: "#7d758d",
      borderColor: "#86789c",
      data: [3.5,4],
	}
	],
  },
  options: {

	  scales: {
        yAxes: [{
            display: false,
            ticks: {
                suggestedMax: 8,    
                beginAtZero: true  
            }
        }],
		xAxes: {
		display: false,
		}
    },
	
    plugins: {
       labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
        render: 'value',

        // precision for percentage, default is 0
        precision: 0,

        // identifies whether or not labels of value 0 are displayed, default is false
        showZero: true,

        // font size, default is defaultFontSize
        fontSize: 12,

        // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
        fontColor: '#000',

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


        // position to draw label, available value is 'default', 'border' and 'outside'
        // bar chart ignores this
        // default is 'default'
        position: 'default',


        // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
        showActualPercentages: false,

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
        outsidePadding: 2,

        // add margin of text when position is `outside` or `border`
        // default is 2
        textMargin: 4
      }
    },
	maintainAspectRatio: false,
	   legend: {
			display: true,
			position: 'bottom'
      }
  },
});
var PDAA = new Chart(pdaachart, {
  type: 'bar',
  data: {
    labels: ["Місцеві суб'єкти", "Міжнародні суб'єкти"],
    datasets: [{
      label: "Відповідно до: Всі",
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#d7e039",
      data: [3.4,4],
    },{
		label: "Відповідно до: Місцева або національна організація",
      backgroundColor: "#95c651 ",
      hoverBackgroundColor: "#87a663",
      borderColor: "#95c651",
      data: [3.6,4],
	},{
		label: "Відповідно до: Міжнародна громадська організація",
      backgroundColor: "#86789c ",
      hoverBackgroundColor: "#7d758d",
      borderColor: "#86789c",
      data: [3.1,4],
	}
	],
  },
  options: {
	  scales: {
        yAxes: [{
            display: false,
            ticks: {
                suggestedMax: 8,    
                beginAtZero: true  
            }
        }],
		xAxes: {
		display: false,
		}
    },
	
    plugins: {
       labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
        render: 'value',

        // precision for percentage, default is 0
        precision: 0,

        // identifies whether or not labels of value 0 are displayed, default is false
        showZero: true,

        // font size, default is defaultFontSize
        fontSize: 12,

        // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
        fontColor: '#000',

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


        // position to draw label, available value is 'default', 'border' and 'outside'
        // bar chart ignores this
        // default is 'default'
        position: 'default',


        // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
        showActualPercentages: false,

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
        outsidePadding: 2,

        // add margin of text when position is `outside` or `border`
        // default is 2
        textMargin: 4
      }
    },
	maintainAspectRatio: false,
	   legend: {
			display: true,
			position: 'bottom'
      }
  },
});

var LNASHP = new Chart(lnashpchart, {
  type: 'bar',
  data: {
    labels: ["Відповідно до: Всі", "Відповідно до: Місцева або національна організація", "Відповідно до: Міжнародна громадська організація"],
    datasets: [{
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#d7e039",
      data: [3.6, 3.6, 3.4],
    }
	],
  },
  options: {
	  scales: {
        yAxes: [{
            display: false,
            ticks: {
                suggestedMax: 5,    
                beginAtZero: true  
            }
        }],
		xAxes: {
		display: false,
		}
    },
	
    plugins: {
       labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
        render: 'value',

        // precision for percentage, default is 0
        precision: 0,

        // identifies whether or not labels of value 0 are displayed, default is false
        showZero: true,

        // font size, default is defaultFontSize
        fontSize: 12,

        // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
        fontColor: '#000',

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


        // position to draw label, available value is 'default', 'border' and 'outside'
        // bar chart ignores this
        // default is 'default'
        position: 'default',


        // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
        showActualPercentages: false,

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
        outsidePadding: 2,

        // add margin of text when position is `outside` or `border`
        // default is 2
        textMargin: 4
      }
    },
	maintainAspectRatio: false,
	   legend: {
			display: false,
			position: 'bottom'
      }
  },
});


var IPG = new Chart(ipgchart, {
  type: 'bar',
  data: {
    labels: ["Вплив місцевих суб'єктів", "Вплив міжнародних суб'єктів", "Участь місцевих суб'єктів", "Участь міжнародних суб'єктів"],
    datasets: [{
	  label: 'Вплив та участь',
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#d7e039",
	  //borderWidth:2,
      data: [3.6, 4, 3.4, 4],
    },
	{
	  label: 'Розрив',
	  backgroundColor: "rgba(192,189,26, 0.01)",
      hoverBackgroundColor: "rgba(192,189,26, 0.01)",
      borderColor: "red",
	  borderWidth:3,
      data: [0.4, "", 0.6, ""],
	}
	],
  },
  options: {
	  scales: {
        yAxes: [{
			stacked: true,
            display: false,
            ticks: {
                suggestedMax: 8,    
                beginAtZero: false  
            }
        }],
		xAxes: [{
			stacked: true,
			display: true,
		}]
    },
	
    plugins: {
       labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
        render: 'value',

        // precision for percentage, default is 0
        precision: 0,

        // identifies whether or not labels of value 0 are displayed, default is false
        showZero: false,

        // font size, default is defaultFontSize
        fontSize: 12,

        // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
        fontColor: '#000',

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


        // position to draw label, available value is 'default', 'border' and 'outside'
        // bar chart ignores this
        // default is 'default'
        position: 'default',


        // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
        showActualPercentages: false,

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
        outsidePadding: 2,

        // add margin of text when position is `outside` or `border`
        // default is 2
        textMargin: 4
      }
    },
	maintainAspectRatio: false,
	   legend: {
			display: true,
			position: 'bottom'
      }
  },
});
var PPDTA = new Chart(ppdtachart, {
  type: 'bar',
  data: {
    labels: ["Доступ до донорів", "Обговорення проблем", "Повага до думок", "Врахування ризиків", "Розвиток спроможності", "Вхідні дані проекту", "Ми б рекомендували"],
    datasets: [{
      label: "Міжнародні",
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#d7e039",
      data: [0,4.6,4.7,4.4,4.5,4.4,4.6],
    },{
		label: "Національні",
      backgroundColor: "#95c651 ",
      hoverBackgroundColor: "#87a663",
      borderColor: "#95c651",
      data: [3.6,4.2,4.4,4.1,4,4.1,4.3],
	}],
  },
  options: {
	  scales: {
        yAxes: [{
            display: false,
            ticks: {
                suggestedMax: 8,    
                beginAtZero: true  
            }
        }],
		xAxes: {
		display: false,
		}
    },
	
    plugins: {
       labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
        render: 'value',

        // precision for percentage, default is 0
        precision: 0,

        // identifies whether or not labels of value 0 are displayed, default is false
        showZero: true,

        // font size, default is defaultFontSize
        fontSize: 12,

        // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
        fontColor: '#000',

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


        // position to draw label, available value is 'default', 'border' and 'outside'
        // bar chart ignores this
        // default is 'default'
        position: 'default',


        // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
        showActualPercentages: false,

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
        outsidePadding: 2,

        // add margin of text when position is `outside` or `border`
        // default is 2
        textMargin: 4
      }
    },
	maintainAspectRatio: false,
	   legend: {
			display: true,
			position: 'bottom'
      }
  },
});

var FLP = new Chart(flpchart, {
  type: 'bar',
  data: {
	 labels: ["Відсоток"],
    datasets: [{
	  label: 'Прямий донор до ЛНУО',
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#d7e039",
	  //borderWidth:2,
      data: [9],
    },
	{
	  label: 'Через посередника',
	  backgroundColor: "95c651",
      hoverBackgroundColor: "#87a663",
      data: [71],
	},
	{
	  label: 'Нема жодної ЛНУО',
	  backgroundColor: "#86789c",
      hoverBackgroundColor: "#7d758d",
      data: [19],
	}
	],
  },
  options: {
	  scales: {
        yAxes: [{
			stacked: true,
            display: false,
            ticks: {
                suggestedMax: 120,    
                beginAtZero: false  
            }
        }],
		xAxes: [{
			stacked: true,
			display: true,
		}]
    },
	
    plugins: {
       labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
        render: 'percentage',

        // precision for percentage, default is 0
        precision: 0,

        // identifies whether or not labels of value 0 are displayed, default is false
        showZero: false,

        // font size, default is defaultFontSize
        fontSize: 12,

        // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
        fontColor: '#000',

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


        // position to draw label, available value is 'default', 'border' and 'outside'
        // bar chart ignores this
        // default is 'default'
        position: 'default',


        // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
        showActualPercentages: false,

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
        outsidePadding: 2,

        // add margin of text when position is `outside` or `border`
        // default is 2
        textMargin: 0
      }
    },
	maintainAspectRatio: false,
	   legend: {
			display: true,
			position: 'bottom'
      }
  },
});
