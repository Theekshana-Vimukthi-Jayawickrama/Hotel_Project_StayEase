package com.StayEase.StayEase.offer;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table
public class Offer {
    private UUID id;
    private String mainTitle;
    private String subTitle;
    private Double price;
}
