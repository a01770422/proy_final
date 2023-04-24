function mostrar(){ 
	document.f_contra.c_pass.type="text";
}

function ocultar(){
	document.f_contra.c_pass.type="password";
}

function campos_azules()	{
	document.f_contra.c_cta.style.background="blue";
	document.f_contra.c_pass.style.background="blue";
}

function enviar(){
	intentos=document.f_contra.intentos.value;
	intentos=parseInt(intentos);
	c_cta=document.f_contra.c_cta.value;
	c_pass=document.f_contra.c_pass.value;
	if (c_cta.length==0){//dos
		alert("Error, debe enviar la cuenta"); 
		document.f_contra.c_cta.style.background="red";
	}//dos
	else{//uno
		if (c_pass.length==0){//eee
			alert("Error, debe enviar la contraseña"); 
			document.f_contra.c_pass.style.background="red";
		}//eee
		
		else{//holis
			intentos++;
			document.f_contra.intentos.value=intentos;
			if(intentos==3){
				alert("Se han agotado los intentos");
				document.f_contra.c_cta.disabled="true";
				document.f_contra.c_cta.style.background="gray";
				document.f_contra.c_pass.disabled="true";
				document.f_contra.c_pass.style.background="gray";

function certificado(){
c_cta=document.f_contra.c_cta.value;
c_pass=document.f_contra.c_pass.value;
if(c_cta.length<5){
		alert("Error, la palabra debe de ser de más de 5 caracteres");
		document.f_contra.c_cta.style.background="red";
	}
	else{ 
			abc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789"
			llave="defghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789abc"
			salida="";
				cont=0;
				while(cont<c_cta.length){
					letra=c_cta.charAt(cont);
					pos=abc.indexOf(letra);
					salida=salida+llave.charAt(pos);
					cont++;
		}
		salida1="";
				cont1=0;
				while(cont1<c_pass.length){
					letra1=c_pass.charAt(cont1);
					pos1=abc.indexOf(letra1);
					salida1=salida1+llave.charAt(pos1);
					cont1++;
		}
		if ((salida=="pdBulv") && (salida1="krod")){
	alert("HOLA BIENVENIDO");
}
}
}