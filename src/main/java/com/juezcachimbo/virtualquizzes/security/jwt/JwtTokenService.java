package com.juezcachimbo.virtualquizzes.security.jwt;


import com.juezcachimbo.virtualquizzes.model.User;
import com.juezcachimbo.virtualquizzes.security.dto.AuthenticatedUserDto;
import com.juezcachimbo.virtualquizzes.security.dto.LoginRequest;
import com.juezcachimbo.virtualquizzes.security.dto.LoginResponse;
import com.juezcachimbo.virtualquizzes.security.mapper.UserMapper;
import com.juezcachimbo.virtualquizzes.security.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

// rimmel asghar
@Slf4j
@Service
@RequiredArgsConstructor
public class JwtTokenService {

    private final UserService userService;

    private final JwtTokenManager jwtTokenManager;

    private final AuthenticationManager authenticationManager;

    public LoginResponse getLoginResponse(LoginRequest loginRequest) {

        final String username = loginRequest.getUsername();
        final String password = loginRequest.getPassword();

        final UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(username, password);

        authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        final AuthenticatedUserDto authenticatedUserDto = userService.findAuthenticatedUserByUsername(username);

        final User user = UserMapper.INSTANCE.convertToUser(authenticatedUserDto);
        final String token = jwtTokenManager.generateToken(user);

        log.info("{} has successfully logged in!", user.getUsername());

        return new LoginResponse(token);
    }

}