// script.js

// Sample data


const labels = ['Reading', 'Writing', 'Exercise'];
const data = [10, 8, 5];

// Function to parse CSV data using PapaParse
function parseCSV(csvData) {
    const parsedData = Papa.parse(csvData, {
      header: true // Treat the first row as headers
    }).data;
  
    return parsedData;
  }

  // Function to load and parse CSV data
function loadAndParseCSV(csvFile) {
    fetch(csvFile)
      .then(response => response.text())
      .then(csvData => {
        // Parse CSV data
        const parsedData = parseCSV(csvData);
        console.log(parsedData); // Display parsed data
        // Optionally, you can further process or display the parsed data here
      })
      .catch(error => console.error('Error loading CSV file:', error));
  }
  
  // Example usage: Load and parse CSV file
  loadAndParseCSV('Practicezeit.csv'); 

  console.log (parsedData)
  


  
const ctx = document.getElementById('practiceHoursChart').getContext('2d');
const practiceHoursChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [{
      data: data,
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