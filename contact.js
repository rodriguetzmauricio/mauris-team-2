const formulario  = document.getElementById("contact-form");
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
	usuario: /^[a-zA-ZÀ-ÿ\s]{1,150}$/, // Letras, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	empresa: /^[a-zA-ZÀ-ÿ\s]{1,150}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	usuarios: /^\d{1,5}$/, //1 a 5 numeros.
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	mensajes: /^[a-zA-Z0-9\_\-]$/, // Letras, numeros, guion y guion_bajo
}

const campos = {
    name : false,
    empresa : false,
    rubro : false,
    localidad : false,
    usuarios : false,
    email : false
}

const validarFormulario = (e) =>{
    switch (e.target.name){
        case "name":
        if(expresiones.usuario.test(e.target.value)){
            document.getElementById('grupo__name').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__name').classList.add('formulario__grupo-correcto');
            document.querySelector('.usuario-formulario__input-error').classList.remove('usuario-formulario__input-error-activo');
             campos['name'] = true
        }else{
            document.getElementById('grupo__name').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__name').classList.remove('formulario__grupo-correcto');
            document.querySelector('.usuario-formulario__input-error').classList.add('usuario-formulario__input-error-activo');
             campos['name'] = false
        }
        break
        case "empresa":
            if(expresiones.empresa.test(e.target.value)){
                document.getElementById('grupo__empresa').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__empresa').classList.add('formulario__grupo-correcto');
                document.querySelector('.empresa-formulario__input-error').classList.remove('usuario-formulario__input-error-activo');
                 campos['empresa'] = true
            }else{
                document.getElementById('grupo__empresa').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__empresa').classList.remove('formulario__grupo-correcto');
                document.querySelector('.empresa-formulario__input-error').classList.add('usuario-formulario__input-error-activo');
                 campos['empresa'] = false
            }
        break
        case "rubro":
            if(expresiones.empresa.test(e.target.value)){
                document.getElementById('grupo__rubro').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__rubro').classList.add('formulario__grupo-correcto');
                document.querySelector('.rubro-formulario__input-error').classList.remove('rubro-formulario__input-error-activo');
                 campos['rubro'] = true
            }else{
                document.getElementById('grupo__rubro').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__rubro').classList.remove('formulario__grupo-correcto');
                document.querySelector('.rubro-formulario__input-error').classList.add('rubro-formulario__input-error-activo');
                 campos['rubro'] = false
            }
        break
        case "localidad":
            if(expresiones.empresa.test(e.target.value)){
                document.getElementById('grupo__localidad').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__localidad').classList.add('formulario__grupo-correcto');
                document.querySelector('.localidad-formulario__input-error').classList.remove('localidad-formulario__input-error-activo');
                 campos['localidad'] = true
            }else{
                document.getElementById('grupo__localidad').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__localidad').classList.remove('formulario__grupo-correcto');
                document.querySelector('.localidad-formulario__input-error').classList.add('localidad-formulario__input-error-activo');
                 campos['localidad'] = false
            }
        break
        case "usuarios":
				if(expresiones.usuarios.test(e.target.value)){
						document.getElementById('grupo__usuarios').classList.remove('formulario__grupo-incorrecto');
						document.getElementById('grupo__usuarios').classList.add('formulario__grupo-correcto');
						document.querySelector('.usuarios-formulario__input-error').classList.remove('usuarios-formulario__input-error-activo');
                         campos['usuarios'] = true
				}else{
						document.getElementById('grupo__usuarios').classList.add('formulario__grupo-incorrecto');
						document.getElementById('grupo__usuarios').classList.remove('formulario__grupo-correcto');
						document.querySelector('.usuarios-formulario__input-error').classList.add('usuarios-formulario__input-error-activo');
                         campos['usuarios'] = false
				}
        break
        case "email":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('grupo__email').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__email').classList.add('formulario__grupo-correcto');
                document.querySelector('.mail-formulario__input-error').classList.remove('mail-formulario__input-error-activo');
                 campos['email'] = true
            }else{
                document.getElementById('grupo__email').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__email').classList.remove('formulario__grupo-correcto');
                document.querySelector('.mail-formulario__input-error').classList.add('mail-formulario__input-error-activo');
                 campos['email'] = false
            }
        break
        case "phone":
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById('grupo__phone').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__phone').classList.add('formulario__grupo-correcto');
                document.querySelector('.phone-formulario__input-error').classList.remove('phone-formulario__input-error-activo');
             
            }else{
                document.getElementById('grupo__phone').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__phone').classList.remove('formulario__grupo-correcto');
                document.querySelector('.phone-formulario__input-error').classList.add('phone-formulario__input-error-activo');
                 
            }
        break
    }
}

