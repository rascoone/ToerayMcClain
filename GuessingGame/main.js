$(document).ready(function(){
    
    quiz();
//    movements();
    
   $(window).resize(function(){ 
       
    });
    $(window).scroll(function(){ 
        
    });
    
});
//let racc1,cat1,squ1,dee1,cutt1=0;
function quiz(){

        var answer = Math.floor((Math.random()*4)+1);
        var grade= 100;
        var questions = 1;
        var rights=0;
    
        console.log(answer);
        
        $('#aButt').click(function(){   
            if(answer==1){
                rights++;
                grade = ((rights/questions))*100;
                $('h2').text(grade + '%');
                console.log('correct');
            } else {
                grade = ((rights/questions))*100;
                $('h2').text(grade + '%');
                console.log('wrong');
            }
            answer = Math.floor((Math.random()*4)+1);
            console.log('next answer ' + answer);
            console.log('questions right ' + rights + '/' + questions );
            questions++;
             });
    
        $('#bButt').click(function(){   
            if(answer==2){
                rights++;
                grade = ((rights/questions))*100;
                $('h2').text(grade + '%');
                console.log('correct');
            } else {
                grade = ((rights/questions))*100;
                $('h2').text(grade + '%');
                console.log('wrong');  
            }
                answer = Math.floor((Math.random()*4)+1);
                console.log('next answer ' + answer);
                console.log('questions right ' + rights + '/' + questions );
                questions++;
             });
        $('#cButt').click(function(){   
            if(answer==3){
                rights++;
                grade = ((rights/questions))*100;
                $('h2').text(grade + '%');
                console.log('correct');
            } else {
                grade = ((rights/questions))*100;
                $('h2').text(grade + '%');
                console.log('wrong');  
            }
                answer = Math.floor((Math.random()*4)+1);
                console.log('next answer ' + answer);
                console.log('questions right ' + rights + '/' + questions );
                questions++;
             });
        $('#dButt').click(function(){   
            if(answer==4){
                rights++;
                grade = ((rights/questions))*100;
                $('h2').text(grade + '%');
                console.log('correct');
            } else {
                grade = ((rights/questions))*100;
                $('h2').text(grade + '%');
                console.log('wrong');  
            }
                answer = Math.floor((Math.random()*4)+1);
                console.log('next answer ' + answer);
                console.log('questions right ' + rights + '/' + questions );
                questions++;
             });
//        $("#myButton").click(function(){
//          
//	       location.reload();
//	       }); 
              

}