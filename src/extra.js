//v1 test
request.onsuccess = (event) => {
  console.log("good");
  //result
  const db = event.target.result;
  console.log(`Database result: ${db}`);
  //error
  if (event.target.error) {
    console.error(`Database error: ${event.target.error}`);
  }
  //transection
  const transaction = event.target.transaction;
  console.log("Transaction:", transaction);
  //state
  console.log("Request state:", event.target.readyState);
  const objectStores = db.objectStoreNames; // Returns a DOMStringList of store names
  // returns object
  console.log(objectStores);
  console.log(db.name); // Outputs the database name
  console.log(db.version); // Outputs the version of the database
};
////v2
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];

const dbName = "new_dataBase";
const request = indexedDB.open(dbName, 2);
request.onerror = (event) => {
  console.error("database error: ", event.target.error?.message);
};
request.onupgradeneeded = (event) => {
  const db = event.target.result;
  const objectStore = db.createObjectStore("customers", { keyPath: "ssn" });
  objectStore.createIndex("name", "name", { unique: false });
  objectStore.createIndex("email", "email", { unique: true });
  console.log("hi");

  objectStore.transaction.oncomplete = (event) => {
    console.log("hi");
    const customerObjectStore = db
      .transaction("customers", "readwrite")
      .objectStore("customers");
    customerData.forEach((customer) => {
      customerObjectStore.add(customer);
    });
    console.log(customerObjectStore);
  };
};
