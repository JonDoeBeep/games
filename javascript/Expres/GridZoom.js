const gridZoom = {

  initializeGridZoom: function(elmnt) {
    var hexSize = 30;
    elmnt.onwheel = zoomGrid;

    function zoomGrid(e) {
      e = e || window.event;
      e.preventDefault();
      hexSize = hexSize + e.deltaY;
      // console.log(hexSize);
      // grid[0,0].size = hexSize;
      // document.getElementById('gridParent').style.display = 'none';
      // document.getElementById('gridParent').style.display = 'block';
    }
  }
}