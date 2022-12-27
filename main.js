var date=new Date();  
/*document.write("Today's day: "+date.getDate());  
document.write("<br>")
var date1=new Date("october 15,  20:22:10");  
document.write("in what day :" +date1.getMonth() +"<br>")  */

time=prompt("enter the value");
var timeRange=date.setTime(time);
//console.log(timeRange);
if(timeRange>=5 && timeRange<12){
    console.log("morning")
}
else if(timeRange>=12 && timeRange<=16){
    console.log("afternoon");
}
else if(timeRange>=16 && timeRange<=19){
    console.log("evening");

}
else if(timeRange>=19 && timeRange<=24){
    console.log("night");
}
else {
    console.log("Its not a day");
}






