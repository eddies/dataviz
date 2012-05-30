describe("lineChart", function() {
	beforeEach(function() {
		lineChart.rawData = "head 1,head 2,head 3\nitem 1,item 2,item 3\nitem 4,item 5,item 6";
	});
	
	describe("getHeader", function() {
		it("returns an array with each item a separate header item", function() {
			var result = lineChart.getHeader();
			expect(result).toEqual(['head 1', 'head 2', 'head 3']);
		});
	});
	
	describe("getValues", function() {
		it("returns an array of arrays representing the values", function() {
			var result = lineChart.getValues();
			expect(result).toEqual([['item 1', 'item 2', 'item 3'], ['item 4', 'item 5', 'item 6']]);
		});
	});
});