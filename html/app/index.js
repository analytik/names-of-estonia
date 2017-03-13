let rows = [];
const $table = $('#table table');

function bla(from, to, men, women) {
  var x = 5;
}

function makeTable(csv) {
  let $tr = null;
  let $td = null;
  let tds = null;

  for (let i = 0; i < rows.length; i + 1) {
    $tr = $('tr');
    tds = rows[i].split(',');
    for (let j = 0; j < tds.length; j + 1) {
      $td = $('td');
      $td.html = tds[j];
      $tr.append($td);
    }

    $table.append($tr);
  }
}

function setUpData(csv) {
  rows = csv.split('\n');
}

$().ready(() => {
  $.get('./data.csv', setUpData);
});
