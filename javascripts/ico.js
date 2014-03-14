(function() {

  var width = 1800,
      height = 1600;

  var velocity = [.001, .0005],
      t0 = Date.now();

  var projection = d3.geo.orthographic()
      .scale(height / 2 - 10);

  var canvas = d3.select("body").append("canvas")
      .attr("id", "ico-bg")
      .attr("width", width)
      .attr("height", height);

  var context = canvas.node().getContext("2d");

  context.strokeStyle = "#005084";
  context.lineWidth = .5;

  var faces;

  var output = d3.select("output");

  var polys = 2;

  /*var input = d3.select("input")
      .on("change", function() { geodesic(polys); })
      .each(function() { geodesic(polys); });*/

  geodesic(polys);

  d3.timer(function() {
    var time = Date.now() - t0;
    projection.rotate([time * velocity[0], time * velocity[1]]);
    redraw();
  });

  function redraw() {
    context.clearRect(0, 0, width, height);

    faces.forEach(function(d) {
      d.polygon[0] = projection(d[0]);
      d.polygon[1] = projection(d[1]);
      d.polygon[2] = projection(d[2]);
      if (d.visible = d.polygon.area() > 0) {
        context.fillStyle = d.fill;
        context.beginPath();
        drawTriangle(d.polygon);
        context.fill();
      }
    });

    context.beginPath();
    faces.forEach(function(d) {
      if (d.visible) {
        drawTriangle(d.polygon);
      }
    });
    context.stroke();
  }

  function drawTriangle(triangle) {
    context.moveTo(triangle[0][0], triangle[0][1]);
    context.lineTo(triangle[1][0], triangle[1][1]);
    context.lineTo(triangle[2][0], triangle[2][1]);
    context.closePath();
  }

  function geodesic(subdivision) {
    output.text(subdivision);

    faces = d3.geodesic.polygons(subdivision).map(function(d) {
      d = d.coordinates[0];
      d.pop(); // use an open polygon
      //onsole.log(d[0][0]);
      var i;
      /*if (d[0][0] == 0) {
        i = 0;
      } else {
        i = Math.round(180 / Math.abs(d[0][0]));
      }*/

      i = Math.floor(Math.random() * 9);
      var c = colorbrewer.GnBu[9][i];
      //console.log(180 / Math.abs(d[0][0]));
      d.fill = c; //d3.hsl(210, 1, (Math.abs(d[0][0]) / 1000)) + "";
      d.polygon = d3.geom.polygon(d.map(projection));
      return d;
    });

    redraw();
  }

})();