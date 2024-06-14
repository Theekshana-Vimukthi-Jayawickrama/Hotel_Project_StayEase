package com.StayEase.StayEase;

import com.StayEase.StayEase.Room.RoomTypeRepository;
import com.StayEase.StayEase.Room.RoomTypes;
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
	private  final RoomTypeRepository roomTypeRepository;

    public StayEaseApplication(RoleRepository roleRepository, UserRepo userRepo, PasswordEncoder passwordEncoder, RoomTypeRepository roomTypeRepository) {
        this.roleRepository = roleRepository;
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
        this.roomTypeRepository = roomTypeRepository;
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

		List<String> roomType = new ArrayList<>();
		roomType.add("Deluxe".toUpperCase().trim());
		roomType.add(" Premier Ocean".toUpperCase().trim());
		roomType.add("Premier Ocean Suite".toUpperCase().trim());
		roomType.add("Specialty Suite".toUpperCase().trim());
		roomType.add("Two Deluxe Rooms Connecting".toUpperCase().trim());
		roomType.add("Two Premier Ocean Rooms Connecting".toUpperCase().trim());

		for(String room: roomType){
			Optional<RoomTypes> roomTypes = roomTypeRepository.findByName(room);
			if (roomTypes.isEmpty()){
				RoomTypes roomTypes1 = RoomTypes.builder()
						.name(room.toUpperCase().trim())
						.build();
				roomTypeRepository.save(roomTypes1);
			}

		}

		if(adminAccount.isEmpty()){

			Set<UserRole> roles = new HashSet<>();
			roles.add(UserRole.builder()
					.name(Role.SUPERADMIN)
					.build());

			UserPersonalDetails personalDetails = UserPersonalDetails.builder()
					.firstName("Super Admin")
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
