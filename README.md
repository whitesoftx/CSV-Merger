# CSV Merger App

This web application allows users to merge multiple CSV files into a single CSV file seamlessly. It is built using HTML, JavaScript, and utilizes the PapaParse library for CSV parsing.

## Usage

1. **Upload CSV Files:**

   - Click on the "Upload" button to select and upload one or more CSV files.
   - The app uses PapaParse to read the content of each uploaded file.

2. **Merge and Download Files:**
   - Once files are uploaded, click on the "Merge" button.
   - The app will merge the content of all uploaded CSV files and automatically initiate the merged file download.

## File Naming Convention

The merged CSV file is named based on the date and time of the merge operation. The format is `merged_CSV_files_DD_MM_YYYY_HH_mm_ss.csv`, ensuring a unique and timestamped filename.

## Example

If the merge is performed on February 23, 2024, at 14:30:45, the file name will be `merged_CSV_files_23_02_2024_14_30_45.csv`.

## Quick Start

1. Clone the repository.
2. Open `index.html` in your web browser.
3. Upload CSV files and merge them with ease!

## Dependencies

- [PapaParse](https://www.papaparse.com/) - A powerful CSV parser for JavaScript.

## Contributing

Feel free to contribute to the development of this CSV Merger app. Fork the repository, make your changes, and submit a pull request.

## License

This CSV Merger app is licensed under the [MIT License](LICENSE).

---

Feel free to customize the content as needed for your specific application and use case.
