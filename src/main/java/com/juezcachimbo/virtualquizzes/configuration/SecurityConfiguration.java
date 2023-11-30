package com.juezcachimbo.virtualquizzes.configuration;

import com.juezcachimbo.virtualquizzes.security.jwt.JwtAuthenticationEntryPoint;
import com.juezcachimbo.virtualquizzes.security.jwt.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration {

	private final JwtAuthenticationFilter jwtAuthenticationFilter;

	private final JwtAuthenticationEntryPoint unauthorizedHandler;

	@Bean
	public AuthenticationManager authenticationManager(final AuthenticationConfiguration authenticationConfiguration) throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

		//@formatter:off

		http
				// Configuración CORS - si tienes configuraciones CORS personalizadas, define un bean CorsConfigurationSource
				// Si no, y quieres permitir todas las solicitudes, puedes comentar la siguiente línea
				.cors(cors -> cors.configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues()))

				// Deshabilitar CSRF ya que estamos asumiendo que es una API REST que no necesita protección CSRF
				.csrf(CsrfConfigurer::disable)

				// Añadir el filtro JWT antes del proceso de autenticación de nombre de usuario y contraseña
				.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)

				// Configuración de la autorización de solicitudes utilizando expresiones lambda
				.authorizeHttpRequests(authz -> authz
						.requestMatchers("/register", "/health", "/login", "/v3/api-docs/**", "/swagger-ui/**", "/swagger-ui.html", "/actuator/**").permitAll()
						.anyRequest().authenticated()
				)

				// Manejo de excepciones
				.exceptionHandling(ex -> ex
						.authenticationEntryPoint(unauthorizedHandler)
				)

				// Configuración del manejo de sesiones para ser stateless, lo que es típico en APIs REST
				.sessionManagement(s -> s
						.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				);

		// Devolver el objeto HttpSecurity construido
		return http.build();
/*
		return http.cors().and().csrf().disable()
				.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
				.authorizeRequests()
				.antMatchers("/register","/health","/login","/v3/api-docs/**", "/swagger-ui/**", "/swagger-ui.html", "/actuator/**").permitAll()
				.anyRequest().authenticated().and()
				.exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				.and().build();
*/
		//@formatter:on
	}


}
