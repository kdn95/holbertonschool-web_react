interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create 2 students variables called student1 and student2 of Student interface
let student1: Student = {
  firstName: "Khang",
  lastName: "Nguyen",
  age: 92,
  location: "Phuket"
};

let student2: Student = {
  firstName: "Sandra",
  lastName: "Oh",
  age: 53,
  location: "Toronto"
};

// store them into an array named studentsList
let studentList: Student[] = [student1, student2];

// Create a table
let table = document.createElement('table');

// Apply basic CSS styling
const style = document.createElement('style');
style.innerHTML = `
  table {
    width: 50%;
    margin: 20px auto;
    border-collapse: collapse;
    text-align: left;
  }
  th, td {
    padding: 10px;
    border: 1px solid #ccc;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  th {
    background-color: #4CAF50;
    color: white;
  }
`;
document.head.appendChild(style);

// Create table headers
const headers = ['First Name', 'Location'];
const headerRow = document.createElement('tr');
headers.forEach(headerText => {
  const header = document.createElement('th');
  header.textContent = headerText;
  headerRow.appendChild(header);
});
table.appendChild(headerRow);

// Iterate over studentList to create rows for each student
studentList.forEach(student => {
  const row = document.createElement('tr');

  // First Name cell
  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  row.appendChild(nameCell);

  // Location cell
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  // Add the row to the table
  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
