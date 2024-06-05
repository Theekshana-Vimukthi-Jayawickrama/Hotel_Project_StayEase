package com.StayEase.StayEase;

import com.StayEase.StayEase.user.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.*;

@SpringBootApplication
public class StayEaseApplication implements CommandLineRunner {
	@Autowired
	private final RoleRepository roleRepository;
	private final UserRepo userRepo;
	private final PasswordEncoder passwordEncoder;

    public StayEaseApplication(RoleRepository roleRepository, UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.roleRepository = roleRepository;
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public static void main(String[] args) {
		SpringApplication.run(StayEaseApplication.class, args);
	}

	public void run(String... args){
		Optional<UserRole> adminAccount = roleRepository.findByName(Role.ADMIN);

		List<UserRole> allRoles = roleRepository.findAll();
		List<Role> role = Arrays.stream(Role.values()).toList();

		for (Role userRole : role) {
			if(allRoles.stream().allMatch(userRoles -> userRoles.getName() != userRole )){
				UserRole userRoles = UserRole.builder()
						.name(userRole)
						.build();
				roleRepository.save(userRoles);
			}
		}

		if(adminAccount.isEmpty()){

			Set<UserRole> roles = new HashSet<>();
			roles.add(UserRole.builder()
					.name(Role.SUPERADMIN)
					.build());

			UserPersonalDetails personalDetails = UserPersonalDetails.builder()
					.fullName("Super Admin")
					.lastName("Super Admin")
					.build();
			User user = new User();
			user.setRoles(roles);
			user.setEmail("admin@gmail.com");
			user.setPassword(passwordEncoder.encode("admin1234"));
			user.setUserPersonalDetails(personalDetails);
			userRepo.save(user);
		}
	}
}
