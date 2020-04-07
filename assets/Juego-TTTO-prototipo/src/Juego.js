import Tablero from "./Clases/Tablero";//*Se importan las distintas clases necesarias para el funcionamiento del juego.
import Jugador from "./Clases/Jugador";
alert("hola, esto es una prueba")
let tablero = new Tablero(['x','','o','x','','x','o','','o'])
tablero.TableroConsola();
let j = new Jugador();
console.log(j.Movimiento_optimo(tablero));
console.log(j.nodes_map)
console.log(tablero.EstadoTablero());