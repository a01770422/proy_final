function valida(){
	v_cta=document.f_contra.c_cta.value;
	v_pass=document.f_contra.c_pass.value;
	if (v_cta.length==0){//1
		alert("se debe indicar la cuenta")
	}
	else{
		if(v_pass.length==0){//2
			alert("se debe indicar la contraseña");
		}
		else{
			cta_encri=encripta(v_cta);
			pass_encri=encripta(v_pass);
			//alert(cta_encri+"  "+pass_encri);
			if ((cta_encri=="Chxvv")&&(pass_encri=="sdvdoh")){
				alert("ACCESO PERMITIDO!!!");

			}
			else{
				alert("ACCESO DENEGADO!!!");
			}
		} //2
	} //1
}