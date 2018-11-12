// Данные, используемые в таблице

const data = [
  {
    Name: 'Melody Franco',
    Position: 'iOS Developer',
    Office: 'Paris',
    Age: 26,
    'Start date': '2013/08/11',
    Salary: '938,509',
  },

  {
    Name: 'Emma Rowe',
    Position: 'Middle Java Developer',
    Office: 'Moscow',
    Age: 33,
    'Start date': '2013/03/03',
    Salary: '262,000',
  },

  {
    Name: 'Allison Moss',
    Position: 'Junior JavaScript Developer',
    Office: 'Moscow',
    Age: 25,
    'Start date': '2018/06/01',
    Salary: '689,250',
  },

  {
    Name: 'Haley Kennedy',
    Position: 'Junior Desingner',
    Office: 'London',
    Age: 23,
    'Start date': '2017/12/18',
    Salary: '213,500',
  },

  {
    Name: 'Liyana Grainger',
    Position: 'Web Designer',
    Office: 'New York',
    Age: 48,
    'Start date': '2012/12/02',
    Salary: '162,000',
  },

  {
    Name: 'Cairon Hull',
    Position: 'Marketing Designer',
    Office: 'London',
    Age: 66,
    'Start date': '2018/11/27',
    Salary: '248,540',
  },

  {
    Name: 'Grover Tran',
    Position: 'iOS Developer',
    Office: 'Paris',
    Age: 41,
    'Start date': '2017/12/13',
    Salary: '873,000',
  },

  {
    Name: 'Daisy Frazier',
    Position: 'Team Lead',
    Office: 'Moscow',
    Age: 35,
    'Start date': '2014/09/26',
    Salary: '226,000',
  },

  {
    Name: 'Stacy Charles',
    Position: 'JavaScript Developer',
    Office: 'San Francisco',
    Age: 26,
    'Start date': '2015/11/06',
    Salary: '527,780',
  },

  {
    Name: 'Varun Browne',
    Position: 'HR',
    Office: 'Berlin',
    Age: 55,
    'Start date': '2012/06/01',
    Salary: '625,030',
  },
];

const table = document.getElementById('table');

// Функция построения таблицы

const testTable = people => {
  for (let i = 0; i < people.length; ++i) {
    let person = people[i];
    let row = document.createElement('tr');

    let properties = [
      'Name',
      'Position',
      'Office',
      'Age',
      'Start date',
      'Salary',
    ];

    for (let j = 0; j < properties.length; j++) {
      let cell = document.createElement('td');
      cell.innerHTML = person[properties[j]];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
};

testTable(data);

// Функция поиска
const search = () => {
  let found;
  let input = document.getElementById('search');
  let filter = input.value.toUpperCase();
  let tr = table.getElementsByTagName('tr');
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName('td');
    for (let j = 0; j < td.length; j++) {
      if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
        found = true;
      }
    }
    if (found) {
      tr[i].style.display = '';
      found = false;
    } else {
      tr[i].style.display = 'none';
    }
  }
};

//Функция сортировки по столбцами

const sort = n => {
  let rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  switching = true;
  dir = 'asc';

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName('td')[n];
      y = rows[i + 1].getElementsByTagName('td')[n];

      if (dir == 'asc') {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == 'desc') {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      switchcount++;
    } else {
      if (switchcount == 0 && dir == 'asc') {
        dir = 'desc';
        switching = true;
      }
    }
  }
};
