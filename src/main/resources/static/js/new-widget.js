(function () {
    console.log("Begin new-widget.js")
    const container = document.querySelector(".widget-container");
    const button = document.createElement("button");
    button.innerText = "Click me!";
    button.addEventListener("click", () => {
        //alert("Clicked!")
        console.log("Clicked!");
        callApi();
    });
    container.append(button);
})();

async function callApi() {
    console.log("Api called");

    const response = await fetch('http://localhost:8080/api/');
    response.text().then(function (text) {
       console.log(text);
    });
    //console.log(response.text().then());
}