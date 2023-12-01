package com.juezcachimbo.virtualquizzes.security.auth;

import com.juezcachimbo.virtualquizzes.security.user.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping(value = "login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request)
    {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping(value = "register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request)
    {

        if(request.role == Role.PROFESSOR) {
            return ResponseEntity.ok(authService.registerProfessor(request));
        }

        if(request.role == Role.ADMIN) {
            return ResponseEntity.ok(authService.registerAdmin(request));
        }

        return ResponseEntity.ok(authService.registerStudent(request));
    }
}