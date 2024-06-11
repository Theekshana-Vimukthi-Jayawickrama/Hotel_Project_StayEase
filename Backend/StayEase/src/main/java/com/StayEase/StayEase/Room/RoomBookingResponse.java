package com.StayEase.StayEase.Room;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class RoomBookingResponse {
    private String roomType;
    private int quantity;
    private double charge;
}
