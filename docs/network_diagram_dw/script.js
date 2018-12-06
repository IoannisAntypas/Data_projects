var svg = d3.select("svg"),    
    width = +svg.attr("width"),
    height = +svg.attr("height");

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink())
    //.force("charge", d3.forceManyBody().strength(-200))
    .force('charge', d3.forceManyBody()
      .strength(-200)
      .theta(0.8)
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
      .range([5, 25])

  var link = svg.append("g")
                .style("stroke", "#aaa")
                .selectAll("line")
                .data(graph.links)
                .enter().append("line");

  var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(graph.nodes)
            .enter().append("circle")
            .attr("r", 2)
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

        // .style("fill", function(d) {            // <== Add these
        //     if (d.close <= 400) {return "red"}  // <== Add these


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
        .attr("y2", function(d) { return d.target.y; });


    node
       .attr("r", function(d){return radiusScale(d.count)})
       .style("fill", "#efefef")
       .style("stroke", "#424242")
       .style("stroke-width", "1px")
       .attr("cx", function (d) { return d.x+5; })
       .attr("cy", function(d) { return d.y-3; });


    label
        .attr("x", function(d) { return d.x; })
            .attr("y", function (d) { return d.y; })
            .style("font-size", "20px")
            .style("fill", "#333")
            .style('font-weight','bold')
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

