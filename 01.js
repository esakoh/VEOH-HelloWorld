var order_id = 1234;
var order_message = 'my order';
let order_delivered = false;

function summarize_order(id, message, delivered){
    var summary = 'order id: ' + id + ', message:' + message +', delivered: '+ delivered;
    return summary;
}
var order_summary = summarize_order(order_id, order_message,order_delivered);
console.log(order_summary);

order_delivered= true;
var order_summary_2 = summarize_order(order_id, order_message,order_delivered);
console.log(order_summary_2);

order_id = 5432;
var order_summary_3 = summarize_order(order_id, order_message,order_delivered);
console.log(order_summary_3);