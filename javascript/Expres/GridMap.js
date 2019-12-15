const gridMap = {

  rawMap: ["oooooooooooooooooooooooooooooo",
           "oooooooooooooooooooooooooooooo", 
           "oooooooooo  oooooooooooooooooo", 
           "xooooo   mmm  oooooooooooooooo",
           "xxo    mmm     mmooooooooooooo",
           "ooo   m  mmmmm  mooooooooooooo",
           "xxmmmmm       mmm oooooooooooo",
           "xx  m mm  m   m m  ooooooooooo",
           "xx    mmm m  m  mmmxxooooooooo",
           "xxm  m         m   xxxxoxooooo",
           "xxmmmm         mm   xooxxxoooo",
           "xxmmmm       mmmm   xxooxxoooo",
           "xxmm mm m  o mmmmm   xxxooxxxo",
           "xx m  mm m mmmm  mm  xxxooooxx",
           "xx  mmmmmmmmmm   mmmmxxxxxoooo",
           "xx  mmmmm  m    mmmmmxxxxxxooo",
           "xx    mmmm   mmm mmm xxxxxxxxo",
           "xx     mm mmmmmmmm mxxxxxxxxxx"],

  getGridBackground: function(hexCoordinates) {
    switch(this.rawMap[hexCoordinates.x][hexCoordinates.y]) {
      case "o": return { opacity: 1, color: 'aqua' };  break;
      case "m": return { opacity: 1, color: 'gray' };  break;
      case "x": return { opacity: 1, color: 'black' }; break;
      default:  return { opacity: 1, color: 'white' };
    } 
  }
}