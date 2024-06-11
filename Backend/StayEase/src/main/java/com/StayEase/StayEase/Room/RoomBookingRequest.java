package com.StayEase.StayEase.Room;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private Date checkInDate;
    private Date checkOutDate;
}
