const grid = {
  instance: null,
  factory: null,
  drawing: null,
  initializeDrawing: function() {
    grid.drawing = SVG(gridParent);
  },

  initializeGrid: function() {
    grid.factory = Honeycomb.defineGrid(gridHex.factory);
    grid.instance = grid.factory.rectangle({
      width: gridMap.rawMap.length,
      height: gridMap.rawMap[0].length,
      onCreate(hex) {
        hex.render(grid.drawing)
      }
    });
  }
}