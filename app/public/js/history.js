$(function() {
    
    var output = '<h1>**HISTORY**</h1>';
  
    $.ajax({
        type : 'GET', //get metode
        dataType: 'jsonp', //datatype json
        url: 'http://localhost:1752/Service1.svc/SensorData/?callback=?', //fra vores web service 
        success: SensorData
        });
    
    function SensorData(data) {
         output += '<h1>SensorData</h1>';
        $.each(data,function(key, item) {

              output += '<h1 style="background-color:DodgerBlue;"> ' + item.ID +'  </h1>';
              output += '<h1 style="background-color:DodgerBlue;"> ' + item.Tid +'  </h1>';
              output += '<h1 style="background-color:DodgerBlue;"> ' + item.SensorNumber +'  </h1>'; 
        });
        $('.history').html(output);
    }
  
  });

  
//   <table border="1" width="100%"> 
//   <tr>
//   <th>Id</th> 
//   <th>Tid</th> 
//   <th>SensorNummer</th> 
//   </tr>
//   @foreach(var row in db.Query(query))
//   {
//   <tr> 
//   <td>@row.Id</td> 
//   <td>@row.Tid</td> 
//   <td>@row.SensorNummer</td> 
//   </tr> 
//   }
//   </table> 