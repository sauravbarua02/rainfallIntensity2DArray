const containerEl = document.getElementById("container");
let rainfallInfo = [["January", 25],["February", 50], ["March", 10], ["July", 70]];

function maxRainfall(rainfallInfo){
    let maxRainfallMonth = rainfallInfo[0][0];
    let maxRainfallIntensity = rainfallInfo[0][1];

    for(let i=1; i<rainfallInfo.length; i++){
        if(maxRainfallIntensity < rainfallInfo[i][1]){
            maxRainfallIntensity = rainfallInfo[i][1];
            maxRainfallMonth = rainfallInfo[i][0];
        }
    }
    return maxRainfallMonth;
}

function display(){
    let output = maxRainfall(rainfallInfo);
    containerEl.innerText = `The highest rainfall in ${output} month`;
}

display();





