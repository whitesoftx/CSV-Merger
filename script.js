// Initialize an array to store the content of each uploaded file
let filesContent = [];

function handleFileSelect(event) {
  const files = event.target.files;

  for (const file of files) {
    // Use PapaParse to read the CSV file content
    Papa.parse(file, {
      complete: function (result) {
        filesContent.push(result.data);
        updateFileCountMessage(filesContent.length);
      },
      header: true,
    });
  }
}

function updateFileCountMessage(count) {
  const messageElement = document.getElementById("fileCountMessage");
  messageElement.textContent = `You have added '${count}' CSV files to be merged`;
}

var now = new Date();
var day = now.getDate();
var month = now.getMonth() + 1; // Months are zero-based
var year = now.getFullYear();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

// Format the date and time components to have leading zeros if needed
day = day < 10 ? "0" + day : day;
month = month < 10 ? "0" + month : month;
hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

var formattedDate =
  "merged_CSV_files_" +
  day +
  "_" +
  month +
  "_" +
  year +
  "_" +
  hours +
  "_" +
  minutes +
  "_" +
  seconds +
  ".csv";

function mergeFiles() {
  // Merge the content of all uploaded files
  const mergedContent = filesContent.flat();

  // Convert the merged content to CSV
  const mergedCSV = Papa.unparse(mergedContent);

  // Create a Blob containing the CSV data
  const blob = new Blob([mergedCSV], { type: "text/csv" });

  // Create a link element to trigger the download
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = formattedDate;

  // Append the link to the body and trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up: remove the link element
  document.body.removeChild(link);
}

// Attach the handleFileSelect function to the file input change event
const fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", handleFileSelect);

// Trigger the file input when the upload button is clicked
document
  .querySelector(".upload-btn-wrapper .btn")
  .addEventListener("click", function () {
    fileInput.click();
  });
