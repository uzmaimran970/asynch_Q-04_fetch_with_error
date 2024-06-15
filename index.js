"use strict";
// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
function fetchWithError() {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            const a = false;
            if (a !== false) {
                resolve("data fetched successfully!");
            }
            else {
                rejected("data fetched failed!");
            }
        }, 1000);
        console.log("checking 1 sec delay");
    });
}
;
fetchWithError().then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
});
