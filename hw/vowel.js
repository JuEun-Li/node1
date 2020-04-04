let s = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";

for(let i = 0; i < s.length; i++){
    if(s[i] == "a" || s[i] == "A")
        console.log("\"a\" or \"A\": " + i);

    else if(s[i] == "e" || s[i] == "E")
        console.log("\"e\" or \"E\": " + i);

    else if(s[i] == "i" || s[i] == "I")
        console.log("\"i\" or \"I\": " + i);

    else if(s[i] == "o" || s[i] == "O")
        console.log("\"o\" or \"O\": " + i);

    else if(s[i] == "u" || s[i] == "U")
        console.log("\"u\" or \"U\": " + i);
    
 }