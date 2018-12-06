$(document).ready(function(){
    
    navigate();
    hourGlassTimer();
    chooseSong();
    
   $(window).resize(function(){ 
       
    });
    $(window).scroll(function(){ 
        
    });
    
});

function navigate(){
    $(document).ready(function(){
    $(this).scrollTop(0);
});
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
    var ding = new Audio("imgs/ding.mp3");
    var audio = new Audio("imgs/SecretsFound.mp3" ) ;
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
    $('h1').addClass('homeAechOne');
    
        $('#homie').click(function(){ 
            window.scrollTo(0, 0);
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
            $('h1').addClass('homeAechOne');
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
            $('h1').removeClass('homeAechOne');
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
             window.scrollTo(0, 0);
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
             $('h1').removeClass('homeAechOne');
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
            window.scrollTo(0, 0);
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
            window.scrollTo(0, 0);
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
            window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
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
           window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
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
        window.scrollTo(0, 0);
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
            ding.play();
        }
         if(secrets==5){
        $('#secretImg').addClass('displayImg');
             PlaySound('imgs/SecretsFound.mp3');
             secrets++;
    }
            console.log(sec1 + secrets);
        });
    $('#sec2').click(function(){ 
        if(sec2<=0){
            sec2++;
            secrets++;
            $('h3').text('Blocks Found:' + secrets + '/5'); 
            $('h4').text('Blocks Found:' + secrets + '/5');
            ding.play();
        }
         if(secrets==5){
        $('#secretImg').addClass('displayImg');
             PlaySound('imgs/SecretsFound.mp3');
             secrets++;
    }
            console.log(sec2 + secrets);
        });
    $('#sec3').click(function(){ 
        if(sec3<=0){
            sec3++;
            secrets++;
            $('h3').text('Blocks Found:' + secrets + '/5'); 
            $('h4').text('Blocks Found:' + secrets + '/5');
            ding.play();
        }
         if(secrets==5){
        $('#secretImg').addClass('displayImg');
             PlaySound('imgs/SecretsFound.mp3');
             secrets++;
    }
            console.log(sec3 + secrets);
        });
    $('#sec4').click(function(){ 
        if(sec4<=0){
            sec4++;
            secrets++;
            $('h3').text('Blocks Found:' + secrets + '/5'); 
            $('h4').text('Blocks Found:' + secrets + '/5');
            ding.play();
        }
         if(secrets==5){
        $('#secretImg').addClass('displayImg');
             PlaySound('imgs/SecretsFound.mp3');
             secrets++;
    }
            console.log(sec4 + secrets);
        });
    $('#sec5').click(function(){ 
        if(sec5<=0){
            sec5++;
            secrets++;
            $('h3').text('Blocks Found:' + secrets + '/5');
            $('h4').text('Blocks Found:' + secrets + '/5');
            ding.play();
        }
         if(secrets==5){
        $('#secretImg').addClass('displayImg');
            secrets++;
            PlaySound('imgs/SecretsFound.mp3');

    }
            console.log(sec5 + secrets);
        });
   
}
function hourGlassTimer(){
    $('#Glass').removeClass('showGlass');
}

