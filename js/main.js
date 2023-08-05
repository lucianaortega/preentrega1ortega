// Función para calcular calorías quemadas por ejercicio en calistenia
function calcularCalorias(ejercicio, minutos) {
    let caloriasPorMinuto = 0;
  
    switch (ejercicio.toLowerCase()) {
      case 'backlever':
        caloriasPorMinuto = 10;
        break;
      case 'front':
        caloriasPorMinuto = 5;
        break;
      case 'handstand':
        caloriasPorMinuto = 12;
        break;
      case 'flag':
        caloriasPorMinuto = 8;
        break;
      default:
        caloriasPorMinuto = 3;
    }
  
    return caloriasPorMinuto * minutos;
  }
  
  function simulador() {
    let totalCalorias = 0;
    let continuar = true;
  
    while (continuar) {
      const ejercicio = prompt('Ingrese el tipo de ejercicio (backlever/front/handstand/flag/otro), o escriba "finalizar" para terminar:');
      
      if (ejercicio.toLowerCase() === 'finalizar') {
        continuar = false;
        continue;
      }
  
      const minutos = parseInt(prompt(`Ingrese la duración en minutos para ${ejercicio}:`), 10);
  
      const caloriasEjercicio = calcularCalorias(ejercicio, minutos);
      totalCalorias += caloriasEjercicio;
  
      console.log(`Calorías quemadas en ${ejercicio}: ${caloriasEjercicio}`);
    }
  
    alert(`Total de calorías quemadas hoy: ${totalCalorias}`);
  }
  

  simulador();
  
  
  
  

