package com.juezcachimbo.virtualquizzes.security.mapper;

import com.juezcachimbo.virtualquizzes.model.User;
import com.juezcachimbo.virtualquizzes.security.dto.AuthenticatedUserDto;
import com.juezcachimbo.virtualquizzes.security.dto.RegistrationRequest;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;


@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    User convertToUser(RegistrationRequest registrationRequest);

    AuthenticatedUserDto convertToAuthenticatedUserDto(User user);

    User convertToUser(AuthenticatedUserDto authenticatedUserDto);

}
