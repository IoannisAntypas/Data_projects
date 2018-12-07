var svg = d3.select("svg"),    
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = 25;

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().distance(50).strength(1))
    .force('charge', d3.forceManyBody()
      .strength(-200)
      .theta(0.2)
      .distanceMax(150)
    )

    .force("center", d3.forceCenter(width / 2, height / 2));


d3.json("data/export.json", function(error, graph) {
  if (error) throw error;
    console.log(graph)

    graph.links.forEach(function(d){
  //     d.source = d.source_id;    
  //     d.target = d.target_id;
    });           

  var radiusScale = d3.scaleSqrt()
      .domain(d3.extent(graph.nodes, function(d){return d.count}))
      .range([5, 25]);

  // var colorScale = d3.scaleSequential(d3.interpolateGreys)
  //   .domain(d3.extent(graph.links, function(d){return d.payment}))

  var colorScale = d3.scaleLinear()
    .domain(d3.extent(graph.links, function(d){return d.payment}))
    .range(['#bdbdbd', '#252525'])

  var link = svg.append("g")
                .selectAll("line")
                .data(graph.links)
                .enter().append("line");

  var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(graph.nodes)
            .enter().append("circle")
            .attr("r", (radius - 20))
            .call(d3.drag()
              .on("start", dragstarted)
              .on("drag", dragged)
              .on("end", dragended));

    var label = svg.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(graph.nodes)
      .enter().append("text")
        .attr("class", "label")
        .text(function(d) { if (d.rep =='True') {return d.name} });

    var label_2 = svg.append("g")
      .attr("class", "labels_2")
      .selectAll("text")
      .data(graph.nodes)
      .enter().append("text")
        .attr("class", "label_2")
        .text(function(d) { if (d.count >= 2 && d.count < 4 && d.rep =='False') {return d.name} });

    var label_3 = svg.append("g")
      .attr("class", "labels_3")
      .selectAll("text")
      .data(graph.nodes)
      .enter().append("text")
        .attr("class", "label_3")
        .text(function(d) { if (d.payment >= 500000) {return d.name} });


  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; })
        .style("stroke", function(d){return colorScale(d.payment)});
        // .style('stroke-width', '1px');


    node
       .attr("r", function(d){return radiusScale(d.count)})
       .style("fill", "#efefef")
       .style("stroke", "#424242")
       .style("stroke-width", "0.5px")
       .attr("cx", function(d) { return d.x = Math.max(radius, Math.min(width - radius, d.x)); })
       .attr("cy", function(d) { return d.y = Math.max(radius, Math.min(height - radius, d.y)); });


    label
        .attr("x", function(d) { return d.x; })
            .attr("y", function (d) { return d.y; })
            .style("font-size", "20px")
            .style("fill", "#333")
            .style('font-weight','thin')
  

    label_2
        .attr("x", function(d) { return d.x; })
            .attr("y", function (d) { return d.y; })
            .style("font-size", "11px")
            .style("fill", "#333")
            .style('font-weight','thin')

    label_3
        .attr("x", function(d) { return d.x; })
            .attr("y", function (d) { return d.y; })
            .style("font-size", "11px")
            .style("fill", "#333")
            .style('font-weight','thin')

  
  }


  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart()
    d.fx = d.x
    d.fy = d.y
   // simulation.fix(d);
  }

function dragged(d) {
  d.fx = d3.event.x
  d.fy = d3.event.y
//  simulation.fix(d, d3.event.x, d3.event.y);
}

function dragended(d) {
  d.fx = d3.event.x
  d.fy = d3.event.y
  if (!d3.event.active) simulation.alphaTarget(0);
  //simulation.unfix(d);
}
  
run(graph)

    });

