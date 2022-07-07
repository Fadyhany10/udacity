process.on("beforeExit", () => {
    console.log("Print Fifth");
});

setTimeout(() => {
    console.log("Print Third");
});

process.nextTick(() => {
    console.log('Print Second');
  });

//mainline
console.log('Print First');
//end mainline

setImmediate(() => {
    console.log("Print Forth");
}, 0);



