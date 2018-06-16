
new Chart(document.getElementById("linechart"), {
  type: 'line',
  data: {
    labels: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
    datasets: [{ 
    
        label: "5K",
        borderColor: "#660000",
        fill: false,
		borderWidth: 1.5,
		lineTension: 0.3,
		hoverradius: 15,
		pointHitRadius: 8,
		pointRadius: 3,
		pointHoverBackgroundColor: "#660000",
		hoverborderwidth: 15,
		
		data: [0, 0, 0, 489, 953, 1060, 1121, 1431, 1306,1550,1557,1319,1084,688],
      }, {   
        label: "10k",
        borderColor: "#ff0000",
        fill: false,
		borderWidth: 1.5,
		pointHitRadius: 8,
		pointRadius: 3,
		lineTension: 0.3,
		pointHoverBackgroundColor: "#ff0000",		
		data: [2022, 2711, 3532, 3808, 4419, 4564, 4536, 3717, 3980, 3232, 3232, 2342, 1989, 1635],
      }, { 
        data: [2022, 2711, 3532, 4297, 5372, 5624, 5756, 5168, 5286, 4782, 4789, 3661, 3073, 2323],
        label: "Totaal",
		lineTension: 0.3,
		borderWidth: 1.5,
        borderColor: "green",
		hoverradius: 15,
		pointHitRadius: 8,
		pointHoverBackgroundColor: "green",
        fill: false
      }, { 
        data: [],
        label: "",
        borderColor: "",
        fill: false
      }, { 
        data: [],
        label: "",
        borderColor: "",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Deelnemers Stadsloop Gent',
	  fontSize: 20,
	  fontColor: "white",
	  fontFamily: "'Raleway','sans-serif'",
    },
	legend: {
		display: true,
		position: 'right',
		boxWidth: 4,
		labels: {
			fontFamily: "'Raleway','sans-serif'",
			fontColor: 'white',
			boxWidth: 30,
			fontSize: 18,
			}
			},
  }
});
