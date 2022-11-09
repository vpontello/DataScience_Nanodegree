var year = [2015];
var arable_land_brazil = [33.8100342899258];
var country_name_brazil = 'Brazil';

var arable_land_germany = [47.9592041483809];
var country_name_germany = 'Germany';

var arable_land_china = [56.2229587724434];
var country_name_china = 'China';

var trace1 = {
/* TODO: Use the country name and arable land data to make a bar chart */
  x:year,
  y:arable_land_brazil,
  name:country_name_brazil,
  mode:'bar',
  type:'bar'
};

var trace2 = {
/* TODO: Use the country name and arable land data to make a bar chart */
  x:year,
  y:arable_land_germany,
  name:country_name_germany,
  mode:'bar',
  type:'bar'
};

var trace3 = {
/* TODO: Use the country name and arable land data to make a bar chart */
  x:year,
  y:arable_land_china,
  name:country_name_china,
  mode:'bar',
  type:'bar'
};

var layout = {
 /* TODO: include a title for the chart */
  title:"Percent of Land used for agriculture in 2015"
};

var data = [trace1,trace2,trace3];

Plotly.newPlot('plot2', data, layout);