fetch("data.json").then((response) => response.json()).then((data) => {

    const jsonArray = JSON.parse(data);
    console.log(jsonArray.lengthk);

}).catch((error) => {
    
})