/**
 * Created by Administrator on 2017-08-30.
 */
/* defining locations to display.
 Each position must have a key, an alpha and delta position (or x and y if you want to display a static location).
 Any additional key can be reached via callbacks functions.
 */
var locations = {
  obj1: {
    alpha: Math.PI / 4,
    delta: 0,
    name: 'location 1'
  },
  obj2: {
    alpha: 1 * Math.PI / 4,
    delta: -2 * Math.PI / 4,
    name: 'location 2'
  },
  obj3: {
    alpha: 2 * Math.PI / 4,
    delta: 0,
    name: 'location 3'
  },
  obj4: {
    alpha: 3 * Math.PI / 4,
    delta: 3 * Math.PI / 4,
    name: 'location 4'
  },
  obj5: {
    alpha: 2.2 * Math.PI / 4,
    delta: -1.1 * Math.PI / 4,
    name: 'location 5'
  }
};
$('#sphere').earth3d({
  locationsElement: $('#locations'),
  dragElement: $('#locations'), // where do we catch the mouse drag
  locations: locations
});

