const money = 10000;

if(money >= 1000){
    console.log("you can Enjoy ALL Ride!");
}
else{
    if(money >= 700){
        console.log("You can enjoy Ride 1, 2, 3, 4");
    }else{
        if(money >=500){
            console.log("You can enjoy Ride 1, 2, 3");
        }else{
            if(money >=300){
                console.log("You can enjoy Ride 1, 2");
            }else{
                if(money >= 200){
                    console.log("You can enjoy Ride 1");
                }else{
                    console.log("Just enjoy the views but You can't enjoy any ride");
                }
            }
        }
    }
}