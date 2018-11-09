$(document).ready(function(){
    
    interactions();
    variables();
    
   $(window).resize(function(){ 
       
    });
    $(window).scroll(function(){ 
        
    });
});
//let racc1,cat1,squ1,dee1,cutt1=0;
function interactions(){
    var racc1=-1;
    $('#raccoon').click(function(){
    
        racc1++;
        console.log(racc1);
    });
        if(racc1==0){
            $('.one').addClass('moveIT');
            console.log('2');
        }else if(racc1==2){
            $('.ffave').addClass('hideh1');
            $('.one').removeClass('moveIT');
            console.log('3');
        }else if(racc1==3){
            $('.one').removeClass('hideh1');
            $('.one').addClass('showp');
            console.log('4');
        }
//});
   $('#cat').click(function(){
        $('.two').toggleClass('moveIT');

});
       $('#squirrel').click(function(){
        $('.three').addClass('moveIT');

});
       $('#deer').click(function(){
        $('.four').addClass('moveIT');

});
       $('#cuttlefish').click(function(){
        $('.five').addClass('moveIT');

});
    $('#raccoon').click(function(){
            $('.one').addClass('hideh1');

});
}
function variables(){
    var racc1=0,cat1=0,squ1=0,dee1=0,cutt1=0;
}
