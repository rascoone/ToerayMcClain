$(document).ready(function(){
    
    navigate();
//    movements();
    
   $(window).resize(function(){ 
       
    });
    $(window).scroll(function(){ 
        
    });
    
});
//let racc1,cat1,squ1,dee1,cutt1=0;
function navigate(){
        $('#homie').click(function(){ 
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('slideOff');
            $('#aboutChunk').addClass('slideOff');
            $('#detailsChunk').removeClass('comeOn');
            $('#details2Chunk').removeClass('comeOn');
            $('#aboutChunk').removeClass('comeOn');
            $('#homeChunk').addClass('comeOn');
            console.log('clicked');
        });
        $('#deets').click(function(){ 
            $('#homeChunk').addClass('slideOff');
            $('#details2Chunk').addClass('slideOff');
            $('#aboutChunk').addClass('slideOff');
            $('#details2Chunk').removeClass('comeOn');
            $('#homeChunk').removeClass('comeOn');
            $('#aboutChunk').removeClass('comeOn');
            $('#detailsChunk').addClass('comeOn');
            console.log('clicked');
        });
         $('#aboot').click(function(){ 
             $('#homeChunk').addClass('slideOff');
            $('#detailsChunk').addClass('slideOff');
             $('#details2Chunk').addClass('slideOff');
             $('#homeChunk').removeClass('comeOn');
             $('#detailsChunk').removeClass('comeOn');
             $('#details2Chunk').removeClass('comeOn');
            $('#aboutChunk').addClass('comeOn');
            console.log('clicked');
        });
        
        $('#tempBoxOne').click(function(){ 
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkOne').addClass('comeOn');            console.log('clicked');
        });
        $('#tempBoxTwo').click(function(){ 
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunktwo').addClass('comeOn');            console.log('clicked');
        });
       
}
