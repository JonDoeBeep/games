const mouseEvent = {

  initializeDrag: function(elmnt) {
    // how many pixels difference is a click, not a drag
    const dragSensitivity = 8;

    var posX = 0, posY = 0, deltaX = 0, deltaY = 0, totalX = 0; totalY = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      posX = e.pageX;
      posY = e.pageY;
      document.onmouseup = dragMouseUp;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      deltaX = e.pageX - posX;
      deltaY = e.pageY - posY;
      elmnt.style.marginTop = (parseInt(elmnt.style.marginTop) + deltaY) + "px"; 
      elmnt.style.marginLeft = (parseInt(elmnt.style.marginLeft) + deltaX) + "px"; 
      if (parseInt(elmnt.style.marginTop) < minY) {
        elmnt.style.marginTop = minY + "px";
      }
      if (parseInt(elmnt.style.marginTop) > maxY) {
        elmnt.style.marginTop = maxY + "px";
      }
      if (parseInt(elmnt.style.marginLeft) < minX) {
        elmnt.style.marginLeft = minX + "px";
      }
      if (parseInt(elmnt.style.marginLeft) > maxX) {
        elmnt.style.marginLeft = maxX + "px";
      }
      posX = posX + deltaX;
      posY = posY + deltaY;
      totalX = totalX + deltaX;
      totalY = totalY + deltaY;
    }
 
    function dragMouseUp(e) {
      document.onmouseup = null;
      document.onmousemove = null;

      // click
      if (Math.abs(totalX) + Math.abs(totalY) < dragSensitivity) {
        var offsetX = e.pageX - gridParent.offsetLeft;
        var offsetY = e.pageY - gridParent.offsetTop;
        const hexCoordinates = grid.factory.pointToHex([offsetX, offsetY])
        const hex = grid.instance.get(hexCoordinates)

        if (hex) {
          hex.highlight()
        }
      }

      totalX = 0;
      totalY = 0;
    }
  },

  initializeZoom: function(elmnt) {

    elmnt.onwheel = zoomGrid;

    function zoomGrid(e) {
      e = e || window.event;
      e.preventDefault();
      if (hex.size + e.deltaY > 0) {
        hex.initializeHex(hex.size + e.deltaY / 2);
      }

      // redraw grid, reinitialize mouse event(s)
      document.getElementById('grid').innerHTML = "";
      grid.drawing = SVG(gridParent);
      grid.initializeGrid();
      mouseEvent.initializeDrag(gridParent);
    }
  }
}