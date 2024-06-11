package com.StayEase.StayEase.Room;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class RoomRequest {
    private String roomName;
    private Integer roomMaxQuantity;
    private Double charges;
    private Double offerPrice;
}
