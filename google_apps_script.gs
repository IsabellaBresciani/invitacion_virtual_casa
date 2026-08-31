// Copiar este código en Google Apps Script (Tools > Script Editor en tu Google Sheet)

function doPost(e) {
  try {
    // Obtener la data del formulario
    const data = JSON.parse(e.postData.contents);
    
    // Obtener la hoja de cálculo activa
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Si es la primera vez, agregar encabezados
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Fecha',
        'Nombre',
        'Email',
        'Teléfono',
        '¿Asistirá?',
        'Comentarios'
      ]);
    }
    
    // Agregar la fila con los datos del formulario
    sheet.appendRow([
      data.fecha,
      data.nombre,
      data.email,
      data.telefono,
      data.asistencia,
      data.comentarios
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Confirmación registrada correctamente'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
