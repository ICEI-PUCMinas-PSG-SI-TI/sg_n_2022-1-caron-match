window.onload = function () {
    
    var nome = localStorage.getItem('usuariologado-nome');
    document.getElementById('usuario').innerHTML = "Bem vindo " + nome +" !";
}

function funcaoLogout(){
  
    var nome = localStorage.getItem('usuariologado-nome');
    window.localStorage.removeItem('usuariologado-nome')=nome;
   
       
   }

function initMap() { 
   
    const p1 = { lat: -19.858906543390017, lng: -43.91895769784901 };
   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: p1,
    });
   
    const marker = new google.maps.Marker({
      position: p1,
      map: map,
    });
  }
  
  window.initMap = initMap;
