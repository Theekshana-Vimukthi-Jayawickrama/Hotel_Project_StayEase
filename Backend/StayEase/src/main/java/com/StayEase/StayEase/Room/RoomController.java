package com.StayEase.StayEase.Room;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/room/user")
@CrossOrigin(origins ="*")
public class RoomController {

    private final RoomService roomService;
    @GetMapping("/get/rooms")
    public ResponseEntity<List<RoomBookingResponse>> getRoomDetails(){

        try{
            return ResponseEntity.ok( roomService.getUserRoomDetails());
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

}
