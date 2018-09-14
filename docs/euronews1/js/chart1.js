
var margin = { left:80, right:20, top:50, bottom:100 };

var width = 400 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var flag = true;

var t = d3.transition().duration(1700);
    
var g = d3.select("#chart-area")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

var xAxisGroup = g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height +")");

var yAxisGroup = g.append("g")
    .attr("class", "y axis");



// X Scale
var x = d3.scaleBand()
    .range([0, width])
    .padding(0.2);

// Y Scale
var y = d3.scaleLinear()
    .range([height, 0]);

// f


// X Label
g.append("text")
    .attr("y", height + 50)
    .attr("x", width / 2)
    .attr("font-size", "25px")
    .attr("text-anchor", "middle")
    .attr('font-family', 'Arial')
    .text("Type of spending");

// Y Label
var yLabel = g.append("text")
    .attr("y", -31)
    .attr("x", width / 2)
    .attr("font-size", "25px")
    .attr('font-weight', 'bold')
    .attr('font-family', 'Arial')
    .attr("text-anchor", "middle");

var c = d3.scaleOrdinal()
.domain(['Humanitarian','Non-Humanitarian','Total'])
.range(['yellow','blue','green']);



d3.csv("data/total_spending.csv", function(data){
    console.log(data);

    // Clean data
    data.forEach(function(d) {
        d['Amount Contracted in €'] = +d['Amount Contracted in €'];
        d['Net payments made to projects in €'] = +d['Net payments made to projects in €'];
    });

    d3.interval(function(){
        var newData = flag ? data : data;

        update(newData)
        flag = !flag
    }, 2000);

    // Run the vis for the first time
    update(data);
});

     g.append("text")
        .attr("x", width/2 - 200)
        .attr("y", height/2 + 270)
        .attr("font-family", "Arial")
        .attr("font-size",12)
        .text("graphics by @IoannisAntypas")
        .style("font-weight", "normal")
        .style('fill','grey')
        .style('text-decoration', 'underline')
        .on("mouseover", function(d) {
        d3.select(this).style("cursor", "pointer")}) 
        .on("mouseout", function(d) {
        d3.select(this).style("cursor", "default")})
        .on("click", function() { window.open("https://twitter.com/IoannisAntypas"); });


function update(data) {
    var value = flag ? "Amount Contracted in €" : "Net payments made to projects in €";

    x.domain(data.map(function(d){ return d.Type }));
    y.domain([0, d3.max(data, function(d) { return d['Amount Contracted in €'] })])

    // X Axis
    var xAxisCall = d3.axisBottom(x);
    xAxisGroup.transition(t).call(xAxisCall);

    // Y Axis
    var yAxisCall = d3.axisLeft(y)
       .tickFormat(function(d){ return "€ " + d/1000000 + " Mil"; })
    yAxisGroup.transition(t).call(yAxisCall);

    // JOIN new data with old elements.
    var rects = g.selectAll("rect")
        .data(data, function(d){
            return d.Type;
        });

    // EXIT old elements not present in new data.
    rects.exit()
        .attr("fill", "red")
    .transition(t)
        .attr("y", y(0))
        .attr("height", 0)
        .remove();

    // ENTER new elements present in new data...
    rects.enter()
        .append("rect")
            .attr("fill", "#17448A")
            .attr("class", "bar")
            .attr("y", y(0))
            .attr("height", 0)
            .attr("x", function(d){ return x(d.Type) })
            .attr("width", x.bandwidth)

            // AND UPDATE old elements present in new data.
            .merge(rects)
            .transition(t)
                .attr("x", function(d){ return x(d.Type) })
                .attr("width", x.bandwidth)
                .attr("y", function(d){ return y(d[value]); })
                .attr("height", function(d){ return height - y(d[value] ); })

            rects.on("mouseover", function(d) {


                    var xPosition = 230 ;
                    var yPosition =  height / 2;


                    d3.select("#tooltip")
                        .style("left", xPosition + "px")
                        .style("top", yPosition + "px")
                        .select("#value")
                        .text(d[value]);


                    d3.select("#tooltip").classed("hidden", false);

               })
               .on("mouseout", function() {


                    d3.select("#tooltip").classed("hidden", true);

               })

               .on("click", function() {
                    sortBars();
               });

                           var sortOrder = false;

            var sortBars = function() {


                sortOrder = !sortOrder;

                rects.selectAll("rect")
                   .sort(function(a, b) {
                        if (sortOrder) {
                            return d3.ascending(a, b);
                        } else {
                            return d3.descending(a, b);
                        }
                    })
                   .transition()
                   .delay(function(d, i) {
                       return i * 50;
                   })
                   .duration(1000)
                   .attr("x", function(d, i) {
                        return xScale(i);
                   });

            };




    var label = flag ? "Contracted Funds" : "Paid Funds";
    yLabel.text(label);

}


