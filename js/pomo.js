


var app=angular.module('pomodoroApp',[]);
app.controller('pomodoroCtrl',function($scope, $interval){

    $scope.calcularTiempo = function(){
	var constMinutos = 30;
	var constSegundos = constMinutos * 60;
	var minutosReducir = constMinutos;
	var segundosReducir = minutosReducir * 60;
 
	  
	  

      $interval(function(){
		  
        
        $scope.segundosReducir = segundosReducir - 1
        segundosReducir =  $scope.segundosReducir
        $scope.minutosReducir = Math.floor(segundosReducir/60);
        minutosReducir = $scope.minutosReducir
        $scope.segundosRestantes = Math.floor(segundosReducir%60)
        console.log($scope.minutosReducir) 

      },1000)

    };

    $scope.calcularTiempo()

});






/*function calcularTiempo(){

      
      segundosReducir = segundosReducir - 1
      minutosReducir = Math.floor(segundosReducir/60);
      segundosRestantes = Math.floor(segundosReducir%60) 

      
      console.log('Segundos: '+ segundosRestantes + ' Minutos: ' + minutosReducir)
}


setInterval(calcularTiempo,1000);

*/
