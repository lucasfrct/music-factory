export class PlayerClock {

    public constructor () { }

    public time() {
        let today = new Date();
        return String("0" +today.getHours()).substr(-2) +":"+
            String("0" + today.getMinutes()).substr(-2) +":"+
            String("0" + today.getSeconds()).substr(-2)
    }

    public format(seconds) {
        let hour = String("0" + (Math.floor(seconds / 3600) % 60))
        let minutes = String("0" + ( Math.floor(seconds / 60) % 60))
        let sec = String("0" + Math.floor(seconds % 60))
        
        return hour.substr(-2) +":"+ minutes.substr(-2) +":"+sec.substr(-2)
    }

}