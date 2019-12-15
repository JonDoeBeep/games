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
           "xx     mm mmmmmmmm mxxxxxxxxxo",
           "xx       mmmmmmm     xxxxxxxxx",
           "xx            m     m xxxxxxxx",
           "xx      m            mm xxxxxx",
           "xx                    mxxxxxxx",
           "xx                     xxxxxxx",
           "xx                     xxxxxxx",
           "xx                      xxxxxx",
           "xx                      xxxxxx",
           "xx                        xxxx",
           "xx                        xooo",
           "xx                      oooooo",
           "xx                     ooooooo",
           "xxxo                   ooooooo",
           "xxoo                  oooooooo",
           "xxoo                  oooooooo",
           "xooo                  oooooooo",
           "xxoo oooo              ooooooo",
           "xxo o  o             ooooooooo",
           "xxxxo                ooooooooo",
           "xxxooo              oooooooooo",
           "xxxxoooxo            ooooooooo",
           "xxxoxxxo      mm    oooooooooo",
           "xxxxxxxo     mm     oooooooooo",
           "xxxxxo     mm       oooooooooo",
           "xxxxxo   mm           oooooooo",
           "xxxxo            oo    ooooooo",
           "xxxx            ooooo   oooooo",
           "xx  m     oo  oooooooo  oooooo",
           "xx mm    ooooooooooooooooooooo",
           "  m   oooooooooooooooooooooooo",
           "    o oooooooooooooooooooooooo",
           "  oooooooooooooooooooooooooooo",
           "oooooooooooooooooooooooooooooo"],

  getGridBackground: function(hexCoordinates) {
    switch(this.rawMap[hexCoordinates.x][hexCoordinates.y]) {
      case "o": return { opacity: 1, color: 'aqua' };  break;
      case "m": return { opacity: 1, color: 'gray' };  break;
      case "x": return { opacity: 1, color: 'black' }; break;
      default:  return { opacity: 1, color: 'white' };
    } 
  }
}