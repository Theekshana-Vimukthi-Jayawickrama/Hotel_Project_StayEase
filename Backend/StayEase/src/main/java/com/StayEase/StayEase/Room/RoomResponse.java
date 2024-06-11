package com.StayEase.StayEase.Room;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class RoomResponse {
    private String id;
    private String roomName;
    private Integer roomMaxQuantity;
    private Double charges;
    private Double offerPrice;
    private Integer availableRooms;
}
