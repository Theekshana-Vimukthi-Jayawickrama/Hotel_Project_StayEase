package com.StayEase.StayEase.Admin;

import com.StayEase.StayEase.Room.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    private final RoomService roomService;
    @PostMapping("room/add/{id}")
    public ResponseEntity<?> roomAdd(@PathVariable String id, @RequestBody RoomRequest roomRequest){
        try {
            roomService.saveAndUpdateRoom(roomRequest,id);
            return  ResponseEntity.ok().build();
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }


    @GetMapping("get/rooms/available")
    public ResponseEntity<List<String>> getRoomsAvailable(){
        try {
            List<String> roomTypes =  roomService.getAvailableRooms();
            return ResponseEntity.ok(roomTypes);
        }catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("get/rooms/exists")
    public ResponseEntity<List<RoomResponse>> getRoomsExists(){
        try {
            List<RoomResponse> rooms = roomService.getRoomExists();
            return ResponseEntity.ok(rooms);
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
    @PutMapping("update/room")
    public  ResponseEntity<?> updateRooms(
            @RequestBody RoomResponse roomResponse
    ){
        try{
            roomService.updateRoomAdmin(roomResponse);
            return ResponseEntity.ok().build();

        }catch (Exception e){
            return  ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("delete/room/{id}")
    public  ResponseEntity<?> deleteRoom(@PathVariable String id){
        try{
            roomService.deleteAdminRoom(id);
            return ResponseEntity.ok().build();
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }


}
