(function() {
  var width = 700,
      height = 800;

  var svg = d3.select('#chart')
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .append('g')
    .attr("transform", "translate(0,-50)")

    var c = d3.scaleOrdinal()
      .domain(['Living Assistance','Cash Transfers','Migration management','Assitance to Vulnurable Groups / Education','Infrastructure support'])
      .range(['#E53D32','#17448A','grey','orange','yellow']);

    var bubbleStroke = d3.scaleOrdinal()
      .domain(['Living Assistance','Cash Transfers','Migration management','Assitance to Vulnurable Groups / Education','Infrastructure support'])
      .range(['#E53D32','#17448A','grey','orange','yellow']);

    var stroke_color = function(d) {
      return bubbleStroke(d.Type)
    }

    var radiusScale = d3.scaleSqrt()
      .range([5, 45]);


    var forceXSeperate = d3.forceX(function(d){
      if(d.Type === 'Living Assistance') {
        return 100
      }

      if (d.Type === 'Cash Transfers') {
        return 225
      }

      if (d.Type === 'Migration management') {
        return 370
      }

      if (d.Type === 'Infrastructure support') {
        return 500
      }

      if (d.Type ==='Assitance to Vulnurable Groups / Education') {
        return 600
      }
      }).strength(0.5)


    var forceCollide =  d3.forceCollide(function(d) {
      return radiusScale(d.Amount_Paid) + 2
      });

    var simulation = d3.forceSimulation()
      .force('x', forceXSeperate)
      .force('y', d3.forceY(height/2 +100).strength(0.05))
      .force('collide',forceCollide)

// Text part

      svg.append("circle")
                .attr("r", 45)
                .attr("cx", 80)
                .attr("cy", 220)
                .style("stroke", "#6c6c6c")
                .style("fill-opacity", 0)
                .style("stroke-width", 1.5)
                .style("stroke-dasharray", ("3,3"))
                .style("opacity", 0.5)

      svg.append("circle")
                .attr("r", 20)
                .attr("cx", 80)
                .attr("cy", 245)
                .style("stroke", "#6c6c6c")
                .style("fill-opacity", 0)
                .style("stroke-width", 1.5)
                .style("stroke-dasharray", ("3,3"))
                .style("opacity", 0.5)


      svg.append("circle")
                .attr("r", 5)
                .attr("cx", 80)
                .attr("cy", 260)
                .style("stroke", "#6c6c6c")
                .style("fill-opacity", 0)
                .style("stroke-width", 1.5)
                .style("stroke-dasharray", ("3,3"))
                .style("opacity", 0.5)


      svg.append("line")
                  .attr("x1", 85)
                  .attr("y1", 118)
                  .attr("x2", 140)
                  .attr("y2", 118)
                  .attr("stroke-width", 1)
                  .attr("transform", "translate(0, 57)")
                  .attr("stroke", "#6c6c6c")
                  .style("stroke-dasharray", ("3,3"))
                  .style("opacity", 0.5)


      svg.append("line")
                  .attr("x1", 85)
                  .attr("y1", 125)
                  .attr("x2", 140)
                  .attr("y2", 125)
                  .attr("stroke-width", 1)
                  .attr("transform", "translate(0, 100)")
                  .attr("stroke", "#6c6c6c")
                  .style("stroke-dasharray", ("3,3"))
                  .style("opacity", 0.5)


      svg.append("line")
                  .attr("x1", 85)
                  .attr("y1", 126)
                  .attr("x2", 140)
                  .attr("y2", 126)
                  .attr("stroke-width", 1)
                  .attr("transform", "translate(0, 130)")
                  .attr("stroke", "#6c6c6c")
                  .style("stroke-dasharray", ("3,3"))
                  .style("opacity", 0.5)

      svg.append("text")
                .attr("x", 140)
                .attr("y", 178)
                .attr("font-family", "Arial")
                .attr("font-size",13)
                .style("fill", "Black")
                .text("More than 100 million euros")
                .style("font-weight", "normal")


      svg.append("text")
                .attr("x", 140)
                .attr("y", 228)
                .attr("font-family", "Arial")
                .attr("font-size",13)
                .style("fill", "Black")
                .text("More than 20 million euros")
                .style("font-weight", "normal")


      svg.append("text")
                .attr("x", 140)
                .attr("y", 259)
                .attr("font-family", "Arial")
                .attr("font-size",13)
                .style("fill", "Black")
                .text("Less than 10 million euros")
                .style("font-weight", "normal")


// text part end


      d3.queue()
        .defer(d3.csv, 'finance.csv')
        .await(ready)

        function ready(error, data){

        data.forEach(function(d){
            d.Amount_Paid = +d.Amount_Paid
          });

        radiusScale.domain(d3.extent(data, function(d){return d.Amount_Paid}));



        var g = svg.selectAll('.Applicant')
          .data(data)
          .enter()
          .append('g')
          .attr('class','Applicant')

          g.append('circle')
            .style('opacity',1)
            .attr('class','circle')
            .attr('r', function(d){
              return radiusScale(d.Amount_Paid)
            })
            .attr('fill', function(d){
              return c(d.Type)
            })
            .style('stroke', stroke_color)
            .style('stroke-width', 1.5)


            simulation.nodes(data)
              .on("tick", ticked)

      g.append("text")
          .attr('class','texts')
          .text(function(d) { return d.Coordinator; })
          .style("font-size", function(d) { 
            return Math.min(2 * radiusScale(d.Amount_Paid), (2 * radiusScale(d.Amount_Paid) - 8) / this.getComputedTextLength() * 15) + "px"; })
          .attr("dy", ".35em")
          .style('text-anchor', 'middle')
          .style('fill','white')
          .style('font-weight','thin')
          .style('stroke-width','0.5')

      function ticked() {
        g.selectAll('.circle')
            .attr('cx', (d) =>{
                return d.x
            })
            .attr('cy', (d) =>{
                return d.y
            })
        g.selectAll('.texts')
            .attr('x', (d) =>{
                return d.x
            })
            .attr('y', (d) =>{
                return d.y
            })

          }


        }
})();