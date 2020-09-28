console.log("Start of the execution queue");

for (var i = 1; i <= 100; i++) {
    console.log(i);
};
setTimeout(function() { console.log("Final code block to be executed"), 0 });
console.log("End of the loop printing");