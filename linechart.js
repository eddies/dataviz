lineChart = {
	rawData: "Beer,Hop Devil IPA,Stone Levitation Ale,Prima Pils,Golden Monkey,Storm King Stout,Gold Pale Ale,Hop Ottin IPA,Little Creatures Pale Ale,Little Creatures Bright Ale,Hoegaarden,Heineken (can),Heineken (bottle),Tiger (bottle),Asahi,Sapporo,Mom Hefeweizen 650ml,Arrogant Bastard 650ml,Oaked Arrogant Bastard,Chimay Red,Duvel,Erdinger Dunkel,Lychee,Honeydew Melon,Pipsqueak Cider,Mocha Porter,Tiger (can),Carlsberg (can)\n" +"11/29/11,24,24,24,0,0,0,24,0,0,24,24,0,24,24,24,14,4,0,0,0,1,0,0,0,6,0,0\n" +"12/15/11,12,8,19,0,0,0,18,0,0,23,24,0,21,20,23,11,4,0,0,0,1,0,4,4,4,9,0\n" +"12/29/11,8,2,17,0,0,0,17,0,0,19,24,0,21,19,18,11,4,0,0,0,1,0,4,3,4,8,0\n" +"1/12/12,1,0,15,0,0,0,15,0,0,16,24,0,20,18,16,11,4,0,0,0,1,0,3,0,3,8,0\n" +
	"2/2/12,12,19,10,11,0,20,12,0,0,11,22,0,14,11,0,6,3,0,0,0,1,0,2,0,1,4,0\n" +
	"3/1/12,2,7,0,4,0,6,6,0,0,0,10,0,0,0,0,6,1,0,0,0,1,0,2,0,0,0,0\n" +
	"3/16/12,19,6,24,24,0,5,3,0,0,22,11,0,18,23,22,6,1,0,3,5,1,0,2,0,0,0,0\n" +
	"2012-03-21 (after BBQ),12,0,18,22,0,2,3,0,0,18,4,0,17,6,6,6,0,0,2,2,0,0,0,0,0,0,0\n" +
	"3/27/12,8,24,18,18,23,1,2,24,24,18,4,24,17,35,29,6,0,22,0,0,0,24,0,0,0,0,0\n" +
	"2012-05-25 (before BBQ),0,11,9,2,13,0,0,14,24,4,1,24,13,10,2,5,0,16,0,0,0,23,0,0,0,16,14\n" +
	"2012-05-28 (after BBQ),0,8,8,0,7,0,0,0,21,0,1,21,11,6,0,4,0,10,0,0,0,15,0,0,0,14,12",
	
	limit: 20,
	
	init: function() {
		google.load("visualization", "1", {packages:["corechart"]});
		google.setOnLoadCallback(lineChart.drawChart);
	},
	
	getHeader: function() {
		return lineChart.rawData.split('\n')[0].split(',').slice(0,lineChart.limit);
	},
	
	getValues: function() {
		var values = [];
		var valueStrings = lineChart.rawData.split('\n').slice(1);
		for(var i = 0; i < valueStrings.length; i++) {
			var icecream = valueStrings[i].split(',').slice(0,lineChart.limit);
			for(var j = 1; j < icecream.length; j++) {
				icecream[j] = parseInt(icecream[j]);
			}
			values.push(icecream);
		}
		return values;
	},
	
	drawChart: function() {
    var data = google.visualization.arrayToDataTable([
      lineChart.getHeader()
    ].concat(lineChart.getValues()));

    var options = {
      title: 'Beer Amount for Date'
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
	
}


