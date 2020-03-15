// This is a subset of the states.
// Use this to actually run the game
// (assume this is the full set of states.
// This will make it easier to test.
var states = ["Idaho", "South Dakota", "Hawaii", "Alaska", "Alabama", "New York"];
var spanish = new Array(56);
var states_written = 0;
var timeleft;
var Timer;
var state_number;
// These are all the states. It maps the state name to the number which you'll
// want to use in your API call.
var abvMap = {
    "alabama": "01",
    "alaska": "02",
    "arizona": "04",
    "arkansas": "05",
    "california": "06",
    "colorado": "08",
    "connecticut": "09",
    "delaware": "10",
    "district of columbia": "11",
    "florida": "12",
    "georgia": "13",
    "hawaii": "15",
    "idaho": "16",
    "illinois": "17",
    "indiana": "18",
    "iowa": "19",
    "kansas": "20",
    "kentucky": "21",
    "louisiana": "22",
    "maine": "23",
    "maryland": "24",
    "massachusetts": "25",
    "michigan": "26",
    "minnesota": "27",
    "mississippi": "28",
    "missouri": "29",
    "montana": "30",
    "nebraska": "31",
    "nevada": "32",
    "new hampshire": "33",
    "new jersey": "34",
    "new mexico": "35",
    "new york": "36",
    "north carolina": "37",
    "north dakota": "38",
    "ohio": "39",
    "oklahoma": "40",
    "oregon": "41",
    "pennsylvania": "42",
    "rhode island": "44",
    "south carolina": "45",
    "south dakota": "46",
    "tennessee": "47",
    "texas": "48",
    "utah": "49",
    "vermont": "50",
    "virginia": "51",
    "washington": "53",
    "west virginia": "54",
    "wisconsin": "55",
    "wyoming": "56",
}


function getInput(){
   //var myObj;
    var state_name;
    var state_ignoreCase;
    var state_number_str;
    var str;
    var answer;
    var url;
    var json_obj;
    var list;
    var li;
    state_name = document.getElementById("input_field").value;
    state_ignoreCase = state_name.toLowerCase();
   
    str = String(state_ignoreCase);
    //alert(str);
    if(str in abvMap){
        state_number = abvMap[state_ignoreCase];
        state_number_str = state_number.toString();
        //alert(state_number);
        document.getElementById("input_field").value = "";

        
        url = "https://api.census.gov/data/2013/language?get=EST,LANLABEL,NAME&for=state:" + state_number + "&LAN=625"; 
            
        json_obj = JSON.parse(Get(url)); 

        list = document.getElementById("article_container");
        li = document.createElement("li");
        li.appendChild(document.createTextNode(str));
        li.setAttribute("id", state_number_str); 
        answer = Number(json_obj[1][0]).toLocaleString();
        console.log(answer);
        li.setAttribute("title", answer); 
        list.appendChild(li);

        if(spanish[state_number]==0 || spanish[state_number] == undefined){
            states_written++;
        }
        //console.log(states_written);
        spanish[state_number] = json_obj[1][0];
       // console.log(spanish[state_number]);
      //  console.log(spanish);
        //CHANGE THIS TO 50 IF YOU WANT TO TEST ALL STATES
        if(states_written == 6){
            won();
        }
        //console.log("this are the spanish speakers: "+spanish[state_number]);
    }

}

//$("article_container").hover(function(){
  //  var curr = $(this).id;

//});


function won(){
    alert("You WIN!");
    clearInterval(Timer);
    document.getElementById('paragraph1').style.display='none';
    document.getElementById('clock').style.display='none';
    alert("Refresh page to play again!")
    
    
}


function Get(yourUrl){ 

    var Httpreq = new XMLHttpRequest(); // a new request 

    Httpreq.open("GET",yourUrl,false); 

    Httpreq.send(null); 

    return Httpreq.responseText;           

} 

function on_clicking_start(){
    var s;
    var state_num;
    //var t;
    states_written = 0;
    //console.log(states_written);
    s = document.getElementById('paragraph1').style.display;
    //t = document.getElementById('start_button');
    //when they click on stop
    if(s === 'block'){
        document.getElementById('paragraph1').style.display='none';
        //t.value = 'start';
    }else{ //when they click on start
        document.getElementById('paragraph1').style.display='block';
      
        timeleft = 20;

         Timer = setInterval(function function1(){
            document.getElementById("clock").innerHTML = timeleft +"&nbsp" + "seconds remaining";
            timeleft -= 1;
            if(timeleft <= 0){
                clearInterval(Timer);
                document.getElementById("clock").innerHTML = "Time is up! "
                document.getElementById('paragraph1').style.display='none';

                document.getElementById("game_ended").innerHTML += "Your score is " + states_written + "/6. Here are the states you didn't mention:";
                for (var i = 0; i < 6; i++){
                   // console.log(states[i]);
                    //console.log(states[i].toLowerCase());
                   state_number = abvMap[states[i].toLowerCase()];
                   //console.log(state_number);
                   //console.log(spanish[state_number]);
                  // console.log(spanish);
                   if(spanish[state_number] == 0 || spanish[state_number] == undefined){
                     document.getElementById("game_ended").innerHTML += states[i] + ", \n";
                   }
                } 

            } 
        },1000);


   }
    
}

document.getElementById("start_button".addEventListener("click"),function(){
   
    timeleft = 20;
   
    
    var Timer = setInterval(function function1(){
        document.getElementById("clock").innerHTML = "&nbsp" + "seconds remaining";
        timeleft -= 1;
        

        if(timeleft <= 0){ //end of game
            clearInterval(Timer);
            document.getElementById("clock").innerHTML = "Time is up!"
           
        } 
    },1000);
   


})




/*
 * The majority of this project is done in JavaScript.
 *
 * 1.OK Start the timer when the click button is hit. Also, you must worry about
 *    how it will decrement (hint: setInterval). 
 * 2. Check the input text with the group of states that has not already been
 *    entered. Note that this should only work if the game is currently in
 * 3. Realize when the user has entered all of the states, and let him/her know
 *    that he/she has won (also must handle the lose scenario). The timer must
 *    be stopped as well.
 *
 * There may be other tasks that must be completed, and everyone's implementation
 * will be different. Make sure you Google! We urge you to post in Piazza if
 * you are stuck.
 */
