const fs = require("fs");

for (let i = 0; i < 2000000000; i++) {
    if (i === 1999999999) {
        console.log("blocking loop");
    }
}

// time- phase 4
setTimeout(() => {
    console.log("timeout - 5s ----- Timers 4");
}, 5000);

// mainline
console.log("Hello, ----------- mainline");

// time - phase 1
setTimeout(() => {
    console.log("timeout - 0s ----- Timers 1");
}, 0);

// micro before exit
process.on("beforeExit", () => {
    console.log("process.on ------- beforeExit");
});

// time - phase 1
setImmediate(() => {
    console.log("immediate -------- Timers 1");
});

// fs read ---> i/o polling
fs.readFile(__filename, () => {
      // time-phase 3
    setTimeout(() => {
        console.log("timeout i/0 3s --- Timers 3");

        for (let i = 0; i < 3000000000; i++) {
            if (i === 2999999999) {
                console.log("blocking loop");
            }
        }
 //time -phase 3
        setImmediate(() => {
            console.log("microtask");
        });
    }, 3000);
//time -phase 2
    setImmediate(() => {
        console.log("immediate i/o ---- Check");
    });})

    //time -phase 1
    setTimeout(() => {
        console.log("timeout i/0 0s --- Timers 2");
    }, 0); 





//blocking loop
//Hello, ----------- mainline
//timeout - 0s ----- Timers 1
//timeout i/0 0s --- Timers 2
//immediate -------- Timers 1
//immediate i/o ---- Check
//timeout i/0 3s --- Timers 3
//blocking loop
//microtask
//timeout - 5s ----- Timers 4
//process.on ------- beforeExit
