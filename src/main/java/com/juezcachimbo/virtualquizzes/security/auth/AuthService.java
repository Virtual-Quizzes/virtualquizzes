package com.juezcachimbo.virtualquizzes.security.auth;

import com.juezcachimbo.virtualquizzes.security.jwt.JwtService;
import com.juezcachimbo.virtualquizzes.security.user.Role;
import com.juezcachimbo.virtualquizzes.security.user.User;
import com.juezcachimbo.virtualquizzes.security.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;



@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        UserDetails user=userRepository.findByUsername(request.getUsername()).orElseThrow();
        String token=jwtService.getToken(user);
        return AuthResponse.builder()
                .token(token)
                .build();

    }

    public AuthResponse registerAdmin(RegisterRequest request) {
        User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode( request.getPassword() ))
                .firstname(request.getFirstName())
                .lastname(request.getLastName())
                .dob(request.getDob())
                .role(Role.ADMIN)
                .build();

        userRepository.save(user);

        return AuthResponse.builder().token(jwtService.getToken(user)).build();
    }

    public AuthResponse registerStudent(RegisterRequest request) {
        User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode( request.getPassword() ))
                .firstname(request.getFirstName())
                .lastname(request.getLastName())
                .dob(request.getDob())
                .role(Role.STUDENT)
                .build();

        userRepository.save(user);

        return AuthResponse.builder().token(jwtService.getToken(user)).build();
    }

    public AuthResponse registerProfessor(RegisterRequest request) {
        User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode( request.getPassword()))
                .firstname(request.getFirstName())
                .lastname(request.getLastName())
                .dob(request.getDob())
                .role(Role.PROFESSOR)
                .build();

        userRepository.save(user);

        return AuthResponse.builder().token(jwtService.getToken(user)).token(null).build();
    }

}
