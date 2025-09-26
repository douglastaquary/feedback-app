/**
 * Google Apps Script para integração com Google Sheets
 * 
 * Instruções:
 * 1. Acesse https://script.google.com/
 * 2. Crie um novo projeto
 * 3. Cole este código
 * 4. Salve e publique como aplicativo web
 * 5. Configure as permissões necessárias
 * 6. Copie a URL e configure no arquivo .env
 */

function doPost(e) {
  try {
    // Parse dos dados recebidos
    const data = JSON.parse(e.postData.contents).data;
    
    // Obter a planilha ativa (ou criar uma nova)
    const sheet = getOrCreateSheet();
    
    // Adicionar cabeçalhos se for a primeira linha
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 17).setValues([[
        'Timestamp',
        'Sexo',
        'Idade',
        'Horário da Visita',
        'Prato',
        'Avaliação Atendimento',
        'Comentário Atendimento',
        'Avaliação Comida',
        'Comentário Comida',
        'Avaliação Tempo Espera',
        'Comentário Tempo Espera',
        'Avaliação Conforto',
        'Avaliação Música',
        'Avaliação Ambiente',
        'Comentário Espaço',
        'Comentário Final',
        'Data/Hora'
      ]]);
    }
    
    // Adicionar os dados da avaliação
    sheet.appendRow([
      data.timestamp,
      data.gender,
      data.age,
      data.visitTime,
      data.dish,
      data.serviceRating,
      data.serviceComment || '',
      data.foodRating,
      data.foodComment || '',
      data.waitTimeRating,
      data.waitTimeComment || '',
      data.comfortRating,
      data.musicRating,
      data.environmentRating,
      data.spaceComment || '',
      data.finalComment || '',
      new Date().toLocaleString('pt-BR')
    ]);
    
    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Avaliação salva com sucesso!' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Erro ao processar dados:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      message: 'API de Feedback funcionando!',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Verificar se já existe uma planilha chamada 'Avaliações'
  let sheet = spreadsheet.getSheetByName('Avaliações');
  
  if (!sheet) {
    // Criar nova planilha se não existir
    sheet = spreadsheet.insertSheet('Avaliações');
  }
  
  return sheet;
}

function testConnection() {
  // Função para testar a conexão
  const testData = {
    timestamp: new Date().toISOString(),
    gender: 'teste',
    age: 25,
    visitTime: 'teste',
    dish: 'teste',
    serviceRating: 5,
    serviceComment: 'Teste de conexão',
    foodRating: 5,
    foodComment: 'Teste de conexão',
    waitTimeRating: 5,
    waitTimeComment: 'Teste de conexão',
    comfortRating: 5,
    musicRating: 5,
    environmentRating: 5,
    spaceComment: 'Teste de conexão',
    finalComment: 'Teste de conexão'
  };
  
  const result = doPost({
    postData: {
      contents: JSON.stringify({ data: testData })
    }
  });
  
  console.log('Teste de conexão:', result.getContent());
  return result;
}
