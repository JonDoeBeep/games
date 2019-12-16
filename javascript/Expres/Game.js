window.onload = function() {
  gridParent = document.getElementById("gridParent");

  // initialize hex for grid factory method
  hex.initializeHex(30);

  // initialize grid
  grid.drawing = SVG(gridParent);

  grid.initializeGrid();

  // initialize event listeners
  mouseEvent.initializeDrag(gridParent);
  mouseEvent.initializeZoom(gridParent);  
}
