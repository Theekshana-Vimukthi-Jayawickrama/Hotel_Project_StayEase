package com.StayEase.StayEase.Room;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/save/booking/{id}")
    public ResponseEntity<?> storeBooking(
            @RequestBody RoomBookingRequest roomRequest,
            @PathVariable String id
    ){
        try{
            roomService.saveBooking(roomRequest,id);
            return ResponseEntity.ok().build();
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/get/bookings/{id}")
    public ResponseEntity<List<RoomBookingRequest>> getBookings(@PathVariable String id){
        try{
            List<RoomBookingRequest> roomBookingRequests = roomService.getBookingById(id);
            return ResponseEntity.ok(roomBookingRequests);
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("roomBooking/delete/{id}")
    public ResponseEntity<?> removeRoomBooking(@PathVariable String id){
        try{
               if(roomService.cancelRoomBooking(id)){
                   return ResponseEntity.ok("Remove successfully");
               }
            return ResponseEntity.notFound().build();
        }catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }

}
