package com.StayEase.StayEase.auth;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        try {
                return ResponseEntity.ok(service.register(request));

        } catch (Exception e) {
            AuthenticationResponse failureResponse = new AuthenticationResponse("Registration failed", null, null);
            return ResponseEntity.badRequest().body(failureResponse);
        }
    }

    @PutMapping("/updatePassword/{userEmail}")
    public ResponseEntity<Boolean> changePassword(@PathVariable String userEmail, @RequestBody RequestPassword requestPassword) {
        boolean status = service.changePassword(userEmail, requestPassword);

        if (status) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }


    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
