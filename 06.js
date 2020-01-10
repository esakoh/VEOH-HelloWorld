function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

class order  {
   
    delivered = false;
    constructor(id, message){
        this.id = id;
        this.message = message;
    }

    summarize= async()=>{
        //simulate database delay or heavy calculation
        await sleep(1000);
        const summary = 'order id: ' + this.id +', message:' + this.message 
        +', delivered: '+ this.delivered;
        console.log('end summarize');
        return summary;
    }
    }
    
    let order_obj = new order(1237, 'second order');
    console.log('AAAA');
    console.log('BBBB');
    //(param1, param 2, ....)=>{code}
   // const order_summary = order_obj.summarize().then((summary)=>{
     //   console.log(summary);
   // });
   
   
    
