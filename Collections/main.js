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
    $('#aboutChunk').addClass('slideOff');
    $('#homeChunk').addClass('slideOff');
    $('#details2Chunk').addClass('slideOff');
    $('#detailsChunk').addClass('slideOff');
    $('#chunkOne').addClass('slideOff');
    $('#chunkTwo').addClass('slideOff');
    $('#homeChunk').addClass('comeOn');
    
        $('#homie').click(function(){ 
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('slideOff');
            $('#aboutChunk').addClass('slideOff');
            $('#detailsChunk').removeClass('comeOn');
            $('#details2Chunk').removeClass('comeOn');
            $('#aboutChunk').removeClass('comeOn');
            $('#homeChunk').addClass('comeOn');
            $('h1').text('SHOWING MY AGE WITH GAMING');
            $('body').removeClass('scrollBars');
            $('#chunkOne').removeClass('comeOn');
            $('#chunkOne').addClass('slideOff');
            $('#chunkTwo').removeClass('comeOn');
            $('#chunkTwo').addClass('slideOff');
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
            $('h1').text('SHOWING MY AGE WITH GAMING');
            $('body').addClass('scrollBars');
            $('#chunkOne').addClass('slideOff');
            $('#chunkOne').removeClass('comeOn');
            $('#chunkTwo').removeClass('comeOn');
            $('#chunkTwo').addClass('slideOff');
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
             $('h1').text('MY COLLECTIONS INFLUENCE');
             $('body').removeClass('scrollBars');
             $('#chunkOne').removeClass('comeOn');
            $('#chunkOne').addClass('slideOff');
            $('#chunkTwo').removeClass('comeOn');
            $('#chunkTwo').addClass('slideOff');
            console.log('clicked');
        });
        
        $('#gameOne').click(function(){ 
            $('h1').text('FLYING DRAGON - XBOX, FIGHTING');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkOne').addClass('comeOn'); 
            console.log('clicked');
        });
        $('#gameTwo').click(function(){ 
            $('h1').text('UNREAL TOURNAMENT - XBOX, FIRST PERSON SHOOTER');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkTwo').addClass('comeOn');   
            console.log('clicked');
        });
        $('#gameThree').click(function(){ 
            $('h1').text('WHACKED! - XBOX, PARTY');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkThree').addClass('comeOn');   
            console.log('clicked');
        });
    $('#gameFour').click(function(){ 
            $('h1').text('KUNG FU CHAOS - XBOX, FIGHTER PARTY');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkFour').addClass('comeOn');   
            console.log('clicked');
        });
       $('#gameFive').click(function(){ 
            $('h1').text('POKEMON YELLOW - GAMEBOY, ADVENTURE PUZZLE');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkFive').addClass('comeOn');   
            console.log('clicked');
        });
    $('#gameSix').click(function(){ 
            $('h1').text('MORTAL KOMBAT - XBOX, FIGHTER');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkFive').addClass('comeOn');   
            console.log('clicked');
        });
    $('#gameSeven').click(function(){ 
            $('h1').text('RUNESCAPE - PC, MMO');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkSix').addClass('comeOn');   
            console.log('clicked');
        });
    $('#gameEight').click(function(){ 
            $('h1').text('ARCANIST - PC, COMBAT ARENA');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkSeven').addClass('comeOn');   
            console.log('clicked');
        });
    $('#gameNine').click(function(){ 
            $('h1').text('SUPER SMASH BROS BRAWL - WII, PARTY FIGHTER');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkNine').addClass('comeOn');   
            console.log('clicked');
        });
    $('#gameTen').click(function(){ 
            $('h1').text('SOUL CALIBUR - XBOX 360, FIGHTER');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkTen').addClass('comeOn');   
            console.log('clicked');
        });
}
