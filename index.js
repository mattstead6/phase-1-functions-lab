function distanceFromHqInBlocks(blockNumber){
    if (blockNumber > 42){
        return blockNumber - 42
    }
    else {
        return 42 - blockNumber
    }
}


function distanceFromHqInFeet(blockNumber){
    return distanceFromHqInBlocks(blockNumber)*264
}

function distanceTravelledInFeet(start, end){
    if (start > end){
        return (start-end)*264
    } else
    return (end-start)*264
}

function calculatesFarePrice(start, end){
    const distance = distanceTravelledInFeet(start, end);
    if (distance < 400){
        return 0}
    if (distance > 400 && distance < 2000){
        return (distance-400) * 0.02
    }
    if (distance > 2000 && distance < 2500){
        return 25
    }
    if (distance > 2500){
        return "cannot travel that far"
    }
}

  