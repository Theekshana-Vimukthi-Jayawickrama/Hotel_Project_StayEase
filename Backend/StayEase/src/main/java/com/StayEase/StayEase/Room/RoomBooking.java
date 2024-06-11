package com.StayEase.StayEase.Room;

import com.StayEase.StayEase.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
public class RoomBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String roomType;
    private int quantity;
    private String fullName;
    private String familyName;
    private Date checkInDate;
    private Date checkOutDate;
    private boolean processingStatus;
    private boolean expired;
    private int nights;
    private double charge; 

    @ManyToOne()
    @JoinColumn(name= "user")
    private User user;
}
