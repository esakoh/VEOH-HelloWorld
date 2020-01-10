let order = {
id : 1234,
message : 'my order',
delivered : false
}

function summarize_order(id, message, delivered){
    var summary = 'order id: ' + id + ', message:' + message +', delivered: '+ delivered;
    return summary;
}
var order_summary = summarize_order(order_id, order_message,order_delivered);
console.log(order_summary);

order_delivered= true;
var order_summary_2 = summarize_order(order_id, order_message,order_delivered);
console.log(order_summary_2);
