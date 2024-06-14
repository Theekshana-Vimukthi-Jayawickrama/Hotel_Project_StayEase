package com.StayEase.StayEase.Room;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class RoomBookingRequest {
    private String roomType;
    private int quantity;
    private String fullName;
    private String familyName;
    private int nights;
    private double charge;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private String email;
    private String contactNo;
    private boolean expired;
    private boolean processing;
    private String id;
}
