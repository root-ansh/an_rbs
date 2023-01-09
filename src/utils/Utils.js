export  const  Utils = {

    deepCopyArray: function (arr) {
        return JSON.parse(JSON.stringify(arr))
    },


    removeItemOnce: function (arr, value) {
        console.log("called with ",arr,"and entry",value)
        let index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }
}
