/*var boton=document.getElementById('submit');
submit.addEventListener('click',function(){*/


/*se crean todas las variables principales accediendo al Id de cada elemento */
var formulario=document.getElementById("caja1")
var IngresoDeDatos=document.getElementById("input");
var PrimerBotton=document.getElementById("primerBoton");
var segundoBotton=document.getElementById("segundoBoton");
var contenedor=document.getElementById("contenedor");

/*Se Crea el evento de el Primer Boton*/
/*acá se accede al ID y se agrega el oyente del evento*/
PrimerBotton.addEventListener('click',visualizarForm);
/*se accede a la variable de el segundo boton */
	SegundoBotton.addEventListener('click',function(resul){
	resul.preventDefault(); /*preventDefault evita que se envie
	la acción al hacer click en el boton, evitando que se ejecute el resto
	de codigo , gracias a este metodo se abre la otra ventana de input
	con la nueva lista*/
    li();
    contenedorNuevo();
});

function visualizarForm(resul){
	resul.preventDefault();
	primerBotton.classList.add("invisible");
	caja1.classList.remove("formulario");
	caja1.classList.remove("invisible");
	lista.focus();
}

function nuevaLista(submitt){
	var contendorLista=document.createElement("div");
	var nuevaInfo=document.createElement("submmit");
	
	contendorLista.classList.add("etiqueta");
	nuevaInfo=classList.add("añadirEtiqueta");

	contendorLista.innerHTML=inputLista.value;
	nuevaInfo.textContent="Añade una Lista";

	primerBoton.parentElement.appendChild(nuevaInfo);
	primerBoton.parentElement.insertBefore(contenedorLista,primerBoton.parentElement.childNode[0]);
	input.value="";

	nuevaInfo.addEventListener("click",function(resul){
		resul.preventDefault();
		nuevaInfo.classList.add("invisible");
		abrirEtiqueta(contendorLista,primerBoton);

	});
}
function contenedorNuevo(){
	 var nuevoContenedor = document.createElement("div");
        contenedor1.appendChild(nuevoContenedor);
        nuevoContenedor.classList.add("nuevoContenedor");

        nuevoContenedor.appendChild(nuevaInfo);
        nuevoContenedor.appendChild(caja1);

        primerBoton.classList.remove("invisible");
        caja1.classList.add("invisible");
    }
    function abrirEtiqueta(contendorLista,primerBoton){
        var formE = document.createElement("div");
        formE.classList.add("formE");

        var textareaForm = document.createElement("textarea");
        formE.insertBefore(textareaForm, formE.childNodes[0]);
        textareaForm.classList.add("textareaForm");
        textareaForm.focus();

        var botonEtiqueta = document.createElement("button");
        formE.insertBefore(botonEtiqueta, formE.childNodes[1]);
        botonEtiqueta.classList.add("botonF");
        botonEtiqueta.setAttribute("type", "button")
        botonEtiqueta.innerText = "Añadir";
        contenedorLista.parentElement.appendChild(formE);
        textareaForm.focus();

        botonEtiqueta.addEventListener("click", function(resul){
            resul.preventDefault ();
            aTarjeta(textareaForm, contenedorLista);
            primerBoton.classList.remove("invisible");
            formE.classList.add("invisible");
        });
    }

    function aTarjeta(textareaForm, contendorLista){
        var nTarjeta = document.createElement("div");
        nTarjeta.classList.add("nombrenuevaEtiqueta");
        nTarjeta.innerText = textareaForm.value;

        var tarjetaN = document.createElement("div");
        tarjetaN.classList.add("fondoN");

        contendorLista.parentElement.insertBefore(tarjetaN, contentNameLista.parentElement.childNodes[1]);
        tarjetaN.insertBefore(nTarjeta, tarjetaN.childNodes[0]);
    }
    
});



