var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var tBody = document.getElementById("content");
var m = parseInt(prompt("Input Month (1-12): ")); var d = parseInt(prompt("Input 1st day of month ranging 1-7: "));
var cDay = 1; var counter = 0; var bool = true;

if(m > 12 && d > 7 && m <= 0 && d <= 0){
    var a = document.getElementById("main");
    var output = document.createTextNode("Invalid Entries");
    a.appendChild(output);
}
else{
    var mn = document.getElementById("month_name");
    var text = document.createTextNode(month[m-1]);
    mn.appendChild(text);
    while(bool){
        var row = document.createElement("tr");
        for(var i = 0; i < day.length; i++){
            if(i==d-1){
                if(counter==1){
                    var data = document.createElement("td");
                    var dataText = document.createTextNode(cDay);
                    data.appendChild(dataText);
                    row.appendChild(data);
                    tBody.appendChild(row);
                    if(i==0){
                        data.className = "bcolor";
                    }
                    cDay++;
                }
                else{
                    var data = document.createElement("td");
                    var dataText = document.createTextNode(cDay);
                    data.appendChild(dataText);
                    row.appendChild(data);
                    tBody.appendChild(row);
                    if(i==0){
                        data.className = "bcolor";
                    }
                    cDay++; counter = 1;
                }
            }
            else{
                if(counter ==1){
                    if(cDay >= 32 && (m==1||m==3||m==5||m==7||m==8||m==10||m==12)){
                        bool = false; break;
                    }
                    else if(cDay >= 31 && (m==4||m==6||m==9||m==11)){
                        bool = false; break;
                    }
                    else if(cDay >= 28 && (m==2)){
                        var data = document.createElement("td");
                        var dataText = document.createTextNode(cDay);
                        data.appendChild(dataText);
                        row.appendChild(data);
                        tBody.appendChild(row);
                        if(i==0){
                            data.className = "bcolor";
                        }
                        bool = false; break;
                    }
                    else{
                        var data = document.createElement("td");
                        var dataText = document.createTextNode(cDay);
                        data.appendChild(dataText);
                        row.appendChild(data);
                        tBody.appendChild(row);
                        if(i==0){
                            data.className = "bcolor";
                        }
                        cDay++;   
                    }
                }
                else{
                    var data = document.createElement("td");
                    var dataText = document.createTextNode(cDay);
                    data.appendChild(dataText);
                    row.appendChild(data);
                    tBody.appendChild(row);
                    if(i==0){
                        data.className = "bcolor";
                    }        
                }
            }
        }
    }
}
