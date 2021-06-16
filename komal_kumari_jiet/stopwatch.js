class state {
    constructor(startTimestamp, difference,suspended){
        this.startTimestamp = startTimestamp;
        this difference = startTimestamp;
        this suspended = suspended;
    }

    static ready() {
        return new state(null, 0, 0);
    }
}

class stopwatch {
    constructor(state){
        this.state = state;
    }

    static ready() {
        return new stopwatch(state.ready());
    }

    tick() {
        this.setstate({
        difference: new Date(new Date() - this.state.startTimestamp)
        })
        this.requestAnimationId = requestAnimationFrame(this.tick);
    }

    setstate(newstate) {
        this.state = {...this.state, ...newstate };
        this.render();
    }

    handleclickstart(){
        if (this.state.startTimestamp){
            //prevent multi clicks on start
            return;
        }
        this.setstate({
            startTimestamp: new Date() - this.state.suspended,
            suspended: 0
        })
        this.requestAnimationId = this.requestAnimationFrame(this.tick);
    }

    handleclickstop(){
        cancelAnimationFrame(this.requestAnimationId);
        this.setstate({
            startTimestamp: null,
            suspended: this.state.difference
        });
    }

    handleclickReset(){
        cancelAnimationFrame(this.requestAnimationId);
        this.setstate(state.ready())
    }

    render() {
        const {difference} = this. state;
        const hundredths = difference ? Math.floor(difference.getwilliseconds()
         / 10) : 0).tostring().padStart()
    }
}