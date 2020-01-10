class order  {
   
    delivered = false;
    constructor(id, message){
        this.id = id;
        this.message = message;
    }
    summarize(){
        const summary = 'order id: ' + this.id +', message:' + this.message +', delivered: '+ this.delivered;
        return summary;
    }

    summarize_2=()=>{
        const summary = 'order id: ' + this.id +', message:' + this.message +', delivered: '+ this.delivered;
        return summary;
    }
    }
    
    function summarize_order(id, message, delivered){
        var summary = 'order id: ' + id + ', message:' + message +', delivered: '+ delivered;
        return summary;
    }

    let order_obj = new order(1237, 'second order');

    const order_summary = order_obj.summarize();
    console.log(order_summary);
    
    order_delivered= true;
    const order_summary_2 = order_obj.summarize_2();
    console.log(order_summary_2);
    