// use expreess eror to make custom eroors
class ExpressError extends Error {
    constructor(status, message){
        super();
        this.status = status;
        this.message = message;

        console.log(`ExpressError created: Status - ${status}, Message - "${message}"`);
    }
}

module.exports = ExpressError;