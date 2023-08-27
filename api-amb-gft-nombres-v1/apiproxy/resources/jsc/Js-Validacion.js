var requestPayload = context.getVariable("requestPayload");
var jsonCampos = JSON.parse(requestPayload);

if (requestPayload !== null){
    if (!jsonCampos.nombre || !jsonCampos.edad || !jsonCampos.fechaNacimiento) {
        context.setVariable("flow.error.code", "400");
        context.setVariable("response.status.reasonPhrase", "Bad Request");
    }
} else {
        context.setVariable("flow.error.code", "400");
        context.setVariable("response.status.reasonPhrase", "Bad Request");
}