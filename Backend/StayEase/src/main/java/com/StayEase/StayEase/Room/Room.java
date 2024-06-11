package com.StayEase.StayEase.Room;

import com.StayEase.StayEase.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
@Table(name = "Room")
public class Room {
    @Id
    @GeneratedValue(generator = "UUID")
    private UUID id;
    private String roomName;
    private int roomMaxQuantity;
    private double charges;
    private double offerPrice;
    private Integer availableRooms;

    @ManyToOne()
    @JoinColumn(name = "user")
    private User user;
}
