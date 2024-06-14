package com.StayEase.StayEase.Room;

import com.StayEase.StayEase.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
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
    private String contactNo;
    private String email;
    private Integer quantity;
    private String fullName;
    private String familyName;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private boolean processingStatus;
    private boolean expired;
    private int nights;
    private double charge; 

    @ManyToOne()
    @JoinColumn(name= "user")
    private User user;
}
