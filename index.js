// Code your solution in this file!
function distanceFromHqInBlocks(pickupBlock) {
    return Math.abs(pickupBlock - 42);
}

function distanceFromHqInFeet(pickupBlock) {
    return distanceFromHqInBlocks(pickupBlock) * 264;
}

function distanceTravelledInFeet(pickupBlock, dropoffBlock) {
    return Math.abs(dropoffBlock - pickupBlock) * 264;
}

function calculatesFarePrice(start, destination) {
    let feetTravelled; 
    feetTravelled = distanceTravelledInFeet(start, destination);
    
    if(feetTravelled <= 400) {
        return 0;
    }
    else {
        feetTravelled = feetTravelled - 400;

        if(feetTravelled <= 1600) {
            return feetTravelled * .02;
        }
        else if(feetTravelled > 1600 && feetTravelled <= 2100) {
            return 25;
        }
        else {
            return 'cannot travel that far';
        }
    }
          
    
}