/*const habilitar = () => {
  var usuario = document.getElementById("form_name").value;
  var empresa = document.getElementById("form_lastname").value;
  var rubro = document.getElementById("form_rubro").value;
  var localidad = document.getElementById("form_localidad").value;
  var usuarios = document.getElementById("form_usuarios").value;
  var email = document.getElementById("form_email").value;
  var val = 0;

  if(usuario != "" && empresa != "" && rubro != "" && localidad != "" && usuarios != "" && email != ""){
    val++;
  }

  if(val == 1){
    document.getElementById("enviar").disabled = false;
  } else if (val == 0){
    document.getElementById("enviar").disabled = true;
  }
}

document.getElementById("form_name").addEventListener('keyup',habilitar);
document.getElementById("form_lastname").addEventListener('keyup',habilitar);
document.getElementById("form_rubro").addEventListener('keyup',habilitar);
document.getElementById("form_localidad").addEventListener('keyup',habilitar);
document.getElementById("form_usuarios").addEventListener('change',habilitar);
document.getElementById("form_email").addEventListener('keyup',habilitar);

}*/

inputs.forEach((input)=>{
    input.addEventListener('change',validarFormulario);
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

inputs.forEach((input)=>{
    input.addEventListener('change',mostrarMsjError);
    input.addEventListener('keyup',mostrarMsjError);
    input.addEventListener('blur',mostrarMsjError);
});
function mostrarMsjError(){
    if(campos.name && campos.empresa && campos.rubro && campos.localidad && campos.usuarios  && campos.email){
        $('#enviar').attr("disabled", false);
        document.getElementById('div-alerta-errorenvio').classList.remove('div-alerta-errorenvio-activo')
    }else{
        $('#enviar').attr("disabled", true);
        document.getElementById('div-alerta-errorenvio').classList.add('div-alerta-errorenvio-activo')
    }
}

$(document).read

// formulario.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     if(campos.name && campos.empresa  && campos.rubro  && campos.localidad  && campos.usuarios  && campos.email  && campos.phone){
//         document.getElementById('div-alerta-errorenvio').classList.add('div-alerta-errorenvio-activo')
//     }

// })
// $(document).ready(function(){
//     //  if(campos.name && campos.empresa  && campos.rubro  && campos.localidad  && campos.usuarios  && campos.email  && campos.phone){
//     //     alert('hola')
//     //     $('#enviar').attr("disabled", false);
//     //  }else{
//     //     document.getElementById('div-alerta-errorenvio').classList.add('div-alerta-errorenvio-activo')
//     //     $('#enviar').attr("disabled", true);
//     //  }
//     document.getElementById('div-alerta-errorenvio').classList.add('div-alerta-errorenvio-activo')
//     $('#enviar').attr("disabled", true);
//     if(!campos.name){
//         $('#enviar').attr("disabled", false);
//     }else{
        
//     }
// })
$(function() {
   mostrarMsjError();   
    });

$(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
	$('#contact-form1').validator();

    $('#contact-form1').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form1').find('.messages').html(alertBox);
                        $('#contact-form1')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});
