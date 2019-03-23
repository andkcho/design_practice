$("#flipbook").turn({
    width: 600,
    height: 340,
    autoCenter: true
  
   
});

setInterval(function() {
 if ( $('#flipbook').turn('page')==$('#flipbook').turn('pages') ) {
   console.log ($('#flipbook').turn('page'));
    $('#flipbook').turn('page', 1);
 } else {
    $('#flipbook').turn('next');
 }
}, 3500);