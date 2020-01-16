function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

class order  {
    products = ['apple','milk'];

   
    delivered = false;
    constructor(id, message){
        this.id = id;
        this.message = message;
    }

    summarize= async()=>{
        console.log('start summarize');
        //simulate database delay or heavy calculation
        await sleep(1000);
        let summary = 'order id: ' + this.id +', message:' + this.message 
        +', delivered: '+ this.delivered;

        summary => 'products: [';
        this.products.forEach((product, index)=>{
            summary += product + ', ';
        })
        summary += ']'
        console.log('end summarize');
        return summary;
    }
    deliver= async()=>{
        console.log('start deliver');
        //simulate database delay or heavy calculation
        await sleep(1000);
        this.delivered=true;
        const summary = 'order id: ' + this.id +', message:' + this.message 
        +', delivered: '+ this.delivered;
        
        console.log('end deliver');
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
   order_obj.summarize().then((summary) => {
    console.log(summary);
});

    order_obj.deliver().then(() => {
        console.log('delivered!');
        return order_obj.summarize();
}).then((summary) => {
    console.log(summary);
});
   
    
