/**
 * @OnlyCurrentDoc
 *
 * The above comment directs App Script to limit the scope of authorization
 * to only the current spreadsheet, which is a best practice.
 */

// This function runs automatically when the spreadsheet is opened.
function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('🚀 Dashboard')
      .addItem('Show Dashboard', 'showSidebar') // This menu item will call the showSidebar function
      .addToUi();
}

// This is the primary function to display the dashboard in a sidebar.
function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Wealth Dashboard'); // A more descriptive title
  SpreadsheetApp.getUi().showSidebar(html);
}

// This function is for deploying the script as a standalone web app.
// It will be used if you access the deployment URL directly.
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Wealth Dashboard');
}

// Fetches all data from the specified sheet.
function getSheetData() {
  const sheetName = "0. Dashboard"; 
  
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    if (!sheet) {
      // If the sheet isn't found, throw an error that the client-side can display.
      throw new Error(`Sheet named "${sheetName}" was not found. Please check the name.`);
    }
    const data = sheet.getDataRange().getValues(); // Get all data as a 2D array
    return data;
  } catch (e) {
    console.error(`Error in getSheetData: ${e.toString()}`);
    // This allows your HTML's .withFailureHandler to catch the error and display it.
    throw e; 
  }
}

// Kept your modal function as an optional alternative.
// You can run this manually from the Apps Script editor if you prefer a modal dialog.
function showModal() {
  const html = HtmlService.createHtmlOutputFromFile('Index')
      .setWidth(800)
      .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Wealth Dashboard');
}