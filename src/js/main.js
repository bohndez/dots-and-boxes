function PuntoYRaya(idJuego){
   var dots = this;
   dots.idJuego = idJuego;

   // MÉTODOS PARA FILAS Y COLUMNAS

   // TABLERO.
   // -------
   dots.tablero = function(nColumnas, nFilas){
      dots.nColum = (nColumnas*2)+1 ;
      dots.nFilas = (nFilas*2)+1 ;
      
      // CREO EL DIV DEL TABLERO.
      var tablero = document.createElement('div');
      tablero.classList.add('tablero');
      tablero.style.width = (nColumnas*35)+5+'px';
      tablero.style.height = (nFilas*35)+5+'px';
      tablero.id = idJuego;
         
      // PONGO EL TABLERO EN EL BODY.
      document.body.appendChild(tablero);         
      
      // CREO LAS FILAS Y COLUMNAS DEL TABLERO.
      for(var c = 0; c < dots.nColum; c++){
         // CREO LA FILA.
         var col = document.createElement('div');
         col.setAttribute('posicion', c);
         // SI ES IMPAR.
         if( (c%2) == 0){
            col.classList.add('col');
            col.classList.add('col-even');
            
            // CREO LOS PUNTOS Y RAYAS
            for(var f = 0; f < dots.nFilas; f++){
               if( (f%2) == 0){
                  var elem = document.createElement('div');
                  elem.classList.add('punto');
                  col.appendChild(elem);
               }else{
                  var elem = document.createElement('div');
                  elem.classList.add('raya');
                  elem.classList.add('raya-v');
                  elem.setAttribute('col', c);
                  elem.setAttribute('fila', f);
                  col.appendChild(elem);
               }
            }
         }else{
            col.classList.add('col');
            col.classList.add('col-odd');

            // CREO LOS PUNTOS Y RAYAS
            for(var f = 0; f < dots.nFilas; f++){
               if( (f%2) == 0){
                  var elem = document.createElement('div');
                  elem.classList.add('raya');
                  elem.classList.add('raya-h');
                  elem.setAttribute('col', c);
                  elem.setAttribute('fila', f);
                  col.appendChild(elem);
               }else{
                  var elem = document.createElement('div');
                  elem.classList.add('cuadro-letra');
                  col.appendChild(elem);
               }
            }
         }
         
         // PONGO LA FILA.
         tablero.appendChild(col);
      }
   }//dots.tablero
   
   // MÉTODO PARA OBTENER LA POSICIÓN
   dots.getPosicion = function(elemento){
      var pos = [parseInt(elemento.getAttribute('col')),
                 parseInt(elemento.getAttribute('fila'))]
      return pos;
   }
   
   // MÉTODO PARA SELECIONAR UNA RAYA
   dots.getRaya = function(col, fila){
      this.raya = document.getElementById(dots.idJuego)
                  .getElementsByClassName('raya-h');
   }
   
   // PINTANDO LAS RAYAS
   dots.pintaRaya = function(){
      
      this.rayaH = document.getElementById(dots.idJuego).getElementsByClassName('raya-h');
      this.rayaV = document.getElementById(dots.idJuego).getElementsByClassName('raya-v');
      
      // RECORRO LAS RAYAS HORIZONTALES.
      for(var i = 0; i < this.rayaH.length; i++){
         this.rayaH[i].addEventListener('click', function(e){
            e.preventDefault();
 
            this.setAttribute('rayado', 'true');
            //Pongo color.
            this.style.background  = '#000';
            //Saco atrubutos de posición.
            console.log(dots.getPosicion(this));
            var pos = dots.getPosicion(this);
            // 
            //if()
            
         });
      }
      for(var i = 0; i < this.rayaV.length; i++){
         this.rayaV[i].addEventListener('click', function(e){
            e.preventDefault();
            console.log('clic');
            //Pongo color.
            this.style.background  = '#000';
            //Saco atributos de posición.
            this.col = this.getAttribute('col');
            this.pos = this.getAttribute('fila');
            console.log(this.col+' '+this.pos);
         });
      }
   }
   
   // COMPRUEBA SI
   dots.compruebaRaya = function(){
      //this.raya = document
   }
   
}
var punto = new PuntoYRaya('puntoYRaya');
punto.tablero(12,12);
punto.pintaRaya();