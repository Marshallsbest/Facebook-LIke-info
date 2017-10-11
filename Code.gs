function onOpen() {
  
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('Open Sidebar', 'openSidebar')
    .addToUi();

}

function onInstall() {
  onOpen();
}

function openSidebar() {
  var html = HtmlService.createTemplateFromFile('Sidebar')
    .evaluate();
  
  SpreadsheetApp.getUi().showSidebar(html);
}
function doGet(){
   var response = UrlFetchApp.fetch("http://www.google.com/");
   Logger.log(response.getContentText());
   
   }