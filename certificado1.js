function encripta(cadena){
	abc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	llave="defghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	cont=0;
	salida="";
	while (cont<cadena.length){
		letra=cadena.charAt(cont);
		pos=abc.indexOf(letra);
		salida=salida+llave.charAt(pos);
		cont++;
	}
	return(salida);

}