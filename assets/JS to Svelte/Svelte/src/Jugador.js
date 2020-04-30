import Tablero from "./Tablero";
class Jugador {
  
  constructor(prof_max = -1) {
    this.prof_max = this.prof_max;
    this.nodes_map = new Map();
  }
  Movimiento_optimo(tablero, maximizing = true, callback = () => {}, prof = 0) {
    //Da error si el primer argumento de la funcion no es un tablero
    //!if (tablero.constructor.name !== "Tablero")
      //!throw "El primer argumento de la función Movimiento_optimo debe ser una instancia de la clase Tablero";
    //Esto directamente lo copié, no sé para qué sirve.
    const TRACE = window.trace_ttt;
    //Limpia la variable Nodes_Map si se hace un nuevo movimiento
    if (prof == 0) this.nodes_map.clear();
    if (tablero.EstadoTablero() || prof == this.prof_max) {
      if (tablero.EstadoTablero().Ganador == "x") {
        return 100 - prof;
      } else if (tablero.EstadoTablero().Ganador == "o") {
        return -100 + prof;
      }
      return 0;
    }
    if (TRACE) {
      let p = maximizing ? "Maximizing" : "Minimizing";
      console.log(
        `%c${p} player's turn Depth: ${depth}`,
        turn_and_available_moves
      );
      console.log(
        `%cAvailable Moves: ${tablero.MovimientosDisponibles().join(" ")}`,
        turn_and_available_moves
      );
      if (prof == 0) tablero.TableroConsola();
    }

    //En caso de que el usuario esté maximizando
    if (maximizing) {
      //Se inicializa del mejor al peor valor posible
      let mejor = -100;
      //Hace un ciclo entre todas las celdas vacías
      tablero.MovimientosDisponibles().forEach(index => {
        let child = new Tablero(tablero.Estado.slice());
        child.Insertar("x", index);
        let node_value = this.Movimiento_optimo(
          child,
          false,
          callback,
          prof + 1
        );
        //Se actualiza el valor máximo
        mejor = Math.max(mejor, node_value);

        //Console Tracing Code
        if (TRACE) {
          if (prof == 0) {
            console.log(
              `%cMove ${index} yielded a heuristic value of ${node_value}`,
              parent_heuristic
            );
          } else {
            console.log(
              `%cChild move ${index} yielded a heuristic value of ${node_value}`,
              child_heuristic
            );
          }
        }

        if (prof == 0) {
          var movimientos = this.nodes_map.has(node_value)
            ? `${this.nodes_map.get(node_value)},${index}`
            : index;
          this.nodes_map.set(node_value, movimientos);
        }
      });
      if (prof == 0) {
        if (typeof this.nodes_map.get(mejor) == "string") {
          var arr = this.nodes_map.get(mejor).split(",");
          var rand = Math.floor(Math.random() * arr.length);
          var ret = arr[rand];
        } else {
          ret = this.nodes_map.get(mejor);
        }
        if (TRACE) {
          this.nodes_map.forEach((index, value) => {
            console.log(`%cMove(s) ${index} yielded ${value}`, all_moves);
          });
          console.log(`%cMove ${ret} was decided as the best move`, best_move);
        }
        callback(ret);
        this.MejorJugada=ret;
        return ret;
      }
      return mejor;
    }

    if (!maximizing) {
      //Se inicializa la variable "Mejor" con la mayor puntiación posible
      let mejor = 100;
      //se hace un ciclo entre todas las celdas
      tablero.MovimientosDisponibles().forEach(index => {
        let child = new Tablero(tablero.Estado.slice());
        child.Insertar("o", index);
        let node_value = this.Movimiento_optimo(
          child,
          true,
          callback,
          prof + 1
        );
        mejor = Math.min(mejor, node_value);

        //Console Tracing Code
        if (TRACE) {
          if (prof == 0) {
            console.log(
              `%cMove ${index} yielded a heuristic value of ${node_value}`,
              parent_heuristic
            );
          } else {
            console.log(
              `%cChild move ${index} yielded a heuristic value of ${node_value}`,
              child_heuristic
            );
          }
        }
        if (prof == 0) {
          var movimientos = this.nodes_map.has(node_value)
            ? this.nodes_map.get(node_value) + "," + index
            : index;
          this.nodes_map.set(node_value, movimientos);
        }
      });
      if (prof == 0) {
        if (typeof this.nodes_map.get(mejor) == "string") {
          var arr = this.nodes_map.get(mejor).split(",");
          var rand = Math.floor(Math.random() * arr.length);
          var ret = arr[rand];
          
        } else {
          ret = this.nodes_map.get(mejor);
        }
        
        callback(ret);
        return ret;
      }
      return mejor;
    }
   }
}
export default Jugador;
