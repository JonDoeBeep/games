const grid = {
  instance: null,
  factory: null,
  drawing: null,

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
    aLine.setAttribute('stroke-width', 8);
    grid.drawing.node.appendChild(aLine);
   
  }
}