function PlaySound(path) {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', path);
  audioElement.play();
}
function chooseSong(){
//                $(document).ready(function(){
        var songBool = false;
//        var audOne = new Audio("imgs/GungeonTheme.mp3");
//        var audTwo = new Audio("imgs/bloodstain.mp3");
//        var audThree = new Audio("imgs/SnowWorries.mp3");
//        var audFour = new Audio("imgs/Brawl.mp3");
//        var audFive = new Audio("imgs/EZClap.mp3");
//        var audSix = new Audio("imgs/Basement.mp3");
//        var audSeven = new Audio("imgs/HourGlassCaves.mp3");
    
                $('#playButton').click(function(){                   
                    var ranSong = Math.floor((Math.random()*10)+1);
//                    var ranSong = 1;
                    console.log(ranSong);
                    console.log('before: ' + songBool);
                    if(songBool==false){
                        songBool=true;
                    
                    }else if(songBool==true){
                        songBool=false;
                    }
                    console.log('after: ' + songBool);
                    
                    if(songBool==true){
                        $('.songArtist').addClass('activeWhite');
                        $('.songTitle').addClass('activeWhite');
                        $('.playImg').addClass('activeWhite');
                        if(ranSong==1){
                            $('.songArtist').text('Enter the Gungeon');
                            $('.songTitle').text('Main Theme');
//                             audOne.play();
                                document.getElementById('playerOne').play();
//                            songBool=2;
                        }else if(ranSong==2){
                            $('.songArtist').text('BloodStained: Curse of the Moon');
                            $('.songTitle').text('Blasphemy unto Heaven');
//                           audTwo.play(); 
                            document.getElementById('playerTwo').play();
//                            songBool=2;
                        }else if(ranSong==3){ 
                            $('.songArtist').text('Ty the Tasmanian Tiger');
                            $('.songTitle').text('Snow Worries');
//                            audThree.play();
                            document.getElementById('playerThree').play();
//                            songBool=2;
                        }else if(ranSong==4){ 
                            $('.songArtist').text('Super Smash Bros: Brawl');
                            $('.songTitle').text('Main Theme');
//                            audFour.play();
                            document.getElementById('playerFour').play();
//                            songBool=2;
                        }else if(ranSong==5){ 
                            $('.songArtist').text('Ninja Gainden');
                            $('.songTitle').text('An Easy Enemy');
//                            audFive.play();
                            document.getElementById('playerFive').play();
//                            songBool=2;
                        }else if(ranSong==6){ 
                            $('.songArtist').text('Binding of Isaac');
                            $('.songTitle').text('Basement Theme');
//                            audSix.play();
                            document.getElementById('playerSix').play();
//                            songBool=2;
                        }else if(ranSong==7){ 
                            $('.songArtist').text('Blinx the Time Sweeper');
                            $('.songTitle').text('Hourglass Caves');
//                            audSeven.play();
                            document.getElementById('playerSeven').play();
//                            songBool=2;
                        }else if(ranSong==8){ 
                            $('.songArtist').text('Ocarina of Time');
                            $('.songTitle').text('Gerudo Valley');
//                            audSeven.play();
                            document.getElementById('playerEight').play();
//                            songBool=2;
                        }else if(ranSong==9){ 
                            $('.songArtist').text('Jet Set Radio Future');
                            $('.songTitle').text('Funky Dealer');
//                            audSeven.play();
                            document.getElementById('playerNine').play();
//                            songBool=2;
                        }else if(ranSong==10){ 
                            $('.songArtist').text('Crypt of the Necrodancer');
                            $('.songTitle').text('Fungal Funk');
//                            audSeven.play();
                            document.getElementById('playerTen').play();
//                            songBool=2;
                        }
                    }else if(songBool==false){
                        $('.songArtist').removeClass('activeWhite');
                        $('.songTitle').removeClass('activeWhite');
                        $('.playImg').removeClass('activeWhite');
                        document.getElementById('playerOne').pause();
                        document.getElementById('playerTwo').pause();
                        document.getElementById('playerThree').pause();
                        document.getElementById('playerFour').pause();
                        document.getElementById('playerFive').pause();
                        document.getElementById('playerSix').pause();
                        document.getElementById('playerSeven').pause();
                        document.getElementById('playerEight').pause();
                        document.getElementById('playerNine').pause();
                        document.getElementById('playerTen').pause();
//                        this.audOne.paused();
//                        this.audOne.currentTime=0;
//                        this.audTwo.paused();
//                        this.audTwo.currentTime=0;
//                        this.audThree.paused();
//                        this.audThree.currentTime=0;
                        document.getElementById('playerOne').currentTime=0;
                        document.getElementById('playerTwo').currentTime=0;
                        document.getElementById('playerThree').currentTime=0;
                        document.getElementById('playerFour').currentTime=0;
                        document.getElementById('playerFive').currentTime=0;
                        document.getElementById('playerSix').currentTime=0;
                        document.getElementById('playerSeven').currentTime=0;
                        document.getElementById('playerEight').currentTime=0;
                        document.getElementById('playerNine').currentTime=0;
                        document.getElementById('playerTen').currentTime=0;
                        console.log('paused');
                    }
                    
                });
            }
