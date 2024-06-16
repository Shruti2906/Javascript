const url = "https://api.github.com/users/shruti2906";

function getPromise() {
    const p = new Promise((resolve, reject) => {
        console.log("simple statement in promise");
        const data = fetch(url);
        console.log("after fetch statement");
        resolve(data);
    });
    return p;
}

const val = getPromise();
console.log("rest code");
