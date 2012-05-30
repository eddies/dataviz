describe("lineChart", function() {
	beforeEach(function() {
		lineChart.rawData = "string,value 1,value 2\nitem 1,3,4\nitem 2,55,66";
	});
	
	describe("getHeader", function() {
		it("returns an array with each item a separate header item", function() {
			var result = lineChart.getHeader();
			expect(result).toEqual(['string', 'value 1', 'value 2']);
		});
	});
	
	describe("getValues", function() {
		it("returns an array of arrays representing the values", function() {
			var result = lineChart.getValues();
			expect(result).toEqual([['item 1', 3, 4], ['item 2', 55, 66]]);
		});
	});
});