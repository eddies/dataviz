describe("lineChart", function() {
	describe("getHeader", function() {
		it("returns an array with each item a separate header item", function() {
			lineChart.rawData = "head 1,head 2,head 3\nitem 1,item 2, item3\nitem 4,item 5,item 6";
			var result = lineChart.getHeader();
			expect(result).toEqual(['head 1', 'head 2', 'head 3']);
		});
	});
});