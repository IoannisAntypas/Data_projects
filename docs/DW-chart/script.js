(function() {
  var margin = { top: 140, left: 150, right: 150, bottom: 100},
    height = 800 - margin.top - margin.bottom,
    width = 600 - margin.left - margin.right;

  var svg = d3.select("#chart")
        .append("svg")
        .attr("height", height + margin.top + margin.bottom)
        .attr("width", width + margin.left + margin.right)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.queue()
    .defer(d3.csv, "data.csv", function(d){

      d.average = +d.average
      d.y_scale = +d.y_scale

      return d

    })
    .await(ready)

    function ready(error, data) {

      var yScale = d3.scaleLinear()
        .domain(d3.extent(data, function(d){
          return d.y_scale
        }))
        .range([50,600])      
        console.log(yScale(3))


      var radiusScale = d3.scaleSqrt()
        .domain(d3.extent(data, function(d){
          return d.average
        }))
        .range([5,80])

      var xScale = d3.scaleOrdinal()
        .domain(d3.extent(data, function(d){
          return d.European_Union
        }))
        .range([30, 200])


      var colorScale = d3.scaleOrdinal()
        .domain(d3.extent(data, function(d){
          return d.European_Union
        }))
        .range(['#D44820','#00A5FF'])

        svg.selectAll("circle")
          .data(data)
          .enter().append("circle")
          .attr("r", function(d){
            return radiusScale(d.average)
          })

          .attr("cx", function(d){
            return xScale(d.European_Union)
          })
          .attr("cy", function(d){
            return yScale(d.y_scale)
            // sort
          })
          .attr("fill", function(d){
            return colorScale(d.European_Union)
          })


    }
})();






