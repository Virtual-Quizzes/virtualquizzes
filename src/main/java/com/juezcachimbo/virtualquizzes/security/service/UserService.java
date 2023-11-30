package com.juezcachimbo.virtualquizzes.security.service;

import com.juezcachimbo.virtualquizzes.model.User;
import com.juezcachimbo.virtualquizzes.security.dto.AuthenticatedUserDto;
import com.juezcachimbo.virtualquizzes.security.dto.RegistrationRequest;
import com.juezcachimbo.virtualquizzes.security.dto.RegistrationResponse;

public interface UserService {

    User findByUsername(String username);

    RegistrationResponse registration(RegistrationRequest registrationRequest);

    AuthenticatedUserDto findAuthenticatedUserByUsername(String username);

}
