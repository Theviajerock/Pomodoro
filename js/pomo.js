    const constMinutos = 30;
    const constSegundos = constMinutos * 60;
    var minutosReducir = constMinutos;
    var segundosReducir = minutosReducir * 60;

function calcularTiempo(){

      
      segundosReducir = segundosReducir - 1
      minutosReducir = Math.floor(segundosReducir/60);
      segundosRestantes = Math.floor(segundosReducir%60) 

      
      console.log('Segundos: '+ segundosRestantes + ' Minutos: ' + minutosReducir)
}


setInterval(calcularTiempo,1000);