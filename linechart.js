lineChart = {
	rawData: "Beer,2011-11-29,2011-12-15,2011-12-29,2012-01-12,2012-01-17 (Delivery),2012-02-02,2012-03-01,2012-03-07 (Delivery),2012-03-16,2012-03-21 (after BBQ),2012-03-26 (Delivery),2012-03-27,2012-05-25 (before BBQ),2012-05-28 (after BBQ)\n" +
	"Hop Devil IPA,24,12,8,1,24,12,2,24,19,12,0,8,0,0\n" +
	"Stone Levitation Ale,24,8,2,0,24,19,7,0,6,0,0,24,11,8\n" +
	"Prima Pils,24,19,17,15,0,10,0,24,24,18,0,18,9,8\n" +
	"Golden Monkey,0,0,0,0,24,11,4,24,24,22,0,18,2,0\n" +
	"Storm King Stout,0,0,0,0,0,0,0,0,0,0,24,23,13,7\n" +
	"Gold Pale Ale,0,0,0,0,24,20,6,0,5,2,0,1,0,0\n" +
	"Hop Ottin IPA,24,18,17,15,0,12,6,0,3,3,0,2,0,0\n" +
	"Little Creatures Pale Ale,0,0,0,0,0,0,0,0,0,0,24,24,14,0\n" +
	"Little Creatures Bright Ale,0,0,0,0,0,0,0,0,0,0,24,24,24,21\n" +
	"Hoegaarden,24,23,19,16,0,11,0,24,22,18,0,18,4,0\n" +
	"Heineken (can),24,24,24,24,0,22,10,0,11,4,0,4,1,1\n" +
	"Heineken (bottle),0,0,0,0,0,0,0,0,0,0,24,24,24,21\n" +
	"Tiger (bottle),24,21,21,20,0,14,0,24,18,17,0,17,13,11\n" +
	"Asahi,24,20,19,18,0,11,0,24,23,6,24,35,10,6\n" +
	"Sapporo,24,23,18,16,0,0,0,24,22,6,24,29,2,0\n" +
	"Mom Hefeweizen 650ml,14,11,11,11,0,6,6,0,6,6,0,6,5,4\n" +
	"Arrogant Bastard 650ml,4,4,4,4,0,3,1,0,1,0,0,0,0,0\n" +
	"Oaked Arrogant Bastard,0,0,0,0,0,0,0,0,0,0,24,22,16,10\n" +
	"Chimay Red,0,0,0,0,0,0,0,12,3,2,0,0,0,0\n" +
	"Duvel,0,0,0,0,0,0,0,12,5,2,0,0,0,0\n" +
	"Erdinger Dunkel,1,1,1,1,0,1,1,0,1,0,0,0,0,0\n" +
	"Lychee,0,0,0,0,0,0,0,0,0,0,24,24,23,15\n" +
	"Honeydew Melon,0,4,4,3,0,2,2,0,2,0,0,0,0,0\n" +
	"Pipsqueak Cider,0,4,3,0,0,0,0,0,0,0,0,0,0,0\n" +
	"Mocha Porter,6,4,4,3,0,1,0,0,0,0,0,0,0,0\n" +
	"Tiger (can),0,9,8,8,0,4,0,0,0,0,0,0,16,14\n" +
	"Carlsberg (can),0,0,0,0,0,0,0,0,0,0,0,0,14,12",

	init: function() {
		google.load("visualization", "1", {packages:["corechart"]});
		google.setOnLoadCallback(lineChart.drawChart);
	},
	
	getHeader: function() {
		return lineChart.rawData.split('\n')[0].split(',')
	},
	
	getValues: function() {
		var values = [];
		var valueStrings = lineChart.rawData.split('\n').slice(1);
		for(var i = 0; i < valueStrings.length; i++) {
			values.push(valueStrings[i].split(','));
		}
		return values;
	},
	
	drawChart: function() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    var options = {
      title: 'Company Performance'
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
	
}


