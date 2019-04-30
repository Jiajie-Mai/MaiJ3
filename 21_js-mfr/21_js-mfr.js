// Jiajie Mai
// SoftDev2 pd6
// K#21--Onions, Bell Peppers, and Celery, Oh My!  J
// 2019-04-30

var data;
var total = document.getElementById("total");
var apa = document.getElementById("asian-average");
var faa = document.getElementById("5-or-asain");

d3.json("https://raw.githubusercontent.com/stuy-softdev/workshop/master/thluffy/21_js-mfr/2006_-_2012_School_Demographics_and_Accountability_Snapshot.json?token=AFRFQK7N644MC7AUI4U22J242DI26", function(error, d) {
  data = d;
  //console.log(data)

  // filter out row entries that represent school PS104
  var PS104 = data.filter(function(n){
      return (n["DBN"]=="20K104");
  })
  console.log(PS104);

  var num_enrolled = PS104.map(function(n){
      return parseInt(n["total_enrollment"]);
  });

  total.innerHTML = num_enrolled;
  console.log(num_enrolled);

  function getSum(total, num) {
    return total + num;
  }

  var num_asian_percent = PS104.map(function(n){
      return parseInt(n["asian_per"]);
  });
  length = num_asian_percent.length;
  var sum_asian_percent_average = num_asian_percent.reduce(function(a,b){
      return a + b;
  });
  asian_percent_average = sum_asian_percent_average / length ;
  apa.innerHTML = asian_percent_average;
  console.log(asian_percent_average);

  var num_asian = PS104.map(function(n){
      return parseInt(n["asian_num"]);
  });
  var num_fifth = PS104.map(function(n){
      return parseInt(n["grade5"]);
  });
  var num_fifth_and_asian = num_asian.map(function (num, idx) {
    return num + num_fifth[idx];
  });
  var sum_fifth_and_asian = num_fifth_and_asian.reduce(function(a,b){
      return a + b;
  });
  faa.innerHTML = sum_fifth_and_asian
  console.log(sum_fifth_and_asian)
});
