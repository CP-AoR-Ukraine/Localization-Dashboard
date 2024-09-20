// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
var CPbackgroundColor = ['#d7e039', '#95c651', '#86789c','#9fd5b5','#5a5a50']
var CPhoverBackgroundColor = ['#c3cb4a', '#87a663', '#7d758d', '#90af9f', '#595853']

var ahrpschart = document.getElementById("AHRPS");
var flpchart = document.getElementById("FLP");
var ppdtachart = document.getElementById("PPDTA");
var FLP = new Chart(flpchart, {
  type: 'pie',
  data: {
    labels: ["Direct Donor to LNNGO", "Through intermediary", "No LNNGO"],
    datasets: [{
      data: [9,71,19],
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
var AHRPS = new Chart(ahrpschart, {
  type: 'pie',
  data: {
    labels: ["UN agencies",  "INGO", "RedCross", "NNGO"],
    datasets: [{
      data: [11,79,1,144 ],
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
var PPDTA = new Chart(ppdtachart, {
  type: 'bar',
  data: {
    labels: ["Access to donors", "Discussing Problems", "Respecting Opinions", "Accounting for risks", "Capacity Development", "Project Input", "Would Recommend"],
    datasets: [{
      label: "International",
      backgroundColor: "#d7e039",
      hoverBackgroundColor: "#c3cb4a",
      borderColor: "#d7e039",
      data: [0,4.6,4.7,4.4,4.5,4.4,4.6],
    },{
		label: "National",
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
