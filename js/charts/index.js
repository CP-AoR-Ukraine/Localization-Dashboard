// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
var CPbackgroundColor = ['#d7e039', '#95c651', '#86789c','#9fd5b5','#5a5a50','#aea4bc']
var CPhoverBackgroundColor = ['#c3cb4a', '#87a663', '#7d758d', '#90af9f', '#8e8b82','#c6bfd1']


var indchart = document.getElementById("INDEX");

var INDEX = new Chart(indchart, {
  type: 'doughnut',
  data: {
    labels: ["Governance and Decision Making", "Influence", "Participation", "Partnerships", "Funding", "Capacity"],
    datasets: [{
      data: [25,25,25,25,25,25],
      backgroundColor: CPbackgroundColor,
      hoverBackgroundColor: CPhoverBackgroundColor,
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
	  plugins: {
      labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
        render: 'label',

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
        position: 'border',

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
        outsidePadding: 12,

        // add margin of text when position is `outside` or `border`
        // default is 2
        textMargin: 4
      }
    },
    maintainAspectRatio: false,
    tooltips: {
		enabled: false
    },
    legend: {
      display: false
    },
    cutoutPercentage: 50,
	responsive: true,
	maintainAspectRatio: false,
	onClick: (event, elements, chart) => {
      if (elements[0]) {            
         switch (elements[0]._view.label){
			case "Governance and Decision Making":
			window.location.href="governance.html";
			break;
			case "Influence":
			window.location.href="influence.html";
			break;
			case "Capacity":
			window.location.href="capacity.html";
			break;
			case "Funding":
			window.location.href="partnerships.html";
			break;
			case "Partnerships":
			window.location.href="partnerships.html";
			break;
			case "Participation":
			window.location.href="influence.html";
			break;
			default:
			console.log("Error")
		 }
      }
    }
  },
});
