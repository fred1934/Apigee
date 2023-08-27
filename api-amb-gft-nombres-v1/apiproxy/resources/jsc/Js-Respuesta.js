  var requestPayload = context.getVariable("requestPayload");
var jsonCampos = JSON.parse(requestPayload);
  
    var currentDate = new Date();
    var additionalData = {
        "fecha": currentDate.toLocaleDateString("es-MX"),
        "hora": currentDate.toLocaleTimeString("es-MX", { hour12: false }),
        "aleatorio": Math.floor(Math.random() * 100)
    };

    // Crear el objeto de respuesta con el formato deseado
    var responsePayload = {
        "codigo": "200.apigee-amb-gft-nombres-v1." + Math.floor(Math.random() * 100000),
        "nombre": jsonCampos.nombre,
        "edad": jsonCampos.edad,
        "fechaNacimiento": jsonCampos.fechaNacimiento,
        "datosAdicionales": additionalData
    };

    context.setVariable("response.content", JSON.stringify(responsePayload, null, 2));
    context.setVariable("response.status.code", "200");
    context.setVariable("response.status.reasonPhrase", "OK"); 