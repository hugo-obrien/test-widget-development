(function () {
    const container = document.querySelector(".auth-widget-container");
    var state = document.currentScript.getAttribute("state");

    const appleSignButton = document.createElement("button");
    appleSignButton.innerText = "Sign in with apple id";
    appleSignButton.addEventListener("click", () => {
        appleIdSignIn(state);
    });

    container.append(appleSignButton);
})();

async function appleIdSignIn(state) {
    console.log("appleIdSignIn: Begin with state: " + state);
    var url = 'http://localhost:8080/auth/sign-in?state='+state;
    console.log("appleIdSignIn: Url: " + url);

    location.href = url;

    /*await fetch(url, {
        mode: 'no-cors',
        method: 'get'
    });*/
}

async function authTest(state) {
    console.log("Sign in with apple id. State is: ", state);

    const response = await fetch('http://localhost:8080/auth/');

    response.text().then(function (text) {
        console.log("Response text: " + text);
    })
}
