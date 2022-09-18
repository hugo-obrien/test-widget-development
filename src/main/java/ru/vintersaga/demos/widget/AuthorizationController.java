package ru.vintersaga.demos.widget;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth")
public class AuthorizationController {

    private static final String APPLE_AUTH_URL_TEMPLATE =
            "https://appleid.apple.com/auth/authorize" +
                    "?state=[STATE]" +
                    "&response_type=code" +
                    "&client_id=[CLIENT_ID]" +
                    "&response_mode=form_post" +
                    "&redirect_uri=[REDIRECT_URI]";

    @GetMapping("/")
    public String getAuth() {
        return "Auth Service called";
    }

    @GetMapping("/sign-in")
    public ResponseEntity<?> doSignIn(
            @RequestParam("state") String state
    ) {
        String appleIdUrl = buildAppleIdAuthorizeURL(state);
        return ResponseEntity.status(HttpStatus.MOVED_PERMANENTLY).header(HttpHeaders.LOCATION, appleIdUrl).build();
    }

    private String buildAppleIdAuthorizeURL(String state) {
        return APPLE_AUTH_URL_TEMPLATE
                .replace("[STATE]", state)
                .replace("[CLIENT_ID]", AppleProperties.CLIENT_ID)
                .replace("[REDIRECT_URI]", AppleProperties.APP_URL
                        + ":" + AppleProperties.APP_PORT + "/auth%2Fapple")
                ;
    }
}
