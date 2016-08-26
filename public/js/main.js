$(document).ready(function(){
  
  // delete jquery event handler
  $('').on('click', function(){

  });





  $.ajax({
    url: '/organizations',

  }).done(function(){
    $(this).remove('delete_org')
  })



});