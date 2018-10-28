// (function() { 

//       var width = 1000,
//         height = 800;

//     var svg = d3.select("#chart")
//         .append("svg")
//         .attr("height", height)
//         .attr("width", width )
//         .append("g")
//         .attr("transform", "translate(0,-50)")

// var div = d3.select("body")
//     .append("div")
//     .attr("id", "tooltip")
//     .style("opacity", 0)

// var defs = svg.append("defs");

//   var first = svg.append("text")
//         .attr('fill', 'black')
//         .attr('stroke','none')
//         .attr("x", 120)
//         .attr("y", 95)
//         .attr("font-family", "Arial")
//         .attr("font-size", 23)
//         .text("Lower Reach")

//     var second = svg.append("text")
//         .attr('fill', 'black')
//         .attr('stroke','none')
//         .attr("x", 420)
//         .attr("y", 95)
//         .attr("font-family", "Arial")
//         .attr("font-size", 23)
//         .text("Middle Reach")


//     var third = svg.append("text")
//         .attr('fill', 'black')
//         .attr('stroke','none')
//         .attr("x", 780)
//         .attr("y", 95)
//         .attr("font-family", "Arial")
//         .attr("font-size", 23)
//         .text("Higher Reach")


// // var div = d3.select("body")
// //     .append("div")
// //     .attr("id", "tooltip")
// //     .style("opacity", 0)

// defs.append("pattern")
//     // .attr("id", 'europe')
//     .attr('height', '100%')
//     .attr('width', '100%')
//     .attr('patternContentUnits', 'objectBoundingBox')
//     .append('image')
//     .attr('height', 1)
//     .attr('width', 1)
//     .attr('preserveAspectRation', 'none')
//     .attr('xmlns:xlink', 'http://www.w3.org/1999/xlink');

// var c = d3.scaleOrdinal()
// .domain(['lower quantile','middle quantile','upper quantile'])
// .range(['#E53D32','#17448A','grey']);

// var bubbleStroke = d3.scaleOrdinal()
// .domain(['lower quantile','middle quantile','upper quantile'])
// .range(['#E57773','#2162C7','lightgrey' ]);


// var radiusScale = d3.scaleSqrt().domain([21,405338]).range([10, 70])

// var stroke_color = function(d) {
//         return bubbleStroke(d.quantile)            
//         }


// var forceXSeperate = d3.forceX(function(d) {
//     if(d.quantile === "lower quantile") {
//         return 200
//     } 

//     if(d.quantile === "middle quantile") {
//         return 500
//     } 

//     else {
//         return 850
//     }
//     }).strength(0.4)

// var forceCollide =  d3.forceCollide(function(d) {
//         return radiusScale(d['Twitter Followers']) + 2
//     })


// var forceXCombine = d3.forceX(500).strength(0.03)

// //check again
// var simulation = d3.forceSimulation()
//     .force("x", forceXSeperate)
//     .force('y', d3.forceY(height/2).strength(0.05))
//     .force('collide',forceCollide)

//     d3.queue()
//         .defer(d3.csv, "data/df_complete_100.csv")
//         .await(ready)



//     function ready (error, datapoints) {

//     datapoints.forEach(function(d) {
//       d['Twitter Retweets'] = +d['Twitter Retweets'];
//       d['Reach'] = +d['Reach'];
//     });



//       var g = svg.selectAll(".Applicant")
//         .data(datapoints)
//         .enter().append('g')        
//         .attr('class', 'Applicant')
          


//       g.append('circle')
//         .style('opacity', 1)
//         .attr('class','circle')
//         .attr('r', function(d) {
//             return radiusScale(d['Twitter Followers']);
//         })
//         .attr('fill', function(d){
//             return c(d.quantile)
//         })
//         .style("stroke", stroke_color)
//         .style("stroke-width", 1.5)
//                 .on("click",function(d){
//                   window.open(d.Url)})

//          simulation.nodes(datapoints)
//          .on('tick', ticked)

//     g.append("text")
//          .attr('class','texts')
//          .text(function(d) { return d.Author; })
//         .style("font-size", function(d) { return Math.min(2 * radiusScale(d['Twitter Followers']), (2 * radiusScale(d['Twitter Followers']) - 8) / this.getComputedTextLength() * 15) + "px"; })
//         .attr("dy", ".35em")
//         .style('text-anchor', 'middle')
//         .style('fill','white')
//         .style('font-weight','thin')
//         .style('stroke-width','0.1')



//       function ticked() {
//         g.selectAll('.circle')
//             .attr('cx', (d) =>{
//                 return d.x
//             })
//             .attr('cy', (d) =>{
//                 return d.y
//             })
//         g.selectAll('.texts')
//             .attr('x', (d) =>{
//                 return d.x
//             })
//             .attr('y', (d) =>{
//                 return d.y
//             })



//         g.on("mouseover", function(d){

//             div.transition()
//             .duration(200)
//             .style("opacity", 1)
//             var element = d3.select(this);
//             element.style("stroke", function(d) {
//                 return bubbleStroke(d.quantile)

//             })

//             element.style("stroke-width", 1.5)
//             element.style('opacity', 0.6)
//             div.html("Author: "+ d.Author + "</br>"  + " Twitter Followers: " + d3.format(",.0f")(d['Twitter Followers']) +"</br>" + "Impressions: "+ d3.format(",.0f")(d.Impressions) + "</br>" + "Impact: "+ d3.format(",.0f")(d.Impact))
//             div.style("visibility", "visible")
//             .style("left", (d3.event.pageX - 180) + "px")    
//             .style("top", (d3.event.pageY - 185) + "px")
//               })
//             .on("mouseout", function(d){
//                 var element = d3.select(this)
//                 element.style("stroke", stroke_color)
//                 element.style('opacity', 1)
//                 d3.selectAll('.texts')
//                     .style('stroke','white')
//                     .style('stroke-width','0.1')
//                 div.style("visibility", "hidden")
//               })

        

//           }




// }

// })();