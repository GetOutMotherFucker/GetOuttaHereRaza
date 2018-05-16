$(function() {
    $.getJSON('api', Getsignal);
  
    $('.restsignal-form').submit(function(e) {
      e.preventDefault();
      $.post('api', {
        Id: $('#restsignal-form-name').val(),
        Tid: $('#restsignal-form-tid').val(),
        Sensornumber: $('#restsignal-form-sensornumber').val()
      }, Getsignal);
    });
  
    $('.restsignal-sensornumber').on('click', function(e) {
        if (e.target.className == 'glyphicon glyphicon-remove') {
          $.ajax({
            url: 'api/' + e.target.id,
            type: 'GET',
            success: Getsignal
          }); //ajax
        } // the target is a delete button
    }); //feedback messages
  
    function Getsignal(data) {
     var output = '';
     $.each(data,function(key, item) {
       output += '     <div class="restsignal-item item-list media-list">';
       output += '       <div class="restsignal-item media">';
       output += '       <div class="media-left"><button class="restsignal-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
       output += '         <div class="restsignal-info media-body">';
       output += '           <div class="restsignal-head">';
       output += '             <div class="restsignal-tid">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
       output += '           </div>';
       output += '           <div class="restsignal-sensornumber">' + item.message + '</div>';
       output += '         </div>';
       output += '       </div>';
       output += '     </div>';
     });
     $('.restsignal-sensornumber').html(output);
    }
  });