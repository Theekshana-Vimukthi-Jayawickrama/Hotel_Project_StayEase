package com.StayEase.StayEase.Room;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RoomBookingRepository extends JpaRepository<RoomBooking, UUID> {
}
