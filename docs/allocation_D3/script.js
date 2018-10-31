var margin = { left:100, right:50, top:50, bottom:100 };

var width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
    
var svg = d3.select("#chart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

var xAxisGroup = svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height +")");

var yAxisGroup = svg.append("g")
    .attr("class", "y axis");

var yAxisGroup1 = svg.append("g")
    .attr("class", "y axis 1")
    .attr("transform", 'translate('+width+",0)");

// var xAxisGroup1 = svg.append("g")
//     .attr("class", "x axis")
//     .attr("transform", "translate(0," + height +")");

// X Scale
var x = d3.scaleBand()
    .range([0, width])
    .padding(0.2);

// Y Scale
var y = d3.scaleLinear()
    .range([height, 0]);


// // parse date
var parseTime = d3.timeParse("%Y-%m-%d");

// X1 Scale
var x1 = d3.scaleBand()
    .range([0, width]);

// Y Scale 1
var y1 = d3.scaleLinear()
    .range([height, 0]);

var valueline = d3.line()
    .x(function(d) { return x1(parseTime(d.Date)); })
    .y(function(d) { return y1(d.individuals); })
    .curve(d3.curveLinear);

// X Label
svg.append("text")
    .attr("y", height + 50)
    .attr("x", width / 2)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Month");

// Y Label
svg.append("text")
    .attr("y", -80)
    .attr("x", -(height / 2))
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Revenue");

// Line var

d3.csv("data.csv", function(data){

    // Clean data
    data.forEach(function(d) {
        d.EU_contribution = +d.EU_contribution
        d.individuals = +d.individuals
        d.date = parseTime(d.Date);
    });

//     update(data);
// });

// function update(data) {
    x.domain(data.map(function(d){ return d.Date }));
    y.domain([0, d3.max(data, function(d) { return d.EU_contribution })])

    x1.domain(data.map(function(d){return parseTime(d.Date)}))
    y1.domain([0, d3.max(data,function(d){return d.individuals})])
    // X Axis
    var xAxisCall = d3.axisBottom(x);
    xAxisGroup.call(xAxisCall);

    // Y Axis
    var yAxisCall = d3.axisLeft(y)
        .tickFormat(function(d){ return "€" + d; });
    yAxisGroup.call(yAxisCall);

    var y1AxisCall = d3.axisRight(y1)
    yAxisGroup1.call(y1AxisCall);

    // var x1AxisCall = d3.axisRight(x1)
    // xAxisGroup1.call(x1AxisCall);


    // JOIN new data with old elements.
    var rects = svg.selectAll("rect")
        .data(data)
        .attr("y", function(d){ return y(d.EU_contribution); })
        .attr("x", function(d){ return x(d.Date) })
        .attr("height", function(d){ return height - y(d.EU_contribution); })
        .attr("width", x.bandwidth)
        rects.enter()
          .append("rect")
              .attr("y", function(d){ return y(d.EU_contribution); })
              .attr("x", function(d){ return x(d.Date) })
              .attr("height", function(d){ return height - y(d.EU_contribution); })
              .attr("width", x.bandwidth)
              .attr("fill", "grey");


      svg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("d", valueline);

console.log(data)

});
