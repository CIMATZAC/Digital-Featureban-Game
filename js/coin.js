jQuery(document).ready(function($){

  $('#coin').on('click', function(){
    var flipResult = Math.random();
    $('#coin').removeClass();
    setTimeout(function(){
      if(flipResult <= 0.5){
        $('#coin').addClass('heads');        
      }
      else{
        $('#coin').addClass('tails');
      }
    }, 100);
  });
});
