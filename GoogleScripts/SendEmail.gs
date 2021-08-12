// @ts-nocheck


function sendEmails() {

  function getSheetID(name){
  var ss = SpreadsheetApp.getActive().getSheetByName('Painel')
  var sheetID = ss.getSheetId().toString() 
  return sheetID
  }
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SheetSend');
  var startRow = 2; // First row of data to process
  var numRows = 1000; // Number of rows to process
  var ssID = SpreadsheetApp.getActiveSpreadsheet().getId();
  var sheetName = SpreadsheetApp.getActiveSpreadsheet().getName();

  var dataRange = sheet.getRange(startRow, 1, numRows, 2);
  var data = dataRange.getValues();

  var requestData = {"method": "GET", "headers":{"Authorization":"Bearer "+ScriptApp.getOAuthToken()}};
  var shID = getSheetID("Painel") //Get Sheet ID of sheet name "Painel"
  var url = "https://docs.google.com/spreadsheets/d/"+ ssID + "/export?format=pdf&id="+ssID+"&gid="+shID;
  var result = UrlFetchApp.fetch(url , requestData);  
  var contents = result.getContent();  
  var file = DriveApp.getFileById('1IMdYF2NiiZ07Qu_QiyrU2wwq3R3snt7wQkyS_3oPig8');


  for (var i = 0; i < data.length; ++i) {
    var row = data[i];
    var email_nome = row[0];
    var email_enviado= row[1];
   
    if (email_enviado!= 'email_sent' && email_nome!="") { // Prevents sending duplicates
      var subject = 'Resposta do teste (Musa da Mente).';
      var random ='Olá Musa\n\nAo final desse e-mail, está em anexo – para baixar - o seu resultado: um gráfico com mapeamento da porcentagem que você possui de cada uma das deusas e qual é a predominante.\n\nJunto com o mapeamento tem um resumo sobre cada perfil dos arquétipos das deusas e o que cada uma precisa para se equilibrar, crescer e se desenvolver.\n\nNesse curto resumo você vai aprender sobre:\n- Os arquétipos das deusas correspondem a um conjunto exclusivo de crenças e valores comportamentais da mulher;\n- Os arquétipos de cada deusa e o caminho para o crescimento e desenvolvimento de cada uma;\n- As principais características das 6 principais deusas para se autorregular.\nTenho certeza que vai ser o primeiro e mais importante passo que te conduzirá no caminho mais adequado do poderoso autoconhecimento transformador.\n\nGostou? Então copie e cole o link abaixo e envie esse Teste de Mapeamento das Deusas para as amigas e conhecidas que você gosta, espalhando o poder do feminino para o máximo de mulheres que for possível.\nhttps://contato.site/756f0a4/deusa-afrodite/mm-capt-teste-das-deusas'
      
      MailApp.sendEmail(email_nome, subject, random, {attachments:[{fileName:sheetName+".pdf", content:contents, mimeType:"application//pdf"},  file.getAs(MimeType.PDF)]});
      sheet.getRange(startRow + i, 2).setValue('email_sent');
      // Make sure the cell is updated right away in case the script is interrupted
      //SpreadsheetApp.flush();
      }
  }
}