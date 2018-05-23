$(function() {
    
  var output = '<h1>**HISTORY**</h1>';

  $.ajax({
      type : 'GET',
      dataType: 'jsonp',
      url: 'http://localhost:1752/Service1.svc/SensorData/?callback=?',
      success: SensorData
      });
  
  function SensorData(data) {
       output += '<h1>I loop</h1>';
      $.each(data,function(key, item) {
          if (item.id === 1)
            output += '<h1 style="background-color:DodgerBlue;"> ' + item.id +'  </h1>';
          else 
            output += '<h3> ' + item.id  +'  </h3>';

          output += '<div class=history> ' + item.SensorNumber +'  </div>';
      });
      $('.history').html(output);
  }
  
  function showFail(data){
      output += '<h1>I FEJL</h1>';
      $('.teachers').html(output);
  }

});