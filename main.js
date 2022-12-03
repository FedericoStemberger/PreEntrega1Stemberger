/* 
PRIMERA PRE ENTREGA
Curso: JavaScript
Comision: 34125
Alumno: Federico Stemberger
*/

//declaracion de variables
let nombrePaciente;
let numeroFactura;
let periodoFacturado;
let vencimiento;
let respuesta;
let opcion;

//inicializacion de variable
let hayComprobante = false;

function preguntarAlUsuario(){ //Pregunta al usuario los datos de la factura y las guarda en variables.
    nombrePaciente = prompt("Ingrese el nombre del paciente");
    numeroFactura = prompt("Ingrese el numero de factura");
    periodoFacturado = prompt("Ingrese el periodo facturado");
    vencimiento = prompt("Ingrese el el vencimiento para el pago");
}

function mostrarFactura(){ //Imprime un alert con la información del comprobante/factura.
    alert(`Paciente: ${nombrePaciente}
    Factura: ${numeroFactura}
    Período: ${periodoFacturado}
    Vencimiento ${vencimiento}`);
}

do{
    //Guarda en la variable "opcion" la opcion elegida.
    opcion = prompt("Carga de Comprobantes\n\nSeleccione una opcion:\n1. Cargar Comprobante.\n2. Mostrar Comprobante.\n3. Salir.");
    
    //Ejecuta en cada caso la opción elegida.
    switch(opcion){
        case "1": //Guarda en variables los datos del comprobante y pide, en caso de ser necesario, que complete todos los campos.
            preguntarAlUsuario();
            while(nombrePaciente == "" || numeroFactura == "" || periodoFacturado == "" || vencimiento == ""){
                alert("Complete todos los espacios.");
                preguntarAlUsuario();
            }
            hayComprobante = true;
            alert("Carga Finalizada.");
            break;
        
        case "2": //Muestra el comprobante. Si no hay imprime por alert un mensaje diciendo que no hay.
            if(hayComprobante == false){
                alert("Aún no hay comprobantes cargados.");
            }else{
                mostrarFactura();
            }
            break;
        
        case "3": //Se despide del usuario con un mensaje de agradecimiento.
            alert("Gracias por elegirnos.");
            break;

        default: alert("Error. Seleccione una opción válida");
    }

}while(opcion != 3); //Cuando el usuario pulse 3 el programa finalizará.


