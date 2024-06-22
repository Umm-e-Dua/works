// Asynchronous programing
console.log(1);
console.log(2);
setTimeout(function () {
    console.log(3);
}, 1000);
console.log(4);
// callback
var prepareTea = function (taskName, delay, cb) {
    setTimeout(function () {
        console.log(taskName);
        cb();
    }, delay);
};
prepareTea("add water", 0, function () {
    prepareTea("add tea", 1000, function () {
        console.log("fantastic tea");
    });
});
