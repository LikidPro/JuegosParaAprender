const { createApp } = Vue
  createApp({
    data() {
      return {
        texto:"texto1",
        primerMemoria:[],
        numero1:1,
        numero2:0,
        arrayDePregunta:[
          {
            pregunta:"¿Cual es el resultado de sumar 27 + 15?",
            respuesta1:34,
            respuesta2:40,
            respuesta3:42,
            respuesta4:35,
            resultado:42
            
          },
          {
            pregunta:"¿Cual es el resultado de sumar 57 + 13?",
            respuesta1:64,
            respuesta2:72,
            respuesta3:71,
            respuesta4:70,
            resultado:70
          },
          {
            pregunta:"¿Cual es el resultado de restar 57 - 15?",
            respuesta1:42,
            respuesta2:24,
            respuesta3:46,
            respuesta4:40,
            resultado:42
          },
        ],
        correcto:null,
        idIMagenCrimen:1,
        
      
      }
   
    },
    created() {
    
        
    },
    methods: {
      cambiartexto(){
        let texto1= document.getElementById("texto1")
        let texto2= document.getElementById("texto2")
        let texto3= document.getElementById("texto3")
        let texto4= document.getElementById("texto4")
        let seccion= document.getElementById("presentacion")
        let brujo = document.getElementById("brujo")
        let puertas= document.getElementById("puertas")
        if(this.texto == "texto1"){
            texto1.style.display ="none"
            texto2.style.display = "block"     
            return this.texto = "texto2"
        }
        if(this.texto == "texto2"){
            texto2.style.display ="none"
            texto3.style.display = "block"
            return  this.texto = "texto3"
        }
        if(this.texto == "texto3"){
            texto3.style.display ="none"
            texto4.style.display = "block"
            return  this.texto = "texto4"
        }
        if(this.texto == "texto4"){
          brujo.classList.add("animate__zoomOut")
          setTimeout(this.sacarSeccion,3000,seccion,puertas)
        }
        
      },
      sacarSeccion(seccion, puertas){
        seccion.classList.add("sacarSeccion")
        puertas.classList.add("mostrarPuerta")
      },
      darVueltaMemoria(id , id2){
        let imagen = document.getElementById("memoria"+id)
        let numero = document.getElementById("numero"+ id2)
        let valor1 = parseInt(numero.ariaValueText)
        console.log([numero]);
        imagen.classList.add("desaparecer")
        numero.classList.add("aparecer")
        if(this.primerMemoria.length == 0){
          this.primerMemoria.push(imagen)
          this.primerMemoria.push(numero)
       
          
        }
        if(this.numero2 == 1){
          this.numero2 = valor1
          console.log(this.numero2);
         ;
        }
        if(this.numero1 == 1){
          this.numero1 = valor1
          this.numero2 = 1
        
        }
        if(this.numero1 == this.numero2){
          this.primerMemoria=[]
          this.numero1=1
          this.numero2=0
        
        }
        if(this.numero1 != 1 && this.numero2 != 1 && this.numero1 != this.numero2){
          let botonesSelec = document.querySelectorAll(".botonmemoria")
          let botones = Array.from(botonesSelec)
          botones.forEach(boton => boton.disabled=true)
          console.log(botones);
         setTimeout(this.funcion1,2000,imagen,numero,botones)
      

        }
      },funcion1(imagen,numero,botones){
        this.primerMemoria[0].classList.remove("desaparecer")        
          this.primerMemoria[1].classList.remove("aparecer")
          imagen.classList.remove("desaparecer")
          numero.classList.remove("aparecer")
          this.numero1=1
          this.numero2=0
          this.primerMemoria=[]
          botones.forEach(boton => boton.disabled=false)
      },
        getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      },
      respuesta(id, resultado){
        let boton1 = document.getElementById("botonPregunta"+ id)
        if(boton1.innerText == resultado ){
          this.correcto=true;
        }else {
          this.correcto=false;
        }
       

      },
      cambiarPregunta(){
        this.arrayDePregunta.shift()
        this.correcto=null
      },
      siguientePuerta(id, id2){
        let puerta1= document.getElementById("puerta" + id)
        let puerta2= document.getElementById("puerta"+ (id2))
        puerta1.classList.remove("mostrarPuerta")
        puerta2.classList.add("mostrarPuerta")
      },
      puertaAnterior(id,id2){
        let puerta1= document.getElementById("puerta" + id)
        let puerta2= document.getElementById("puerta"+ id2)
        puerta1.classList.remove("mostrarPuerta")
        puerta2.classList.add("mostrarPuerta")
      },
      puertaSeleccionada(id){
        memoria= document.getElementById("juegoMemoria")
        preguntas= document.getElementById("juegoPregunta")
        puertas= document.getElementById("puertas")
        crimen= document.getElementById("juegoCrimen")
        if(id == 1){
          puertas.classList.remove("mostrarPuerta")
          memoria.classList.add("mostrarPuerta")

        }
        if(id == 2){
          puertas.classList.remove("mostrarPuerta")
          preguntas.classList.add("mostrarPuerta")
        }
        if(id == 3){
          puertas.classList.remove("mostrarPuerta")
          crimen.classList.add("mostrarPuerta")
        }
        if(id == 4){
          
        }
      },
      cambiarImagenCrimen(id){
        let imagenBuscada = document.getElementById("imagenJuegoCrimen" + this.idIMagenCrimen)
        let imagenQueBuscada = document.getElementById("imagenJuegoCrimenBuscada")
        
        if(this.idIMagenCrimen == id){
          this.idIMagenCrimen= this.idIMagenCrimen + 1
          imagenBuscada.style.display = "none"
          let imagenSiguiente = document.getElementById("imagenJuegoCrimen" + this.idIMagenCrimen)
          imagenQueBuscada.src = imagenSiguiente.src

        }

      }
    
       
    },
    
  }).mount('#app')


