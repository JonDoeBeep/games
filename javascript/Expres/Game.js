window.onload = function() {
  gridParent = document.getElementById("grid");
  gridParent.style.marginTop = "0px";
  gridParent.style.marginLeft = "0px";

  grid.initializeDrawing();
  gridHex.initializeHex(30);
  grid.initializeGrid();
  gridClickDrag.initializeGridDrag(gridParent);
  gridZoom.initializeGridZoom(gridParent);  
}

const game = {
  
}