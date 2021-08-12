var server = "databaselink";
var port = "8080";
var dbName = "username";
var username = "password";
var password = "mydatabase";


function readData() {
  var url = "jdbc:mysql://"+server+":"+port+"/"+dbName;
  Logger.log(url)
  var conn = Jdbc.getConnection(url, username, password); 
  var stmt = conn.createStatement();
  var results = stmt.executeQuery("SELECT * FROM mydatabase");
  var metaData=results.getMetaData();
  var numCols = metaData.getColumnCount();
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getSheetByName("Sheet0");
  sheet.clearContents();
  var arr=[];

  for (var col = 0; col < numCols; col++) {
  arr.push(metaData.getColumnName(col + 1));
 }

  sheet.appendRow(arr);

while (results.next()) {
 arr=[];
 for (var col = 0; col < numCols; col++) {
   arr.push(results.getString(col + 1));
 }
 sheet.appendRow(arr);
}

results.close();
stmt.close();
sheet.autoResizeColumns(1, numCols+1);
}

