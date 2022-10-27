var config = { responsive: true }

// Pembuatan Scatter Chart
let scatter_data = [{
  x: [2007, 2008, 2009, 2010, 2011, 2012, 2013],
  y: [8002, 8352, 11013, 11164, 9516, 11044, 10268],
  mode: 'markers'
}]

let scatter_layout = {
  title: 'Scatter Chart Komoditi Produksi Padi',
  xaxis: {
    title: 'Year',
    range: [2006, 2014]
  },
  yaxis: {
    title: 'Jumlah Produksi Komoditi Padi (Ton)',
    range: [5000, 12000]
  },
}

Plotly.newPlot('scatterChart', scatter_data, scatter_layout, config)


// Pembuatan Line Chart
let line_data = [{
  x: [2007, 2008, 2009, 2010, 2011, 2012, 2013],
  y: [8002, 8352, 11013, 11164, 9516, 11044, 10268],
  mode: 'lines'
}]

let line_layout = {
  title: 'Line Chart Komoditi Produksi Padi',
  xaxis: {
    title: 'Year',
    range: [2006, 2014]
  },
  yaxis: {
    title: 'Jumlah Produksi Komoditi Padi (Ton)',
    range: [5000, 12000]
  },
}

Plotly.newPlot('lineChart', line_data, line_layout, config)


// Pembuatan Line Chart dengan Tag
var exp = "x + 17"

// Generate values
var x_line_tag = []
var y_line_tag = []
for (var x = 0; x <= 10; x += 1) {
  x_line_tag.push(x)
  y_line_tag.push(eval(exp))
}

// Define Data
var line_tag_data = [{
  x: x_line_tag,
  y: y_line_tag,
  mode: "lines"
}]

// Define Layout
var line_tag_layout = {
  title: "Harga minyak per Barel",
  xaxis: {
    title: "Bulan",
    range: [0, 10]
  },
  yaxis: {
    title: "Harga (USD)",
    range: [0, 30]
  }
}

// Display using Plotly
Plotly.newPlot("lineTag", line_tag_data, line_tag_layout, config)


// Pembuatan Multiple Line Chart
var exp1 = "x-1";
var exp2 = "4*x-22";
var exp3 = "7*x + 7";
// Generate values

var x1Values = [];
var x2Values = [];
var x3Values = [];
var y1Values = [];
var y2Values = [];
var y3Values = [];

for (var x = 0; x <= 10; x += 1) {
  x1Values.push(x);
  x2Values.push(x);
  x3Values.push(x);
  y1Values.push(eval(exp1));
  y2Values.push(eval(exp2));
  y3Values.push(eval(exp3));
}

// Define Data
var data = [
  { x: x1Values, y: y1Values, mode: "lines" },
  { x: x2Values, y: y2Values, mode: "lines" },
  { x: x3Values, y: y3Values, mode: "lines" }
];

//Define Layout
var layout = {
  title: "Data Pertumbuhan Penjualan Komoditi Padi",
  xaxis: {
    title: "Bulan",
    range: [0, 10]
  },
  yaxis: {
    title: "Jumlah Penjualan (Ton)",
  }
};

// Display using Plotly
Plotly.newPlot("multipleLine", data, layout, config);


// Pembuatan Bar Chart
var x_axis = ['Jakarta Utara', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Pusat']
var y_bar1 = [11335, 10450, 11393, 9848, 12265]
var y_bar2 = [11500, 12795, 11223, 11018, 12250]
let bar_data = [
  {
    x: x_axis,
    y: y_bar1,
    name: 'Harga Beras (Liter)',
    type: 'bar',
    text: y_bar1.map(String),
    textposition: 'auto',
    hoverinfo: 'none',
  },
  {
    x: x_axis,
    y: y_bar2,
    name: 'Harga Gula (Kg)',
    type: 'bar',
    text: y_bar2.map(String),
    textposition: 'auto',
    hoverinfo: 'none',
  }
]

let bar_layout = {
  title: 'Bar Chart Harga Beras (liter) vs Gula (kg) di Provinsi Jakarta (Rp)',
  barmode: 'group',
}

Plotly.newPlot('barChart', bar_data, bar_layout, config)


// Pembuatan Horizontal Bar Chart
var y_axis_hbar = ['Jakarta Utara', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Pusat']
var x_hbar1 = [11308, 12027, 11750, 11215, 11500]
var x_hbar2 = [11335, 10450, 11393, 9848, 12265]

let hbar_data = [
  {
    x: x_hbar1,
    y: y_axis_hbar,
    name: 'Harga Minyak Goreng (Liter)',
    type: 'bar',
    orientation: "h",
    text: x_hbar1.map(String),
    textposition: 'auto',
    hoverinfo: 'none',
  },
  {
    x: x_hbar2,
    y: y_axis_hbar,
    name: 'Harga Beras (Liter)',
    type: 'bar',
    orientation: "h",
    text: x_hbar2.map(String),
    textposition: 'auto',
    hoverinfo: 'none',
  }
]

let hbar_layout = {
  title: 'Bar Chart Harga Migor (liter) vs Beras (kg) di Provinsi Jakarta (Rp)',
  barmode: 'group',
}

Plotly.newPlot('hbarChart', hbar_data, hbar_layout, config)


// Pembuatan Pie Chart
var pie_data = [{
  values: [120, 160, 200, 158, 175],
  labels: ['Jakarta Utara', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Pusat'],
  type: 'pie',
  textinfo: 'percent',
}]

let pie_layout = {
  title: 'Pie Chart total Komoditi Daging di Provinsi Jakarta (Ton)',
}

Plotly.newPlot('pieChart', pie_data, pie_layout, config)


// Pembuatan Donut Chart
var donut_data = [{
  values: [2421, 4934, 3970, 5177, 991],
  labels: ['Jakarta Utara', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Pusat'],
  type: 'pie',
  textinfo: 'percent',
  hole: 0.4,
}]

let donut_layout = {
  title: 'Donut Chart total Komoditi Cabe di Provinsi Jakarta (Kg)',
}

Plotly.newPlot('donutChart', donut_data, donut_layout, config)


// Pembuatan Line Chart (gelombang)
var exp = "Math.sin(x)+Math.cos(x+2/99)"

var xValues = []
var yValues = []
for (var x = 0; x <= 10; x += 0.1) {
  xValues.push(x)
  yValues.push(eval(exp))
}

var data = [{ x: xValues, y: yValues, mode: "lines" }]
var layout = {
  title: "Data Keuntungan Penjualan Cabe di Provinsi Jakarta",
  xaxis: {
    title: "Bulan",
    range: [0, 10]
  },
  yaxis: {
    title: "Keuntungan (Rp juta)",
    range: [-2, 2]
  }
}

Plotly.newPlot("myPlot", data, layout, config)


// Pembuatan Scatter Chart (gelombang)
var exp = "Math.sin(x)+Math.cos(x+2/99)"

var xValues = []
var yValues = []
for (var x = 0; x <= 10; x += 0.1) {
  xValues.push(x)
  yValues.push(eval(exp))
}

var data = [{ x: xValues, y: yValues, mode: "markers" }]
var layout = {
  title: "Data Keuntungan Penjualan Cabe di Provinsi Jakarta",
  xaxis: {
    title: "Bulan",
    range: [0, 10]
  },
  yaxis: {
    title: "Keuntungan (Rp juta)",
    range: [-2, 2]
  }
}

Plotly.newPlot("scatter_wave", data, layout, config)


