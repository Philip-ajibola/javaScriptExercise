class AirConditional {
    constructor() {
        this.isOn = false;
        this.temperature = 16;
        this.count = 0;
    }
     isAcOn(){
        return this.isOn;
    }
    toggleSwitch(){
        this.isOn= !this.isOn;
    }
    getTemperature(){
        if(!this.isAcOn())return 0;
        return this.temperature;
    }
    increaseTemperature(){
        if(this.isAcOn())if(this.temperature<30) this.temperature++;
    }
    decreaseTemperature(){
        if(this.isAcOn())if(this.temperature>16) this.temperature--;
    }
    enterTemperatureFromRemote(param){
        if(this.isAcOn())if(param<=30 && param>=16) this.temperature = param;
    }


}
module.exports = AirConditional;