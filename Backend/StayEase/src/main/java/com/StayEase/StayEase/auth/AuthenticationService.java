package com.StayEase.StayEase.auth;


import com.StayEase.StayEase.config.JwtService;
import com.StayEase.StayEase.user.*;
import jakarta.transaction.Transactional;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;


@Service
@Data
public class AuthenticationService {

    @Autowired
    private final UserRepo repository;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    @Transactional
    public AuthenticationResponse register(RegisterRequest request) throws Exception {

        var userPersonalDetails = UserPersonalDetails.builder()
                .fullName(request.getFullName())
                .lastName(request.getLastName())
                .build();

        Set<UserRole> roles = new HashSet<>();
        roles.add(roleRepository.findByName(Role.USER).orElseThrow(() -> new IllegalArgumentException("Role not Found")));

        var user = User.builder()
                .roles(roles)
                .userPersonalDetails(userPersonalDetails)
                .email(request.getEmail().toLowerCase())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

            repository.save(user);
            var jwtToken = JwtService.generateToken(user);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();


    }


    public boolean changePassword(String userEmail, RequestPassword requestPassword) {
        Optional<User> user = repository.findByEmail(userEmail);
        if(user.isPresent()){
            user.ifPresent(userUpdate ->{
                userUpdate.setPassword( passwordEncoder.encode(requestPassword.getPassword()));
                repository.save(userUpdate);
            });
            return true;
        }else {
            return false;
        }
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request){
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();

//        if(user.getRoles().stream().anyMatch(role -> role.getName().equals(Role.SELLER))){
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
            List<String> userRoles = user.getRoles().stream()
                    .map(role -> role.getName().toString())
                    .collect(Collectors.toList());

            var jwtToken = JwtService.generateToken(user);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .userId(user.getId())
                    .role(userRoles)
                    .build();
//        }else{
//            return null;
//        }
    }

}


