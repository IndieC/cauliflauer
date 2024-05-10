// script.js

// Sample data


const labels = ['Reading', 'Writing', 'Exercise'];
let data;

// Function to parse CSV data using PapaParse
function parseCSV(csvData) {
    const parsedData = Papa.parse(csvData, {
      header: true // Treat the first row as headers
    }).data;
  
    return parsedData;
  }


  // Function to load and parse CSV data
function loadAndParseCSV(csvFile) {
    return fetch(csvFile)
      .then(response => response.text())
      .then(csvData => {
        // Parse CSV data
        const parsedData = parseCSV(csvData);
        // console.log(parsedData); // Display parsed data
        // Optionally, you can further process or display the parsed data here
      return parsedData
      })
      .catch(error => console.error('Error loading CSV file:', error));
      
  }
  
  function sumValuesByHeader(data, header) {
    let sum = 0;
    data.forEach(row => {
      // Skip rows with empty values for the header
      if (row.hasOwnProperty(header) && row[header] !== "") {
        sum += parseFloat(row[header]);
        console.log(row, header)
      }
    });
    return sum;
  }

let timespent = []
let dataheaders = []
  // Example usage: Load and parse CSV file
  data = loadAndParseCSV('Practicezeit.csv')

    .then(data => {
      console.log (data);
     dataheaders = Object.keys(data[0])
     dataheaders.shift() 
     console.log(dataheaders)
    dataheaders.forEach(cat => {
        const Total = sumValuesByHeader(data, cat);
        console.log("Total hours spent on " + cat, Total);
        timespent.push(Total)
        console.log(timespent)
      
      });
     // console.log((Object.keys(data[0])).shift)
      makechart(dataheaders, timespent)
    } )
  

    
    // Example: Sum all values under the header "Osmose"


function makechart(interndataheaders, interntimespent) {
    const ctx = document.getElementById('practiceHoursChart').getContext('2d');
    const practiceHoursChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: interndataheaders,
        datasets: [{
          data: interntimespent,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
          ]
        }]
      },
      options: {
        responsive: false // Set to true for responsive chart
      }
    });
}
