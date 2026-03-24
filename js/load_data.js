/* -------------------------VARIABLES/CONSTANTES */
const $no_dm = document.getElementById("no_dm"),
  $imei = document.getElementById("imei"),
  $front_image = document.getElementById("front_image"),
  $back_image = document.getElementById("back_image"),
  $no_serie = document.getElementById("no_serie"),
  $model = document.getElementById("model"),
  $has_charger = document.getElementById("has_charger"),
  $works_charger = document.getElementById("works_charger"),
  $original_charger = document.getElementById("original_charger"),
  $has_usb = document.getElementById("has_usb"),
  $works_usb = document.getElementById("works_usb"),
  $original_usb = document.getElementById("original_usb"),
  $protect = document.getElementById("protect"),
  $clip = document.getElementById("clip"),
  $secae_name = document.getElementById("secae_name"),
  $secae_photo = document.getElementById("secae_photo"),
  $secae_position = document.getElementById("secae_position"),
  $se = document.getElementById("se"),
  $se_h5 = document.querySelector(".se"),
  $are_h5 = document.querySelector(".secae_are"),
  $secae_phone_number = document.getElementById("secae_phone_number"),
  $secae_email = document.getElementById("secae_email"),
  $secae_zore = document.getElementById("secae_zore"),
  $secae_are = document.getElementById("secae_are");
  let dm = 0;
/* --------------------------------------CREAMOS LA FUNCION QUE VA A CAMBIAR LOS DATOS DEL DM Y DEL SE CAE */
async function loadData(url, imei) {
  try {
    let res = await fetch(url),
      json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    try {
        dm = imei;
      $no_dm.innerHTML = json.dispositivos[dm].no_dm;
      $imei.innerHTML = json.dispositivos[dm].imei;
      $no_serie.innerHTML = json.dispositivos[dm].no_serie;
      $model.innerHTML = json.dispositivos[dm].model;
      $has_charger.checked = json.dispositivos[dm].has_charger;
      $works_charger.checked = json.dispositivos[dm].works_charger;
      $original_charger.checked = json.dispositivos[dm].original_charger;
      $has_usb.checked = json.dispositivos[dm].has_usb;
      $works_usb.checked = json.dispositivos[dm].works_usb;
      $original_usb.checked = json.dispositivos[dm].original_usb;
      $protect.checked = json.dispositivos[dm].protect;
      $clip.checked = json.dispositivos[dm].clip;
      $secae_name.innerHTML = json.dispositivos[dm].secae_name;
      $secae_photo.setAttribute("src" , json.dispositivos[dm].secae_photo);
      $secae_position.innerHTML = json.dispositivos[dm].secae_position;
      json.dispositivos[dm].se == null ? $se_h5.style.display = "none" : $se.innerHTML = json.dispositivos[dm].se;
      $secae_phone_number.innerHTML = json.dispositivos[dm].secae_phone_number;
      $secae_email.innerHTML = json.dispositivos[dm].secae_email;
      $secae_zore.innerHTML = json.dispositivos[dm].secae_zore;
      json.dispositivos[dm].secae_are == null ? $are_h5.style.display = "none" : $secae_are.innerHTML = json.dispositivos[dm].secae_are;
      if (json.dispositivos[dm].model == "WIKO T3") {
        $front_image.setAttribute("src" , "assets/img/dm/wiko/wiko_t3_frente.png");
        $back_image.setAttribute("src" , "assets/img/dm/wiko/wiko_t3_reverso.png");
      } else {
      }
      
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
}
/* --------------------------------------MANDAMOS LLAMAR LA FUNCION LOADDATA CUANDO CARGUE LA PAGINA*/
document.addEventListener("DOMContentLoaded", async (e) => {
  await loadData("./js/data.json", localStorage.getItem("imei"));
});