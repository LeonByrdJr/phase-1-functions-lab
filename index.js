// Code your solution in this file!
const hq = 42

function distanceFromHqInBlocks(location){
    if(hq > location){
        return hq - location
    } else if(hq < location){
        return location - hq
    }
}

function distanceFromHqInFeet(location){
    if(hq > location){
        return (hq - location) * 264
    } else if(hq < location){
        return (location - hq) * 264
    }
}

function distanceTravelledInFeet(start, destination){
    if(start > destination){
        return (start - destination) * 264
    } else if(start < destination){
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination){
const difference = Math.abs(start - destination)
const feet = (difference) * 264
    if(feet < 400){
        return 0
    } else if(feet > 400 && feet < 2000){
        return (feet - 400) * .02
    } else if(feet > 2000 && feet < 2500){
        return 25
    } else if(feet > 2500){
        return 'cannot travel that far'
    }
}

// if((feet) <= 400){
//         return 0
//     } else if(feet > 400 && feet < 2000){
//         return (feet - 400) * .02
//     }
