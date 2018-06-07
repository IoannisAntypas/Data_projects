var svg = d3.select("#stacked"),
    margin = {top: 10, right: 60, bottom: 20, left: 60},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g")
      .attr('class', 'group')
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
    .rangeRound([0, width])
    .padding(0.3);

var yBand = d3.scaleBand()
    .rangeRound([height, 0])
    .padding(.2);
var yLinear = d3.scaleLinear();

var z = d3.scaleOrdinal()
    .domain(['imports', 'exports'])
    .range( ['#FFD900','#0050BE']);
// var z = d3.scaleOrdinal(d3.schemeCategory20);


var stack = d3.stack()

d3.csv("data_bars.csv", function(error, data) {
  if (error) throw error;

  // reshape data
  // obtain unique dates
  var dates = d3.nest()
      .key(function(d) { return d.date; })
      .entries(data)
      .map(function(d) { return d.key; });

  // obtain unique groups
  var groups = d3.nest()
      .key(function(d) { return d.group; })
      .entries(data)
      .map(function(d) { return d.key; });

  var groupedData = dates.map(function(d) {
    var currentItem = {
      date:  d
    };
    groups.forEach(function(group) {
      var currentGroupItem = data.filter(function(f) {
        //if (f.Group== Group&& f.date == d) console.log(f);
        return f.group == group && f.date == d;
      });
      if (currentGroupItem.length) {
        currentItem[group] = +currentGroupItem[0].value;
      } else {
        currentItem[group] = 0;
      }
    })
    return currentItem;
  });
  groupedData.map(function(d) {
    d.total = d['imports'] + d['exports'];
  })
  console.log(groupedData);

  var keys = ['imports', 'exports']
  stack.keys(keys);
  stackedData = stack(groupedData);
  console.log(stackedData);

  x.domain(groupedData.map(function(d) { return d.date; }));
  yBand.domain(keys);
  yLinear.domain([0, d3.max(groupedData, function(d) { return d.total; })])
    .range([height, yBand.bandwidth()])

  // z.domain(keys);

  var group = g.selectAll(".group")
    .data(stackedData)
    .enter().append("g")
      .attr("class", function(d) { return "group " + d.key; })
      .attr("fill", function(d) { return z(d.key); });

  g.selectAll('.group-label')
    .data(stackedData)
    .enter()
    .append("text")
    .attr("class", function(d) { return "group-label " + d.key; })
    .attr("x", -40)
    .attr("y", function(d) { return yLinear( (d[0][0] + d[0][1]) / 2); })
    .attr("font-family", "Arial")
    .attr("font-size",20)
    .attr("dy", ".35em")
    .text(function(d) { return (d.key).replace(/^\w/, c => c.toUpperCase()) });

  var bars = group.selectAll("rect")
    .data(function(d) { return d; })
    .enter()

  bars.append("rect")
    .attr("x", function(d) { return x(d.data.date); })
    .attr("y", function(d) { return yLinear(d[1]); })
    .attr("height", function(d) { return yLinear(d[0]) - yLinear(d[1]); })
    .attr("width", x.bandwidth());
  bars.append('text')
    .attr('class', 'label')
    .attr("x", function(d) { return x(d.data.date) + 5})
    .attr("y", function(d) { return yLinear(d[0]); })
    .attr("dy", "-.3em")
    .text(function(d, i) {
      var g = d3.select(this).node().parentNode.classList[1];
      return d.data[g];
    });

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height  + ")")
      .call(d3.axisBottom(x))
      .attr("font-size",14);

  // g.append("g")
  //   .attr("class", "axis axis--y")
  //   .call(d3.axisLeft(yBand))

    d3.selectAll("input").on("change", change);

    function change() {
      if (this.value === "multiples") toMultiples();
      else toStacked();
    }
    var dur = 1000;

    function toMultiples() {
      var bw = yBand.bandwidth() + yBand.step() / 4,
        baseline = yLinear(0);
      for (var i = 1; i < keys.length; i++ ) {
        d3.selectAll('.' + keys[i] + ' rect')
          .transition().duration(dur)
          .attr('transform', function(d) {
              offset = (i * bw) - (baseline - yLinear(d[0]));
              return 'translate(0, ' + ((-1) * offset + 50) + ')';
          })
        d3.selectAll('.' + keys[i] +  ' .label')
          .transition().duration(dur)
          .attr('transform', function(d) {
            offset = (i * bw) - (baseline - yLinear(d[0]));
            return 'translate(0, ' + ((-1) * offset + 50) + ')';
          })
        d3.selectAll('.group-label.' + keys[i])
          .transition().duration(dur)
          .attr('transform', function(d) {
              offset = (i * bw) - (baseline - yLinear(d[0][0]));
              return 'translate(0, ' + ((-1) * offset + 50) + ')';
          })
      }
    }

    function toStacked() {
      d3.selectAll('rect').transition().duration(dur).attr('transform', 'translate(0,0)')
      d3.selectAll('.label').transition().duration(dur).attr('transform', 'translate(0,0)')
      d3.selectAll('.group-label').transition().duration(dur).attr('transform', 'translate(0,0)')
    }
});

