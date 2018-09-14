
(function() { 


    var width = 1000,
        height = 600;

    var svg = d3.select("#chart")
        .append("svg")
        .attr("height", height)
        .attr("width", width )
        .append("g")
        .attr("transform", "translate(0,-50)")



//projects on the right
   var non_humanitarian_text = svg.append("text")
        .attr("class",'appearing_text')
        .attr('fill', 'black')
        .attr('stroke','none')
        .attr('visibility','hidden')
        .attr("x", 600)
        .attr("y", 95)
        .attr("font-family", "Arial")
        .attr("font-size", 23)
        .text("Non-Humanitarian Projects")

    var Turkish_text = svg.append("text")
        .attr("class",'appearing_text')
        .attr('fill', 'black')
        .attr('stroke','none')
        .attr('visibility','hidden')
        .attr("x", 600)
        .attr("y", 95)
        .attr("font-family", "Arial")
        .attr("font-size", 23)
        .text("Turkish Projects")

    var education_text = svg.append("text")
        .attr("class",'appearing_text')
        .attr('fill', 'black')
        .attr('stroke','none')
        .attr('visibility','hidden')
        .attr("x", 600)
        .attr("y", 95)
        .attr("font-family", "Arial")
        .attr("font-size", 23)
        .text("Educational Projects")


// projects on the left

    var Non_Turkish_text = svg.append("text")
        .attr("class",'appearing_text')
        .attr('fill', 'black')
        .attr('stroke','none')
        .attr("x", 150)
        .attr("y", 95)
        .attr('visibility', 'hidden')
        .attr("font-family", "Arial")
        .attr("font-size", 23)
        .text("International Projects")

    var non_education_text = svg.append("text")
        .attr("class",'appearing_text')
        .attr('fill', 'black')
        .attr('stroke','none')
        .attr("x", 150)
        .attr("y", 95)
        .attr('visibility', 'hidden')
        .attr("font-family", "Arial")
        .attr("font-size", 23)
        .text("Non-Educational Projects")


    var humanitarian_text = svg.append("text")
        .attr("class",'appearing_text')
        .attr('fill', 'black')
        .attr('stroke','none')
        .attr("x", 150)
        .attr("y", 95)
        .attr('visibility', 'hidden')
        .attr("font-family", "Arial")
        .attr("font-size", 23)
        .text("Humanitarian Projects")

   var legend19 = svg.append("text")
        .attr('class', 'explanatory_text')
        .attr("x", 30)
        .attr("y", 90)
        .attr("font-family", "Arial")
        .attr("font-size",17)
        .style("fill", "Black")
        .text("Each Circle is a project funded by the EU on the ground")
        .style("font-weight", "normal")

  
   var legend1 = svg.append("text")
        .attr('class', 'explanatory_text')
        .attr("x", 30)
        .attr("y", 113)
        .attr("font-family", "Arial")
        .attr("font-size",17)
        .style("fill", "Black")
        .text("Circles are sized based on euros paid")
        .style("font-weight", "normal")


    var legend2 =   svg.append("text")
        .attr('class', 'explanatory_text')
        .attr("x", 30)
        .attr("y", 138)
        .attr("font-family", "Arial")
        .attr("font-size",17)
        .style("fill", "Black")
        .text("The bigger the circle the more funds paid")
        .style("font-weight", "normal")

    var legend3 = svg.append("circle")
                .attr("r", 50)
                .attr("cx", 80)
                .attr("cy", 220)
                .style("stroke", "#6c6c6c")
                .style("fill-opacity", 0)
                .style("stroke-width", 1.5)
                .style("stroke-dasharray", ("3,3"))
                .style("opacity", 0.5)

        var legend4=svg.append("circle")
                .attr("r", 30)
                .attr("cx", 80)
                .attr("cy", 240)
                .style("stroke", "#6c6c6c")
                .style("fill-opacity", 0)
                .style("stroke-width", 1.5)
                .style("stroke-dasharray", ("3,3"))
                .style("opacity", 0.5)


        var legend5 = svg.append("circle")
                .attr("r", 15)
                .attr("cx", 80)
                .attr("cy", 255)
                .style("stroke", "#6c6c6c")
                .style("fill-opacity", 0)
                .style("stroke-width", 1.5)
                .style("stroke-dasharray", ("3,3"))
                .style("opacity", 0.5)


        var legend6 = svg.append("line")
                  .attr("x1", 85)
                  .attr("y1", 110)
                  .attr("x2", 140)
                  .attr("y2", 110)
                  .attr("stroke-width", 1)
                  .attr("transform", "translate(0, 57)")
                  .attr("stroke", "#6c6c6c")
                  .style("stroke-dasharray", ("3,3"))
                  .style("opacity", 0.5)


         var legend7 = svg.append("line")
                  .attr("x1", 85)
                  .attr("y1", 108)
                  .attr("x2", 140)
                  .attr("y2", 108)
                  .attr("stroke-width", 1)
                  .attr("transform", "translate(0, 100)")
                  .attr("stroke", "#6c6c6c")
                  .style("stroke-dasharray", ("3,3"))
                  .style("opacity", 0.5)


        var legend8 = svg.append("line")
                  .attr("x1", 85)
                  .attr("y1", 108)
                  .attr("x2", 140)
                  .attr("y2", 108)
                  .attr("stroke-width", 1)
                  .attr("transform", "translate(0, 130)")
                  .attr("stroke", "#6c6c6c")
                  .style("stroke-dasharray", ("3,3"))
                  .style("opacity", 0.5)

        var legend9 = svg.append("text")
                .attr("x", 140)
                .attr("y", 172)
                .attr("font-family", "Arial")
                .attr("font-size",13)
                .style("fill", "Black")
                .text("More than 100 million euros")
                .style("font-weight", "normal")


         var  legend10 = svg.append("text")
                .attr("x", 140)
                .attr("y", 215)
                .attr("font-family", "Arial")
                .attr("font-size",13)
                .style("fill", "Black")
                .text("More than 20 million euros")
                .style("font-weight", "normal")


        var legend11 = svg.append("text")
                .attr("x", 140)
                .attr("y", 245)
                .attr("font-family", "Arial")
                .attr("font-size",13)
                .style("fill", "Black")
                .text("Less than 10 million euros")
                .style("font-weight", "normal")

        var legend12 =  svg.append("text")
                    .attr('class', 'explanatory_text')
                    .attr("x", 30)
                    .attr("y", 305)
                    .attr("font-family", "Arial")
                    .attr("font-size",17)
                    .style("fill", "Black")
                    .text("Color shows organization origin")
                    .style("font-weight", "normal")

              // LEGEND COLOR
              // International 
        var legend13 = svg.append("circle")
                .attr("r", 10)
                .attr("cx", 30)
                .attr("cy", 330)
                .style("fill", "#17448A")

        var legend14 = svg.append("text")
                .attr("x", 50)
                .attr("y", 335)
                .attr("font-family", "Arial")
                .attr("font-size",17)
                .style("fill", "#17448A")
                .text("International organizations")
                .style("font-weight", "normal")


              // Turkish

        var legend15 = svg.append("circle")
                .attr("r", 10)
                .attr("cx", 30)
                .attr("cy", 365)
                .style("fill", "#E53D32")

        var legend16 = svg.append("text")
                .attr("x", 50)
                .attr("y", 370)
                .attr("font-family", "Arial")
                .attr("font-size",17)
                .style("fill", "#E53D32")
                .text("Turkish organizations")
                .style("font-weight", "normal")

// not applicable

        var legend20 = svg.append("circle")
                .attr("r", 10)
                .attr("cx", 30)
                .attr("cy", 400)
                .style("fill", "grey")


        var legend21 = svg.append("text")
                .attr("x", 50)
                .attr("y", 405)
                .attr("font-family", "Arial")
                .attr("font-size",17)
                .style("fill", "grey")
                .text("Non allocated projects")
                .style("font-weight", "normal")


         var legend17 =  svg.append("text")
                    .attr('class', 'explanatory_text')
                    .attr("x", 30)
                    .attr("y", 435)
                    .attr("font-family", "Arial")
                    .attr("font-size",17)
                    .style("fill", "Black")
                    .text("Scroll on each circle to see")
                    .style("font-weight", "normal")

        var legend18 =   svg.append("text")
                    .attr('class', 'explanatory_text')
                    .attr("x", 30)
                    .attr("y", 455)
                    .attr("font-family", "Arial")
                    .attr("font-size",17)
                    .style("fill", "Black")
                    .text("the name and funds of each organization")
                    .style("font-weight", "normal")


     svg.append("text")
        .attr("x", width/2 - 470)
        .attr("y", height/2 + 200)
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



var flag = true
    console.log(flag)
var defs = svg.append("defs");

var div = d3.select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("opacity", 0)


defs.append("pattern")
    .attr("id", 'europe')
    .attr('height', '100%')
    .attr('width', '100%')
    .attr('patternContentUnits', 'objectBoundingBox')
    .append('image')
    .attr('height', 1)
    .attr('width', 1)
    .attr('preserveAspectRation', 'none')
    .attr('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    // .attr('xlink:href','turkey_flag.png');

var radiusScale = d3.scaleSqrt().domain([15000,520000000]).range([10, 70])

var c = d3.scaleOrdinal()
.domain(['turkey_flag1.png','eu_flag1.png','none'])
.range(['#E53D32','#17448A','grey']);

var bubbleStroke = d3.scaleOrdinal()
.domain(['turkey_flag1.png','eu_flag1.png','none'])
.range(['#E57773','#2162C7','lightgrey' ]);


// note to self the simulation is a collection
//of forces about where we want our circles to go
// and how we want our circles to interact
//Here we get them on the middle
//Bue we want them not to collide all the time

var forceXSeperate = d3.forceX(function(d) {
    if(d.Humanitarian === "1") {
        return 250
    } else {
        return 750
    }
    }).strength(0.03)

var forceXSeperate_tr = d3.forceX(function(d) {
    if(d.Turkish === "turkey_flag1.png") {
        return 750
    } else {
        return 250
    }
    }).strength(0.03)

var forceXSeperate_edu = d3.forceX(function(d) {
    if(d.instrument === "education") {
        return 750
    } else {
        return 250
    }
    }).strength(0.03)


var forceXCombine = d3.forceX(730).strength(0.03)


var forceCollide =  d3.forceCollide(function(d) {
        return radiusScale(d.Payments) + 2
    })

var simulation = d3.forceSimulation()
    .force("x", forceXCombine)
    .force('y', d3.forceY(height/2).strength(0.05))
    .force('collide',forceCollide)


var stroke_color = function(d) {
        return bubbleStroke(d.Turkish)            
        }


    d3.queue()
        .defer(d3.csv, "data/turkish_vs_nonturkish.csv")
        .await(ready)

    function ready (error, datapoints) {

// function(d){
//             return bubbleStroke(d.Turkish)
//         })
        // var line_split = split.selectAll('.splitter')
        //         .enter()
        //             .append("line")
        //             .attr("x1", 30)
        //             .attr("y1", 30)
        //             .attr("x2", 100)
        //             .attr("y2", 30)
        //             .attr("stroke-width", 1)
        //             .attr("stroke", "#6c6c6c")
        //             .style("stroke-dasharray", ("3,3"))
        //             .style("opacity", 0.5)


        var circles = svg.selectAll(".Applicant")
        .data(datapoints)
        .enter().append('circle')
        .attr('class', 'Applicant')
        .style('opacity', 1)
        .style("stroke", stroke_color)
        .style("stroke-width", 1.5)

        .attr('r', function(d) {
            return radiusScale(d.Payments);
        })
        .attr('fill', function(d){
            return c(d.Turkish)
        })

        d3.select("#type").on('click', function(d){
            simulation
                .force('x', forceXSeperate)
                .alphaTarget(0.4)
                .alpha(0.7)
                .restart()
                humanitarian_text.style("visibility", "visible").enter(humanitarian_text)
                non_humanitarian_text.style("visibility", "visible").enter(non_humanitarian_text)
                education_text.style("visibility", "hidden").enter(education_text)
                non_education_text.style("visibility", "hidden").enter(non_education_text)
                Turkish_text.style("visibility", "hidden").enter(Turkish_text)
                Non_Turkish_text.style("visibility", "hidden").enter(Non_Turkish_text)
                legend1.style("visibility", "hidden").enter(legend1)
                legend2.style("visibility", "hidden").enter(legend2)
                legend3.style("visibility", "hidden").enter(legend3)
                legend4.style("visibility", "hidden").enter(legend4)
                legend5.style("visibility", "hidden").enter(legend5)
                legend6.style("visibility", "hidden").enter(legend6)
                legend7.style("visibility", "hidden").enter(legend7)
                legend8.style("visibility", "hidden").enter(legend8)
                legend9.style("visibility", "hidden").enter(legend9)
                legend10.style("visibility", "hidden").enter(legend10)
                legend11.style("visibility", "hidden").enter(legend11)
                legend12.style("visibility", "hidden").enter(legend12)
                legend13.style("visibility", "hidden").enter(legend13)
                legend14.style("visibility", "hidden").enter(legend14)
                legend15.style("visibility", "hidden").enter(legend15)
                legend16.style("visibility", "hidden").enter(legend16)
                legend17.style("visibility", "hidden").enter(legend17)
                legend18.style("visibility", "hidden").enter(legend18)
                legend19.style("visibility", "hidden").enter(legend19)
                legend20.style("visibility", "hidden").enter(legend20)
                legend21.style("visibility", "hidden").enter(legend21)

   
        })

        d3.select("#turkish").on('click', function(d){
            simulation
                .force('x', forceXSeperate_tr)
                .alphaTarget(0.4)
                .alpha(0.7)
                .restart()
                education_text.style("visibility", "hidden").enter(education_text)
                non_education_text.style("visibility", "hidden").enter(non_education_text)
                Turkish_text.style("visibility", "visible").enter(Turkish_text)
                Non_Turkish_text.style("visibility", "visible").enter(Non_Turkish_text)
                humanitarian_text.style("visibility", "hidden").enter(humanitarian_text)
                non_humanitarian_text.style("visibility", "hidden").enter(non_humanitarian_text)
                legend1.style("visibility", "hidden").enter(legend1)
                legend2.style("visibility", "hidden").enter(legend2)
                legend3.style("visibility", "hidden").enter(legend3)
                legend4.style("visibility", "hidden").enter(legend4)
                legend5.style("visibility", "hidden").enter(legend5)
                legend6.style("visibility", "hidden").enter(legend6)
                legend7.style("visibility", "hidden").enter(legend7)
                legend8.style("visibility", "hidden").enter(legend8)
                legend9.style("visibility", "hidden").enter(legend9)
                legend10.style("visibility", "hidden").enter(legend10)
                legend11.style("visibility", "hidden").enter(legend11)
                legend12.style("visibility", "hidden").enter(legend12)
                legend13.style("visibility", "hidden").enter(legend13)
                legend14.style("visibility", "hidden").enter(legend14)
                legend15.style("visibility", "hidden").enter(legend15)
                legend16.style("visibility", "hidden").enter(legend16)
                legend17.style("visibility", "hidden").enter(legend17)
                legend18.style("visibility", "hidden").enter(legend18)
                legend19.style("visibility", "hidden").enter(legend19)
                legend20.style("visibility", "hidden").enter(legend20)
                legend21.style("visibility", "hidden").enter(legend21)

            })

             d3.select("#education").on('click', function(d){
                    simulation
                .force('x', forceXSeperate_edu)
                .alphaTarget(0.4)
                .alpha(0.7)
                .restart()
                education_text.style("visibility", "visible").enter(education_text)
                non_education_text.style("visibility", "visible").enter(non_education_text)
                Turkish_text.style("visibility", "hidden").enter(Turkish_text)
                Non_Turkish_text.style("visibility", "hidden").enter(Non_Turkish_text)
                humanitarian_text.style("visibility", "hidden").enter(humanitarian_text)
                non_humanitarian_text.style("visibility", "hidden").enter(non_humanitarian_text)
                legend1.style("visibility", "hidden").enter(legend1)
                legend2.style("visibility", "hidden").enter(legend2)
                legend3.style("visibility", "hidden").enter(legend3)
                legend4.style("visibility", "hidden").enter(legend4)
                legend5.style("visibility", "hidden").enter(legend5)
                legend6.style("visibility", "hidden").enter(legend6)
                legend7.style("visibility", "hidden").enter(legend7)
                legend8.style("visibility", "hidden").enter(legend8)
                legend9.style("visibility", "hidden").enter(legend9)
                legend10.style("visibility", "hidden").enter(legend10)
                legend11.style("visibility", "hidden").enter(legend11)
                legend12.style("visibility", "hidden").enter(legend12)
                legend13.style("visibility", "hidden").enter(legend13)
                legend14.style("visibility", "hidden").enter(legend14)
                legend15.style("visibility", "hidden").enter(legend15)
                legend16.style("visibility", "hidden").enter(legend16)
                legend17.style("visibility", "hidden").enter(legend17)
                legend18.style("visibility", "hidden").enter(legend18)
                legend19.style("visibility", "hidden").enter(legend19)
                legend20.style("visibility", "hidden").enter(legend20)
                legend21.style("visibility", "hidden").enter(legend21)

            })


        d3.select("#combine").on('click', function(){
            simulation
                .force('x', forceXCombine)
                .alphaTarget(0.2)
                .alpha(0.4)
                .restart()
                humanitarian_text.style("visibility", "hidden").enter(humanitarian_text)
                non_humanitarian_text.style("visibility", "hidden").enter(non_humanitarian_text)
                education_text.style("visibility", "hidden").enter(education_text)
                non_education_text.style("visibility", "hidden").enter(non_education_text)
                Turkish_text.style("visibility", "hidden").enter(Turkish_text)
                Non_Turkish_text.style("visibility", "hidden").enter(Non_Turkish_text)
                legend1.style("visibility", "visible").enter(legend1)
                legend2.style("visibility", "visible").enter(legend2)
                legend3.style("visibility", "visible").enter(legend3)
                legend4.style("visibility", "visible").enter(legend4)
                legend5.style("visibility", "visible").enter(legend5)
                legend6.style("visibility", "visible").enter(legend6)
                legend7.style("visibility", "visible").enter(legend7)
                legend8.style("visibility", "visible").enter(legend8)
                legend9.style("visibility", "visible").enter(legend9)
                legend10.style("visibility", "visible").enter(legend10)
                legend11.style("visibility", "visible").enter(legend11)
                legend12.style("visibility", "visible").enter(legend12)
                legend13.style("visibility", "visible").enter(legend13)
                legend14.style("visibility", "visible").enter(legend14)
                legend15.style("visibility", "visible").enter(legend15)
                legend16.style("visibility", "visible").enter(legend16)
                legend17.style("visibility", "visible").enter(legend17)
                legend18.style("visibility", "visible").enter(legend18)
                legend19.style("visibility", "visible").enter(legend19)
                legend20.style("visibility", "visible").enter(legend20)
                legend21.style("visibility", "visible").enter(legend21)

        })   // d3.select("h1")
   //  .transition()
   //  .duration(2500)
   //  .on("start", function repeat() {
   //    var t = d3.active(this)
   //        .style("opacity", 0)
   //        .remove();

   //    d3.select("body").append("h1")
   //        .style("opacity", 0)
   //        .text(format(Math.random() * 1e6))
   //      .transition(t)
   //        .style("opacity", 1)
   //      .transition()
   //        .delay(1500)
   //        .on("start", repeat);
   //  });


    simulation.nodes(datapoints)
        .on('tick', ticked)

    function ticked() {
        circles
            .attr('cx', (d) =>{
                return d.x
            })
            .attr('cy', (d) =>{
                return d.y
            })
        circles.on("mouseover", function(d){

            div.transition()
            .duration(200)
            .style("opacity", 1)
            var element = d3.select(this);
            element.style("stroke", function(d) {
                return bubbleStroke(d.Turkish)

            })

            element.style("stroke-width", 1.5)
            element.style('opacity', 0.6)
            div.html("Applicant: "+ d.Applicant + "</br>"  + " Euros contracted: " + d3.format(",.0f")(d['Amount Contracted in €']) +"</br>" + "Euros paid: " + d3.format(",.0f")(d.Payments) + "</br>" + "Project: "+ d.Description)
            div.style("visibility", "visible")
            .style("left", (d3.event.pageX - 180) + "px")    
            .style("top", (d3.event.pageY - 185) + "px")
              })
            .on("mouseout", function(d){
                var element = d3.select(this)
                element.style("stroke", stroke_color)
                element.style('opacity', 1)
                div.style("visibility", "hidden")

              })



    }
    }



})();
