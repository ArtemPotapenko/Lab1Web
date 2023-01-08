let y=null;
let r=null;
function get_color_red(i,el){
    document.querySelectorAll(".point_"+el).forEach(x=>x.style.color="black");
    const id=i+el;
    document.getElementById(id).style.cssText=
    "color: red";
}
function choice_y_value(i){
  get_color_red(i,"y");
  y=i;
}
function choice_r_value(i){
    get_color_red(i,"r");
    r=i;
}
function clear_form(){
    document.querySelectorAll(".point_y").forEach(x=>x.style.color="black");
    document.querySelectorAll(".point_r").forEach(x=>x.style.color="black");
    document.getElementById("x").value="";
    r=null;
    y=null;
    var fail=document.getElementById("fail");
     fail.innerHTML="";
}
function send(event){

     var startTime=performance.now();
    var s="";

    xVal=document.getElementById("x").value; 
    xVal=xVal.replace(",",".");
    
    if (isNaN(xVal)||xVal<=-5 || xVal>=3 || xVal==""){
        s+="<br> Неверный ввод X"
       
    }
    if (y==null){
        s=s+"<br> Выберете Y";
        
    }
    if (r==null){
        s=s+"<br> Выберете R";
        
    }    if (s!=""){var fail=document.getElementById("fail");
     fail.innerHTML=s}else{
    var fail=document.getElementById("fail");
     fail.innerHTML=s
    event.preventDefault(false);  
    request=$.ajax({
        type:"POST",
        url:"src/main.php",
        data:{r:r,x:xVal,y:y}});
        request.done(function(msg){
            var args=JSON.parse(msg);
            var date=new Date();
            var endTime = performance.now();
            var time=endTime-startTime;
            var table=document.getElementById("table");
            var tr=document.createElement("tr");
            table.append(tr);
            tr.style="background-color:white; color : blue";
            if (args.check){
                result="<th style=\"color : green\">Попал</th>"
    
            } else {result = "<th style=\"color : red\">Мимо</th>"}
            tr.innerHTML="<th>"+Math.floor(time)+" ms"+"</th><th>"+date.toLocaleTimeString()+"</th><th>"+xVal+"</th><th>"+y+"</th><th>"+r+"</th>"+result;

        });}


}