document.getElementById("btn-menu").addEventListener("click", menuDesplegable)

          function menuDesplegable (){
                    var divMenu = document.getElementById("container-menu");

                    if(divMenu.className == "container-menu"){
                              divMenu.className = "container-menu2"
                    }
                    else{
                              divMenu.className = "container-menu"
                    }
          }

                    document.getElementById("Ubicacion").addEventListener("click", mapaDesplegable)
        
                    function mapaDesplegable(){
                              var liCiudad = document.getElementById("Cabimas");
                              var botonCiudad = document.getElementById("Ubicacion")
                              if(liCiudad.className == "cabimas"){
                                        liCiudad.className = "cabimas2"
                                        botonCiudad.innerHTML = "⬆⬆Ciudad⬆⬆"
                              }
                              else{
                                        liCiudad.className = "cabimas"
                                        botonCiudad.innerHTML = "⬇⬇Ciudad⬇⬇"

                              }
                    }
