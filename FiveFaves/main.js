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
            $('#myButton').removeClass('hideh1');
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
                               $('#raccoon').addClass('coverIT');
                                $('.one').addClass('coverIT');
                            }
                        }
                    }
                }
            }
//	       location.reload();
            $('#raccoon').addClass('coverIT');
            $('.one').addClass('coverIT');
	       }); 
       });
}

