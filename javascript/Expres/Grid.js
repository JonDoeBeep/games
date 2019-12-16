const grid = {
  instance: null,
  factory: null,
  drawing: null,
  minX: 0,
  minY: 0,
  maxX: 0,
  maxY: 0,

  initializeGrid: function() {
    grid.factory = Honeycomb.defineGrid(hex.factory);

    // grid instance
    grid.instance = grid.factory.rectangle({
      width: map.terrain.length,
      height: map.terrain[0].length,
      onCreate(currentHex) {
        currentHex.render(grid.drawing)
      }
    });

    // rivers
    map.riverSegments.forEach(this.drawRiverSegment);

    // grid margins, svg margins
    const bottomRightCoords = grid.instance.get([map.terrain.length - 1, map.terrain[0].length - 1]).toPoint();
    minX = -hex.size - bottomRightCoords.x + gridParent.parentElement.clientWidth;
    minY = -hex.size - bottomRightCoords.y + gridParent.parentElement.clientHeight;
    maxX = -hex.size;
    maxY = -hex.size;
    gridParent.style.marginTop = maxY + "px";
    gridParent.style.marginLeft = maxX + "px";
    document.getElementById('grid').clientHeight = bottomRightCoords.y + "px";
    document.getElementById('grid').clientWidth = bottomRightCoords.x + "px";
    grid.drawing.node.setAttribute("height", (bottomRightCoords.y + hex.size) + "px");
    grid.drawing.node.setAttribute("width", (bottomRightCoords.x + hex.size) + "px");
  },

  drawRiverSegment: function(segment) {
    var aLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    var currentHex = grid.instance.get([segment.x, segment.y]);
    aLine.setAttribute('x1', currentHex.toPoint().x + currentHex.corners()[segment.id].x);
    aLine.setAttribute('y1', currentHex.toPoint().y + currentHex.corners()[segment.id].y);
    aLine.setAttribute('x2', currentHex.toPoint().x + currentHex.corners()[(segment.id + 1) % 6].x);
    aLine.setAttribute('y2', currentHex.toPoint().y + currentHex.corners()[(segment.id + 1) % 6].y);
    aLine.setAttribute('stroke', 'deepskyblue')
    aLine.setAttribute('stroke-linecap', 'round')
    aLine.setAttribute('stroke-width', hex.size / 4);
    grid.drawing.node.appendChild(aLine);
   
  }
}