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
      width: gridMap.terrain.length,
      height: gridMap.terrain[0].length,
      onCreate(hex) {
        hex.render(grid.drawing)
      }
    });
  },

  initializeRivers: function() {
    gridMap.riverSegments.forEach(this.drawRiverSegment);
  },

  drawRiverSegment: function(segment) {
    var aLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    var hex = grid.instance.get([segment.x, segment.y]);
    aLine.setAttribute('x1', hex.toPoint().x + hex.corners()[segment.id].x);
    aLine.setAttribute('y1', hex.toPoint().y + hex.corners()[segment.id].y);
    aLine.setAttribute('x2', hex.toPoint().x + hex.corners()[(segment.id + 1) % 6].x);
    aLine.setAttribute('y2', hex.toPoint().y + hex.corners()[(segment.id + 1) % 6].y);
    aLine.setAttribute('stroke', 'deepskyblue')
    aLine.setAttribute('stroke-linecap', 'round')
    aLine.setAttribute('stroke-width', 8);
    grid.drawing.node.appendChild(aLine);
    
  }
}