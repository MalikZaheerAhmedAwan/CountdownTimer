#! /usr/bin/cnv node 
import inquirer from "inquirer";
import {differenceInSeconds, min} from "date-fns";

let input=await inquirer.prompt([
    {name:"hr",type:"number",message:"Enter hours to set countdown :"},
    {name:"min",type:"number",message:"Enter minutes to set countdown :"},
    {name:"sec",type:"number",message:"Enter seconds to set countdown :"},
]);


StartCountdown(input.hr, input.min,input.sec);


function StartCountdown(hrs :number, mins :number,secs :number) 
{
    let hrToSec=hrs*60*60;
    let minToSec=mins*60;
    let setTime=new Date().setSeconds(new Date().getSeconds()+(secs+minToSec+hrToSec) );
    let countDownTime=new Date(setTime);
    setInterval(()=>{
        let currentTime=new Date();
        let timeDiff=differenceInSeconds(countDownTime,currentTime);
        if (timeDiff<=0)
        {
            console.log("Countdown time has been reached..............");
            process.exit();
        }
//        let hr=Math.floor((timeDiff % (3600*24)) / 3600);         
//            let min=Math.floor((timeDiff % (3600*24)) / 3600);
let hr=Math.floor(timeDiff / 3600);
let min=Math.floor((Math.floor(timeDiff / 60)) % 60);
            let sec=Math.floor(timeDiff % 60);
            //if (sec==0)

            console.log(`COUNTDOWN : ${hr.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`);
        },1000);
    } 


