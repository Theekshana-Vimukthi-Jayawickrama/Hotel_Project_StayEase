package com.StayEase.StayEase.Room;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Optional;
import java.util.UUID;
@EnableJpaRepositories
public interface RoomTypeRepository extends JpaRepository<RoomTypes, UUID> {

    Optional<RoomTypes> findByName(String name);
}
