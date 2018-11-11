$(document).ready(function(){
    
    interactions();
//    movements();
    
   $(window).resize(function(){ 
       
    });
    $(window).scroll(function(){ 
        
    });
    
});
//let racc1,cat1,squ1,dee1,cutt1=0;
function interactions(){
    var reset=-1;
    var bigpic=-1;
    var racc1=-1;
    var cat1=-1;
    var squ1=-1;
    var dee1=-1;
    var cut1=-1;
    console.log('racc' + racc1);
    console.log('cat' + cat1);
    console.log('squ' + squ1);
    console.log('dee' + dee1);
    console.log('cut' + cut1);
    
    $('#raccoon').click(function(){
        racc1++;
       console.log('racc' + ' '+ racc1);
       
       if(racc1==0){
            $('.one').addClass('moveIT');
        }else if(racc1==1){
            $('.ffave').addClass('hideh1');
            $('.one').removeClass('moveIT');
            $('.rac').addClass('racp');
            $('.one').addClass('away');
        }else if(bigpic==0){
            if(racc1<=2){
            $('.mypic').addClass('me'); 
            $('.one').addClass('away');
             $('.one').removeClass('coverIT');
            $('.two').addClass('away');
            $('.two').removeClass('coverIT2');
            $('.three').addClass('away');
            $('.three').removeClass('coverIT3');
            $('.four').addClass('away');
            $('.four').removeClass('coverIT4');
            $('.five').addClass('away');
            $('.five').removeClass('coverIT5');        
            $('#myButtontwo').removeClass('hideh1');
                racc1=3;
            }
        }
        if(racc1>0){
                console.log('racc' + ' ' + racc1);
                if(cat1>0){
                    console.log('cat1' + ' ' + cat1);
                    if(squ1>0){
                        console.log('squ1' + ' ' + squ1);
                        if(dee1>0){
                            console.log('dee1' + ' ' + dee1);
                            if(cut1>0){
                               if(bigpic==-1){ $('#myButton').removeClass('hideh1');
                            }
                            }
                        }
                    }
                }
        }
});
   $('#cat').click(function(){
       cat1++;
       console.log('cat' + ' '+ cat1);
       
       if(cat1==0){
            $('.two').addClass('moveIT');
        }else if(cat1==1){
            $('.sfave').addClass('hideh1');
            $('.two').removeClass('moveIT');
            $('.cat').addClass('catp');
            $('.two').addClass('away');
        }else if(bigpic==0){
            if(cat1<=2){
            $('.mypic').addClass('me'); 
            $('.one').addClass('away');
             $('.one').removeClass('coverIT');
            $('.two').addClass('away');
            $('.two').removeClass('coverIT2');
            $('.three').addClass('away');
            $('.three').removeClass('coverIT3');
            $('.four').addClass('away');
            $('.four').removeClass('coverIT4');
            $('.five').addClass('away');
            $('.five').removeClass('coverIT5');        
            $('#myButtontwo').removeClass('hideh1');
                cat1=3;
            }
        }
       if(racc1>0){
                console.log('racc' + ' ' + racc1);
                if(cat1>0){
                    console.log('cat1' + ' ' + cat1);
                    if(squ1>0){
                        console.log('squ1' + ' ' + squ1);
                        if(dee1>0){
                            console.log('dee1' + ' ' + dee1);
                            if(cut1>0){
                               if(bigpic==-1){ $('#myButton').removeClass('hideh1');
                            }
                            }
                        }
                    }
                }
        }
});
        
            
    $('#squirrel').click(function(){
        squ1++;
        console.log('squ' + ' ' + squ1);
       
       if(squ1==0){
            $('.three').addClass('moveIT');
        }else if(squ1==1){
            $('.tfave').addClass('hideh1');
            $('.three').removeClass('moveIT');
             $('.squ').addClass('squp');
            $('.three').addClass('away');
        }else if(bigpic==0){
            if(squ1<=2){
            $('.mypic').addClass('me'); 
            $('.one').addClass('away');
             $('.one').removeClass('coverIT');
            $('.two').addClass('away');
            $('.two').removeClass('coverIT2');
            $('.three').addClass('away');
            $('.three').removeClass('coverIT3');
            $('.four').addClass('away');
            $('.four').removeClass('coverIT4');
            $('.five').addClass('away');
            $('.five').removeClass('coverIT5');        
            $('#myButtontwo').removeClass('hideh1');
                squ1=3;
            }
        }
if(racc1>0){
                console.log('racc' + ' ' + racc1);
                if(cat1>0){
                    console.log('cat1' + ' ' + cat1);
                    if(squ1>0){
                        console.log('squ1' + ' ' + squ1);
                        if(dee1>0){
                            console.log('dee1' + ' ' + dee1);
                            if(cut1>0){
                               if(bigpic==-1){ $('#myButton').removeClass('hideh1');
                            }
                            }
                        }
                    }
                }
        }
});
       $('#deer').click(function(){
            dee1++;
        console.log('dee' + ' ' + dee1);
       
       if(dee1==0){
            $('.four').addClass('moveIT');
        }else if(dee1==1){
            $('.fofave').addClass('hideh1');
            $('.four').removeClass('moveIT');
             $('.dee').addClass('deep');
            $('.four').addClass('away');
        }else if(bigpic==0){
            if(dee1<=2){
            $('.mypic').addClass('me'); 
            $('.one').addClass('away');
             $('.one').removeClass('coverIT');
            $('.two').addClass('away');
            $('.two').removeClass('coverIT2');
            $('.three').addClass('away');
            $('.three').removeClass('coverIT3');
            $('.four').addClass('away');
            $('.four').removeClass('coverIT4');
            $('.five').addClass('away');
            $('.five').removeClass('coverIT5');        
            $('#myButtontwo').removeClass('hideh1');
                dee1=3;
            }
        }
if(racc1>0){
                console.log('racc' + ' ' + racc1);
                if(cat1>0){
                    console.log('cat1' + ' ' + cat1);
                    if(squ1>0){
                        console.log('squ1' + ' ' + squ1);
                        if(dee1>0){
                            console.log('dee1' + ' ' + dee1);
                            if(cut1>0){
                               if(bigpic==-1){ $('#myButton').removeClass('hideh1');
                            }
                            }
                        }
                    }
                }
        }
});
       $('#cuttlefish').click(function(){
            cut1++;
            console.log('cut' + ' ' + cut1);
       
       if(cut1==0){
            $('.five').addClass('moveIT');
        }else if(cut1==1){
            $('.fifave').addClass('hideh1');
            $('.five').removeClass('moveIT');
             $('.cut').addClass('cutp');
            $('.five').addClass('away');
//            $('#myButton').removeClass('hideh1');
        }else if(bigpic==0){
            if(cut1<=2){
            $('.mypic').addClass('me'); 
            $('.one').addClass('away');
             $('.one').removeClass('coverIT');
            $('.two').addClass('away');
            $('.two').removeClass('coverIT2');
            $('.three').addClass('away');
            $('.three').removeClass('coverIT3');
            $('.four').addClass('away');
            $('.four').removeClass('coverIT4');
            $('.five').addClass('away');
            $('.five').removeClass('coverIT5');        
            $('#myButtontwo').removeClass('hideh1');
                cut1=3;
            }
            
        }
           if(racc1>0){
                console.log('racc' + ' ' + racc1);
                if(cat1>0){
                    console.log('cat1' + ' ' + cat1);
                    if(squ1>0){
                        console.log('squ1' + ' ' + squ1);
                        if(dee1>0){
                            console.log('dee1' + ' ' + dee1);
                            if(cut1>0){
                               if(bigpic==-1){ $('#myButton').removeClass('hideh1');
                            }
                            }
                        }
                    }
                }
        }
           });
    $(document).ready(function() {
        
        $("#myButton").click(function(){
            if(racc1>0){
                console.log('racc' + ' ' + racc1);
                if(cat1>0){
                    console.log('cat1' + ' ' + cat1);
                    if(squ1>0){
                        console.log('squ1' + ' ' + squ1);
                        if(dee1>0){
                            console.log('dee1' + ' ' + dee1);
                            if(cut1>0){
                                console.log('cut1' + ' ' + cut1);
                                $('.one').addClass('coverIT');
                                $('.two').addClass('coverIT2');
                                $('.three').addClass('coverIT3');
                                $('.four').addClass('coverIT4');
                                $('.five').addClass('coverIT5');
                                reset=-1;
                                bigpic++;
                                $('#myButton').addClass('hideh1');
                                
                            }
                        }
                    }
                }
            }
//	       location.reload();
	       }); 
                $("#myButtontwo").click(function(){
                    reset++;
                    if(reset==0){
                    $('.one').addClass('coverIT');
                    $('.two').addClass('coverIT2');
                    $('.three').addClass('coverIT3');
                    $('.four').addClass('coverIT4');
                    $('.five').addClass('coverIT5');
                         racc1=2;
                         cat1=2;
                         squ1=2;
                         dee1=2;
                         cut1=2;
                    }else if(reset>0){
                    $('.one').removeClass('coverIT');
                    $('.two').removeClass('coverIT2');
                    $('.three').removeClass('coverIT3');
                    $('.four').removeClass('coverIT4');
                    $('.five').removeClass('coverIT5');
                    $('.one').removeClass('away');
                    $('.two').removeClass('away');
                    $('.three').removeClass('away');
                    $('.four').removeClass('away');
                    $('.five').removeClass('away');
                    $('.ffave').removeClass('hideh1');
                    $('.sfave').removeClass('hideh1');
                    $('.tfave').removeClass('hideh1');
                    $('.fofave').removeClass('hideh1');
                    $('.fifave').removeClass('hideh1');
                    $('.one').addClass('one');
                    $('.two').addClass('two');
                    $('.three').addClass('three');
                    $('.four').addClass('four');
                    $('.five').addClass('five');
                    $('.rac').removeClass('racp');
                    $('.cat').removeClass('catp');
                    $('.squ').removeClass('squp');
                    $('.dee').removeClass('deep');
                    $('.cut').removeClass('cutp');
                    $('.mypic').removeClass('me');
                    $('#myButtontwo').addClass('hideh1');
//                        var reset=-1;
                         bigpic=-1;
                         racc1=-1;
                         cat1=-1;
                         squ1=-1;
                         dee1=-1;
                         cut1=-1;
                        console.log('racc' + ' ' + racc1);
                        console.log('cat' + ' ' + cat1);
                        console.log('squ' + ' ' + squ1);
                        console.log('deer' + ' ' + dee1);
                        console.log('bigpic' + ' ' + bigpic);
                        console.log('cut' + ' ' + cut1);
                    }
            });
       });
}

