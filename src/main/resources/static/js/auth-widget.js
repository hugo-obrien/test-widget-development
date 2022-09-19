(function () {
    globalUrl = 'http://localhost:8080';
    state = document.currentScript.getAttribute("state");

    appleSignInButtonInit();
})();

function appleSignInButtonInit() {
    const buttonContainer = document.querySelector(".apple-widget");
    const divButton = document.createElement("div");
    divButton.addEventListener("click", () => {
        appleIdSignIn(state);
    })
    buttonContainer.append(divButton);

    const logo = document.createElement("img");
    logo.src = globalUrl + "/icons/apple/button-default.png";
    divButton.appendChild(logo);
}

async function appleIdSignIn(state) {
    console.log("appleIdSignIn: Begin with state: " + state);
    const url = globalUrl + '/auth/';

    console.log("appleIdSignIn: Const URL: " + url);

    var fullLink = buildUrl(url, state);
    console.log("appleIdSingIn: Build URL: " + fullLink);

    location.href = fullLink;
}

function buildUrl(url, state) {
    return url + '?state=' + state;
}
