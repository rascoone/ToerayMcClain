$(document).ready(function(){
    
    navigate();
    hourGlassTimer();
    
   $(window).resize(function(){ 
       
    });
    $(window).scroll(function(){ 
        
    });
    
});

function navigate(){
    $(document).ready(function() {
    var loadScreenImg = Math.floor((Math.random()*10)+1);
    console.log(loadScreenImg);
    if(loadScreenImg==1){
        $('#lsOne').addClass('loadScreenShow');
    }else if(loadScreenImg==2){
        $('#lsTwo').addClass('loadScreenShow');
    }else if(loadScreenImg==3){
        $('#lsThree').addClass('loadScreenShow');
    }else if(loadScreenImg==4){
        $('#lsFour').addClass('loadScreenShow');
    }else if(loadScreenImg==5){
        $('#lsFive').addClass('loadScreenShow');
    }else if(loadScreenImg==6){
        $('#lsSix').addClass('loadScreenShow');
    }else if(loadScreenImg==7){
        $('#lsSeven').addClass('loadScreenShow');
    }else if(loadScreenImg==8){
        $('#lsEight').addClass('loadScreenShow');
    }else if(loadScreenImg==9){
        $('#lsNine').addClass('loadScreenShow');
    }else if(loadScreenImg==10){
        $('#lsTen').addClass('loadScreenShow');
    }else if(loadScreenImg==11){
        $('#lsEleven').addClass('loadScreenShow');
    }
         });
    var secrets=0;
    var sec1=0;
    var sec2=0;
    var sec3=0;
    var sec4=0;
    var sec5=0;
    var glassTimer=setInterval(hourGlassTimer, 2000);
    $('#aboutChunk').addClass('slideOff');
    $('#homeChunk').addClass('slideOff');
    $('#details2Chunk').addClass('slideOff');
    $('#detailsChunk').addClass('slideOff');
    $('#chunkOne').addClass('slideOff');
    $('#chunkTwo').addClass('slideOff');
     $('#chunkThree').addClass('slideOff');
     $('#chunkFour').addClass('slideOff');
     $('#chunkFive').addClass('slideOff');
     $('#chunkSix').addClass('slideOff');
     $('#chunkSeven').addClass('slideOff');
     $('#chunkEight').addClass('slideOff');
     $('#chunkNine').addClass('slideOff');
     $('#chunkTen').addClass('slideOff');
    $('#homeChunk').addClass('comeOn');
    
        $('#homie').click(function(){ 
            $('#Glass').removeClass('showGlass');
            $('#Glass').addClass('showGlass');
             $('#aboot').removeClass('youAreHere');
             $('#deets').removeClass('youAreHere');
             $('#homie').addClass('youAreHere');
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
            $('#chunkThree').removeClass('comeOn');
            $('#chunkThree').addClass('slideOff');
            $('#chunkFour').removeClass('comeOn');
            $('#chunkFour').addClass('slideOff');
            $('#chunkFive').removeClass('comeOn');
            $('#chunkFive').addClass('slideOff');
            $('#chunkSix').removeClass('comeOn');
            $('#chunkSix').addClass('slideOff');
            $('#chunkSeven').removeClass('comeOn');
            $('#chunkSeven').addClass('slideOff');
            $('#chunkEight').removeClass('comeOn');
            $('#chunkEight').addClass('slideOff');
            $('#chunkNine').removeClass('comeOn');
            $('#chunkNine').addClass('slideOff');
            $('#chunkTen').removeClass('comeOn');
            $('#chunkTen').addClass('slideOff');
            glassTimer;
            console.log('clicked');
        });
        $('#deets').click(function(){ 
            $('#Glass').removeClass('showGlass');
            $('#Glass').addClass('showGlass');
            glassTimer;
             $('#aboot').removeClass('youAreHere');
             $('#deets').addClass('youAreHere');
             $('#homie').removeClass('youAreHere');
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
            $('#chunkThree').removeClass('comeOn');
            $('#chunkThree').addClass('slideOff');
            $('#chunkFour').removeClass('comeOn');
            $('#chunkFour').addClass('slideOff');
            $('#chunkFive').removeClass('comeOn');
            $('#chunkFive').addClass('slideOff');
            $('#chunkSix').removeClass('comeOn');
            $('#chunkSix').addClass('slideOff');
            $('#chunkSeven').removeClass('comeOn');
            $('#chunkSeven').addClass('slideOff');
            $('#chunkEight').removeClass('comeOn');
            $('#chunkEight').addClass('slideOff');
            $('#chunkNine').removeClass('comeOn');
            $('#chunkNine').addClass('slideOff');
            $('#chunkTen').removeClass('comeOn');
            $('#chunkTen').addClass('slideOff');
            console.log('clicked');
        });
         $('#aboot').click(function(){ 
             $('#Glass').removeClass('showGlass');
            $('#Glass').addClass('showGlass');
            glassTimer;
             $('#aboot').addClass('youAreHere');
             $('#deets').removeClass('youAreHere');
             $('#homie').removeClass('youAreHere');
             $('#homeChunk').addClass('slideOff');
             $('#detailsChunk').addClass('slideOff');
             $('#details2Chunk').addClass('slideOff');
             $('#homeChunk').removeClass('comeOn');
             $('#detailsChunk').removeClass('comeOn');
             $('#details2Chunk').removeClass('comeOn');
            $('#aboutChunk').addClass('comeOn');
             $('h1').text('MY COLLECTION\'S INFLUENCE');
             $('body').removeClass('scrollBars');
             $('#chunkOne').removeClass('comeOn');
            $('#chunkOne').addClass('slideOff');
            $('#chunkTwo').removeClass('comeOn');
            $('#chunkTwo').addClass('slideOff');
            $('#chunkThree').removeClass('comeOn');
            $('#chunkThree').addClass('slideOff');
            $('#chunkFour').removeClass('comeOn');
            $('#chunkFour').addClass('slideOff');
            $('#chunkFive').removeClass('comeOn');
            $('#chunkFive').addClass('slideOff');
            $('#chunkSix').removeClass('comeOn');
            $('#chunkSix').addClass('slideOff');
            $('#chunkSeven').removeClass('comeOn');
            $('#chunkSeven').addClass('slideOff');
            $('#chunkEight').removeClass('comeOn');
            $('#chunkEight').addClass('slideOff');
            $('#chunkNine').removeClass('comeOn');
            $('#chunkNine').addClass('slideOff');
            $('#chunkTen').removeClass('comeOn');
            $('#chunkTen').addClass('slideOff');
            console.log('clicked');
        });
        
        $('#gameOne').click(function(){ 
            $('#Glass').removeClass('showGlass');
            $('#Glass').addClass('showGlass');
            glassTimer;
            $('h1').text('FLYING DRAGON - XBOX, FIGHTING');
            $('#detailsChunk').addClass('slideOff');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkOne').addClass('comeOn'); 
            console.log('clicked');
        });
        $('#gameTwo').click(function(){ 
            $('#Glass').removeClass('showGlass');
            $('#Glass').addClass('showGlass');
            glassTimer;
            $('h1').text('UNREAL TOURNAMENT - XBOX, FIRST PERSON SHOOTER');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkTwo').addClass('comeOn');   
            console.log('clicked');
        });
        $('#gameThree').click(function(){ 
            $('#Glass').removeClass('showGlass');
            $('#Glass').addClass('showGlass');
            glassTimer;
            $('h1').text('WHACKED! - XBOX, PARTY');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkThree').addClass('comeOn');   
            console.log('clicked');
        });
    $('#gameFour').click(function(){ 
        $('#Glass').removeClass('showGlass');
            $('#Glass').addClass('showGlass');
            glassTimer;
            $('h1').text('KUNG FU CHAOS - XBOX, PARTY FIGHTING ');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkFour').addClass('comeOn');   
            console.log('clicked');
        });
       $('#gameFive').click(function(){ 
           $('#Glass').removeClass('showGlass');
            $('#Glass').addClass('showGlass');
            glassTimer;
            $('h1').text('POKEMON YELLOW - GAMEBOY COLOR, ROLE-PLAYING');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkFive').addClass('comeOn');   
            console.log('clicked');
        });
    $('#gameSix').click(function(){ 
        $('#Glass').removeClass('showGlass');
            $('#Glass').addClass('showGlass');
            glassTimer;
            $('h1').text('MORTAL KOMBAT DECEPTION - XBOX, FIGHTING');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkSix').addClass('comeOn');   
            console.log('clicked');
        });
    $('#gameSeven').click(function(){ 
        $('#Glass').removeClass('showGlass');
            $('#Glass').addClass('showGlass');
            glassTimer;
            $('h1').text('RUNESCAPE - PC, MMO ROLE-PLAYING');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkSeven').addClass('comeOn');   
            console.log('clicked');
        });
    $('#gameEight').click(function(){ 
        $('#Glass').removeClass('showGlass');
            $('#Glass').addClass('showGlass');
            glassTimer;
            $('h1').text('ARCANIST - PC, COMBAT ARENA');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkEight').addClass('comeOn');   
            console.log('clicked');
        });
    $('#gameNine').click(function(){ 
        $('#Glass').removeClass('showGlass');
            $('#Glass').addClass('showGlass');
            glassTimer;
            $('h1').text('SUPER SMASH BROS BRAWL - WII, PARTY FIGHTING');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkNine').addClass('comeOn');   
            console.log('clicked');
        });
    $('#gameTen').click(function(){ 
        $('#Glass').removeClass('showGlass');
            $('#Glass').addClass('showGlass');
            glassTimer;
            $('h1').text('SOUL CALIBUR - XBOX 360, FIGHTING');
            $('#detailsChunk').addClass('slideOff');
            $('#details2Chunk').addClass('comeOn');
            $('#detailsChunk').removeClass('comeOn');
            $('#chunkTen').addClass('comeOn');   
            console.log('clicked');
        });
    $('#sec1').click(function(){ 
        if(sec1<=0){
            sec1++;
            secrets++;
            $('h3').text('Blocks Found:' + secrets + '/5'); 
            $('h4').text('Blocks Found:' + secrets + '/5');
        }
         if(secrets==5){
        $('#secretImg').addClass('displayImg');
    }
            console.log(sec1 + secrets);
        });
    $('#sec2').click(function(){ 
        if(sec2<=0){
            sec2++;
            secrets++;
            $('h3').text('Blocks Found:' + secrets + '/5'); 
            $('h4').text('Blocks Found:' + secrets + '/5');
        }
         if(secrets==5){
        $('#secretImg').addClass('displayImg');
    }
            console.log(sec2 + secrets);
        });
    $('#sec3').click(function(){ 
        if(sec3<=0){
            sec3++;
            secrets++;
            $('h3').text('Blocks Found:' + secrets + '/5'); 
            $('h4').text('Blocks Found:' + secrets + '/5');
        }
         if(secrets==5){
        $('#secretImg').addClass('displayImg');
    }
            console.log(sec3 + secrets);
        });
    $('#sec4').click(function(){ 
        if(sec4<=0){
            sec4++;
            secrets++;
            $('h3').text('Blocks Found:' + secrets + '/5'); 
            $('h4').text('Blocks Found:' + secrets + '/5');
        }
         if(secrets==5){
        $('#secretImg').addClass('displayImg');
    }
            console.log(sec4 + secrets);
        });
    $('#sec5').click(function(){ 
        if(sec5<=0){
            sec5++;
            secrets++;
            $('h3').text('Blocks Found:' + secrets + '/5');
            $('h4').text('Blocks Found:' + secrets + '/5');
        }
         if(secrets==5){
        $('#secretImg').addClass('displayImg');
    }
            console.log(sec5 + secrets);
        });
   
}
function hourGlassTimer(){
    $('#Glass').removeClass('showGlass');
    
    
}
