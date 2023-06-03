const checkObj = (str, obj)=>console.log(str in obj);
const table2 = {
    plate:"big",
    spoon:"little",
    apple:"red",
    mug:"middle"
};
checkObj("plate", table2);