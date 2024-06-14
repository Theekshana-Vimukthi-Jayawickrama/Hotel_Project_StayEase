package com.StayEase.StayEase.Admin;

import com.StayEase.StayEase.user.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AdminService {
    private final UserRepo userRepo;

    public List<UserResponse> getUsers(){
        List<User>  users = userRepo.findAll();
        List<UserResponse> userResponses = new ArrayList<>();


        for (User user : users) {
            for (UserRole role : user.getRoles()) {
                if (role.getName().equals(Role.USER)) {
                    UserResponse userResponse = UserResponse.builder()
                            .userId(user.getId())
                            .email(user.getEmail())
                            .lastName(user.getUserPersonalDetails().getLastName())
                            .firstName(user.getUserPersonalDetails().getFirstName())
                            .build();
                    userResponses.add(userResponse);
                    break;
                }
            }
        }
        return  userResponses;
    }

    public void  removeUser(String id) {

        Optional<User> user = userRepo.findById(UUID.fromString(id));

        if(user.isPresent()){
            userRepo.delete(user.get());

        }
    }
}
