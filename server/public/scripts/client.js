$(document).ready(function() {
  // console.log('jquery loaded');
  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(response) {
      console.log(response);
    }
  });

});
