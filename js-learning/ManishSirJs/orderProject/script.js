const orders = [
  { id: "001", items: ["item1", "item2", "item3"], status: "Active" },
  { id: "002", items: ["apple", "mango", "orange"], status: "Active" },
];

function placeOrder(id, callback) {
  setTimeout(() => {
    const orderItem = orders.find((item) => {
      if (item.id == id) {
        return item;
      }
    });
    if (!orderItem) {
      console.log("Item Not Found");
      return;
    }
    orderItem.status = "Placed";
    console.log(`Order of id= ${orderItem.id} is placed`);
    callback(orderItem);
  }, 500);
}

function processOrder(item, callback) {
  setTimeout(() => {
    item.status = "Processed";
    console.log(`Order of id= ${item.id} is Processed`);
    callback(item);
  }, 2000);
}

function deliverOrder(itemDeliver, callback) {
  setTimeout(() => {
    itemDeliver.status = "Delivered";
    console.log(`Order of id= ${itemDeliver.id} is Delivered`);
    callback(itemDeliver);
  }, 2000);
}

function display(itemDeliver) {
  console.log(itemDeliver);
}

placeOrder("002", (orderedItem) => {
  processOrder(orderedItem, (item) => {
    deliverOrder(item, display);
  });
});
