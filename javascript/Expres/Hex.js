const hex = {

  factory: null,
  size: 0,
  initializeHex: function(hexSize) {
    hex.size = hexSize;
    hex.factory = Honeycomb.extendHex({
      size: hexSize,
      orientation: 'flat',
      background_color: null,
      render(draw) {
        const { x, y } = this.toPoint()
        const corners = this.corners()
        this.background_color = map.getBackground(this);
        this.draw = grid.drawing
          .polygon(corners.map(({ x, y }) => `${x},${y}`))
          .stroke({ width: Math.min(Math.floor(hexSize / 20), 1), color: '#ccc'})
          .translate(x, y)
          .fill(this.background_color)
      },

      highlight() {
        this.draw
          .stop(true, true)
          .fill(this.background_color)
          .animate(500)
          .fill({opacity: 0, color: 'none' })
          .animate(500)
          .fill(this.background_color)
        for (let neighbor of grid.instance.neighborsOf(this)) { 
          neighbor.draw
            .stop(true, true)
            .fill(neighbor.background_color)
            .animate(500)
            .fill({opacity: 0, color: 'none' })
            .animate(500)
            .fill(neighbor.background_color)
        }
      }
    })
  }
}