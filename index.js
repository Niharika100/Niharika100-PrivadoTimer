// Global Declaration
var sec = 0;
var min = 0;

// Initial View Function
function counterTimer()
{
    time = "00:00";
    counter1 = document.getElementById("counter1"); 
    counter1.innerHTML = time;
}

// Style to make counter color red
function endStyling(timer)
{
    timer.style.color = "red";
}

// Style to make counter color back to black
function startStyling(timer)
{
    timer.style.color = "black";
}

var time = "00:00";
var running = 0;

function Timer()
{
    // Start Code
    if(running == 0)
    {
            startStyling(counter1);
            running = 1;
            document.getElementById("start").innerHTML = "Pause";
            myTimer = setInterval(function(){
            timer_div = document.getElementById("counter1");
            var min = 0;
            var sec = 0;
            t = time.split(":");
            min = parseInt(t[0]);
            sec = parseInt(t[1]);

            if(sec == 59)
            {
                if(min < 4)
                {
                    sec = 0;
                    min++;
                }
                else
                {
                    min++;
                    sec = 0;
                    clearInterval(myTimer);
                    timer_div.innerHTML = min + ":" + sec;
                    running = 2;
                    document.getElementById("start").innerHTML = "Reset";
                    endStyling(counter1);
                }
            }

            else
            {
                sec++;
            }

            if(min<10)
            {
                min = "0" + min;
            }

            if(sec < 10)
            {
                sec = "0" + sec;
            }

            time = min + ":" + sec; 

            timer_div.innerHTML = time;
        },1000)
    }

    // Reset Code
    else if(running == 2)
    {
        timer_div.innerHTML = "00:00";
        startStyling(counter1);
        reset();
    }

    // Pause Code
    else{
        document.getElementById("start").innerHTML = "Start";
        clearInterval(myTimer);
        running = 0;
    }
}

// Reset Function
function reset()
{
    time = "00:00";
    running = 0;
    document.getElementById("start").innerHTML = "Start";
}