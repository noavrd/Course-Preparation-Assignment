let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let num in obj) {
        if (typeof obj[num] === "number") {
            obj[num] = (obj[num]) * 2;
        }
    }
}

