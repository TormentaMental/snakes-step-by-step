class Position {
  /**
   * 
   * @param {*} x 
   * @param {*} y 
   * @param {*} constraint Fuerza la posicion a una grilla
   */
  constructor(x, y, constraint = 10) {
    this.x = Math.round(x / constraint) * constraint;
    this.y = Math.round(y / constraint) * constraint;
  }
    
  /**
   * Genera posiciones al azar
   * 
   * @param {*} maxX 
   * @param {*} maxY 
   * @param {*} except Cualquier posición, excepto esta 
   */
  static getRandom(maxX, maxY, except = null) {
    const min = 0;
    
    const position = new Position(
        Math.floor(Math.random() * (maxX - min)) + min, 
        Math.floor(Math.random() * (maxY - min)) + min
    );  
    
    if(except && position.x === except.x && position.y === except.y) {
        return Position.getRandom(maxX, maxY, except = null);
    }
    
    return position;
  }
}

export default Position;