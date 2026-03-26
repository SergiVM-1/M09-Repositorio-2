//Gráficos apartado A
var ctx = document.getElementById('myChart').getContext('2d');

let chartType = 'bar';
var myChart = new Chart(ctx, {
    type: chartType,
    data: {
        labels: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        datasets: [{
            label: 'Relación Hora - Ocupación del gimnasio',
            data: [40, 50, 40, 36, 20, 20, 10, 28, 39, 52, 65, 60, 45, 18],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false, 
            tension: 0.3 
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

document.getElementById('toggleChart').addEventListener('click', function () {
    
    chartType = chartType === 'bar' ? 'line' : 'bar';
    myChart.destroy();
    
    myChart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
            datasets: [{
                label: 'Relación Hora - Ocupación del gimnasio',
                data: [40, 50, 40, 36, 20, 20, 10, 28, 39, 52, 65, 60, 45, 18],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false,
                tension: 0.3
            }]
        }
    });
});

//Anmimaciones bloque B
//Animación al cargar la página para que aparezcan las actividads escalonadas
window.addEventListener('load', () => {

  anime({
    targets: '.actividad',
    opacity: [0, 1],
    translateY: [50, 0],
    delay: anime.stagger(150),
    duration: 800,
    easing: 'easeOutQuad'
  });

});

//Los botones del selector de idioma modificaran su tamaño al pasar el ratón
const botones = document.querySelectorAll('.boton-idioma');

botones.forEach(boton => {

  boton.addEventListener('mouseenter', () => {
    anime({
      targets: boton,
      scale: 1.15,
      duration: 200,
      easing: 'easeOutQuad'
    });
  });

  boton.addEventListener('mouseleave', () => {
    anime({
      targets: boton,
      scale: 1,
      duration: 200,
      easing: 'easeOutQuad'
    });
  });
  });


//Alto rendimiento bloque C
//Particulas Y estela ratón
document.addEventListener("DOMContentLoaded", () => {

  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');

  //Ajuste inicial del canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //Datos del ratón
  //determina la posición en x e y del ratón
  let mouse = { x: 0, y: 0 };
  window.addEventListener('mousemove', e => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  //Partículas
  //Crea un bucle de hasta 50 particulas a las que asigna una posición de inicio y 
  //un movimiento aleatorio con el math random
  let particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      size: 3
    });
  }

  //Estelas
  let trails = [];
  window.addEventListener('mousemove', (e) => {
    trails.push({ x: e.x, y: e.y, alpha: 1}); //e es la posición del raton y alpha es la duración de la estela
  });

  //Bucle de animación
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Dibujar partículas
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;

      //Rebote en bordes
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      //Interacción con el ratón (atracción)
      let dx = mouse.x - p.x;
      let dy = mouse.y - p.y;
      let dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 100) {
        p.x -= dx * 0.02;
        p.y -= dy * 0.02;
      }

      //Dibujar
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(116, 227, 129, 0.5)';
      ctx.fill();
    });

    //Dibujar estelas
    trails.forEach((t, index) => {
      t.alpha -= 0.02;
      ctx.beginPath();
      ctx.arc(t.x, t.y, 5, 0, Math.PI*2);
      ctx.fillStyle = `rgba(94, 219, 109, 0.5) ${t.alpha})`;
      ctx.fill();

      if (t.alpha <= 0) trails.splice(index, 1);
    });

    requestAnimationFrame(animate);
  }
  animate();
});