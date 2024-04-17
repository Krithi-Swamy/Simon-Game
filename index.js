var level = 1, str1 = "", str2 = "";

$("body").on("keypress", function(){
    $("h1").text("Level 1");
    setTimeout(function(){
        throw_challenge();   
    }, 1000);
});

function throw_challenge(){
    switch(level){
        case 1:
            highlight_square();
            break;
        
        case 2:
            highlight_square();
            setTimeout(function(){
                highlight_square();
            }, 1000);
            break;
        
        case 3:
            highlight_square();
            setTimeout(function(){
                highlight_square();
            }, 1000);
            setTimeout(function(){
                highlight_square();
            }, 2000);
            break;

        case 4:
            highlight_square();
            setTimeout(function(){
                highlight_square();
            }, 1000);
            setTimeout(function(){
                highlight_square();
            }, 2000);
            setTimeout(function(){
                highlight_square();
            }, 3000);
            break;

        case 5:
            highlight_square();
            setTimeout(function(){
                highlight_square();
            }, 1000);
            setTimeout(function(){
                highlight_square();
            }, 2000);
            setTimeout(function(){
                highlight_square();
            }, 3000);
            setTimeout(function(){
                highlight_square();
            }, 4000);
            break;    
    }
}

function highlight_square(){
    var r = Math.floor(Math.random() * 4) + 1;

    $("#" + r).addClass("pressed");
    var aud = new Audio("./sounds/blue.mp3");
    aud.play();

    setTimeout(function(){
        $("#" + r).removeClass("pressed");   
    }, 500);

    str1 = str1 + r;
    //$("p").text("str1 = " + str1 + " str2 = " + str2);
}

$("button").on("click", function(){
    user_entry(this.innerHTML);
});

function user_entry(content){
    $("#" + content).addClass("pressed");
    var aud = new Audio("./sounds/yellow.mp3");
    aud.play();

    setTimeout(function(){
        $("#" + content).removeClass("pressed");   
    }, 500);

    str2 = str2 + content;
    //$("p").text("str1 = " + str1 + " str2 = " + str2);

    setTimeout(function(){
        if(str2.length === str1.length){
            result();
        }   
    }, 500);
}

function result(){
    if(str1 === str2){
        $("h1").text("Level " + level + " completed!");
        level += 1;
        str1 = "";
        str2 = "";
        if(level > 5){
            $("h1").text("You've successfully completed all levels, kudos!");
            var aud = new Audio("./sounds/green.mp3");
            aud.play();
            $("body").css("background-color", "green");
            $("button").slideUp();
        }else{
            setTimeout(function(){
                $("h1").text("Level " + level);   
            }, 1000);
            setTimeout(function(){
                throw_challenge();   
            }, 2000);
        }
        
    }else{
        $("h1").text("Game Over");
        var aud = new Audio("./sounds/wrong.mp3");
        aud.play();
        $("body").css("background-color", "red");
        $("button").slideUp();
        setTimeout(function(){
            location.reload(true);   
        }, 1500);
    }

}



        