const readFileWithPromise = require("./readFileWithPromise");

const readTwoFiles = async () => {
  try {
    const customerData = await readFileWithPromise("./customers.csv");
    const orderData = await readFileWithPromise("./order.csv");
    console.log(customerData, "customerData");
    console.log(orderData, "orderData");
  } catch (error) {
    console.log(error);
  }

  console.log("Continue from here ....");
};

readTwoFiles();

//CALLBACK HELL
// readFileWithPromise("./customers.csv")
//   .then((customerData) => {
//     readFileWithPromise("./order.csv")
//       .then((orderData) => {
//         console.log(customerData, "customerData");
//         console.log(orderData, "orderData");
//       })
//       .catch((error) => console.log(error));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//CALLBACK HELL
//async
// fs.readFile("./customers.csv", {}, (error, data) => {
//   if (error) {
//     console.log("Something went wrong whilst reading file.");
//   } else {
//     let customerData = data.toString();
//     fs.readFile("./order.csv", {}, (error, data) => {
//       if (error) {
//         console.log("Something went wrong whilst reading file.");
//       } else {
//         const orderData = data.toString();
//         console.log(orderData, "orderData");
//       }
//     });
//     console.log(customerData, "customerData");
//   }
// });
