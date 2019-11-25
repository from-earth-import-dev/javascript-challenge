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

var columnInt = 0

function filterTable() {
  console.log('function called')
  console.log(`Arg attached: ${arguments[0]}`)
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("sightingTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[columnInt];
    console.log(td);
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

// var dropdownSelection = d3.select('.dropSelector').on("change", x => console.log(x));
// d3.select("#dropSelector").on("change", function(d, i){
//         console.log(d3.select(this));
//       });

var dropdown = d3.select('#dropSelector');

function handleChange(event) {
  console.log('change!');
  var dropdownText = d3.event.target.value;
  if (dropdownText === 'city') {
    columnInt = 1
    filterTable();
  }
  else if (dropdownText === 'state') {
    columnInt = 2;
    filterTable();
  }
  else if (dropdownText === 'country') {
    columnInt = 3
    filterTable();
  }
  else if (dropdownText === 'shape') {
    console.log('shape filter');
    columnInt = 4
    filterTable();
  }
  else if (dropdownText === 'durationMinutes') {
    columnInt = 5
    filterTable();
  }
  else if (dropdownText === 'comments') {
    columnInt = 6
    filterTable();
  }
  else {
    columnInt = 0;
    filterTable();
  }
};

dropdown.on("change", handleChange);



// filterTable();