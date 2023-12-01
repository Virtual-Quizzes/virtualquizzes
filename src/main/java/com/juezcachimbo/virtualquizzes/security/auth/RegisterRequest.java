package com.juezcachimbo.virtualquizzes.security.auth;

import com.juezcachimbo.virtualquizzes.security.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    String username;
    String password;
    String firstName;
    String lastName;
    String dob;
    Role role;
}
