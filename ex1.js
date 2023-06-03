const funcObject = obj => {
    for (let key in obj) {
        if (obj.hasOwnProperty (key)) {
            console.log (`${key}:${obj[key]}`);
        };
    };
};
const tableSetting = {
    tablecloth: "lite-pink"
};
const table = Object.create(tableSetting);
table.plate="big";
table.spoon="little";
table.apple="red";
table.mug="middle";
funcObject(table);