package com.StayEase.StayEase.Room;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;


import java.time.LocalDate;
import java.util.List;

@Component
public class ScheduledTaskService{
    private RoomBookingRepository roomBookingRepository;
    @Scheduled(cron = "0 0 0 * * ?")
    public void dailyUpdateTask() {
        LocalDate date = LocalDate.now();
        List<RoomBooking> roomBookingList = roomBookingRepository.findAll();

            for(RoomBooking roomBooking: roomBookingList){
                        if(date.isBefore(roomBooking.getCheckInDate())){
                            roomBooking.setExpired(false);
                            roomBooking.setProcessingStatus(true);
                        } else if (date.isAfter(roomBooking.getCheckInDate()) && date.isBefore(roomBooking.getCheckOutDate())) {
                            roomBooking.setExpired(false);
                            roomBooking.setProcessingStatus(false);
                        } else if (date.isAfter(roomBooking.getCheckInDate()) && date.isAfter(roomBooking.getCheckOutDate())) {
                            roomBooking.setExpired(true);
                            roomBooking.setProcessingStatus(false);
                        }else{
                            roomBooking.setExpired(true);
                            roomBooking.setProcessingStatus(false);
                        }
            }
        }
}
