// from data.js
var tableData = data;

var tableHead = d3.select("thead");

var tableDataKeys = Object.keys(tableData[0]);

var theadRow = tableHead.append('tr'); // Insert <tr> for <th>'s
tableDataKeys.forEach(function(key) {
	var theadCell = theadRow.append('th');
	theadCell.text(key);
});

var tableBody = d3.select("tbody");
tableData.forEach(function(sighting) {
	var tableBodyRow = tableBody.append('tr');

	Object.entries(sighting).forEach(function([key, value]) {
		var tableBodyCell = tableBodyRow.append('td');
		tableBodyCell.text(value);
	});
});


