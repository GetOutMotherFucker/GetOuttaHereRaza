$(function() {
    
    var output = '<h1>History</h1>';
  
    $.ajax({
        type : 'GET', //get metode
        dataType: 'jsonp', //datatype json
        url: 'http://localhost:1752/Service1.svc/SensorData/?callback=?', //fra vores web service 
        success: SensorData
        });
    
    function SensorData(data) {
         output += '<h2>SensorData</h2>';
        $.each(data,function(key, item) {

              output += '<h3> ' + "ID: " + item.ID + '  </h3>';
              output += '<h3 style="background-color:#ccccff;"> ' + "Tid: " + item.Tid +'  </h3>';
              output += '<h3 style="background-color:#0000ff;"> ' + "SensorNumber: " + item.SensorNumber +'  </h3>';
              output += '<h3> ' + "________________________________________________________________________________________________________________________________" + '  </h3>';
        });
        $('.history').html(output);
    }
  
  });