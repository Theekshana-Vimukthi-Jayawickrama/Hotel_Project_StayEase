package com.StayEase.StayEase.Room;

import com.StayEase.StayEase.user.User;
import com.StayEase.StayEase.user.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RoomService {
    private final  RoomRepository roomRepository;
    private final RoomTypeRepository roomTypeRepository;
    private final RoomBookingRepository roomBookingRepository;
    private final UserRepo userRepo;

    public void saveAndUpdateRoom(RoomRequest roomRequest, String id){
        Optional<Room> room = roomRepository.findByRoomName(roomRequest.getRoomName());
        Optional<User> user = userRepo.findById(UUID.fromString(id));

        if(room.isPresent() && user.isPresent()){
            if( roomRequest.getRoomName() != null){
                room.get().setRoomName(roomRequest.getRoomName().trim().toUpperCase());
            }
            if (roomRequest.getRoomMaxQuantity() != null) {
                room.get().setRoomMaxQuantity(roomRequest.getRoomMaxQuantity());
                room.get().setAvailableRooms(availableRoomAdmin(roomRequest.getRoomMaxQuantity(), roomRequest.getRoomName()));
            }
            if(roomRequest.getCharges() != null){
                room.get().setCharges(roomRequest.getCharges());
            }
            if(roomRequest.getOfferPrice() != null){
                room.get().setOfferPrice(roomRequest.getOfferPrice());
            }
            room.get().setUser(user.get());

            roomRepository.save(room.get());
        }else{
            if(user.isPresent()){
                Room room1 = Room.builder()
                        .roomMaxQuantity(roomRequest.getRoomMaxQuantity())
                        .roomName(roomRequest.getRoomName().toUpperCase().trim())
                        .availableRooms(roomRequest.getRoomMaxQuantity())
                        .charges(roomRequest.getCharges())
                        .offerPrice(roomRequest.getOfferPrice())
                        .user(user.get())
                        .build();
                roomRepository.save(room1);
            }
        }
    }

    private int availableRoomAdmin(int roomMaxQuantity,String roomName) {
        List<RoomBooking> room= roomBookingRepository.findAll();
        int availableRooms = roomMaxQuantity;
        for(RoomBooking roomBooking: room){
            if(roomBooking.getRoomType().trim().equals(roomName.toUpperCase().trim())){
                availableRooms = roomMaxQuantity - 1;
            }
        }
        return availableRooms;
    }


    public List<String> getAvailableRooms() {
        List<RoomTypes> roomTypes = roomTypeRepository.findAll();
        List<String> roomTypesRequests= new ArrayList<>();

        for(RoomTypes roomType:roomTypes){
            Optional<Room> room = roomRepository.findByRoomName(roomType.getName().toUpperCase().trim());
            if(room.isPresent()){
                continue;
            }else{
            roomTypesRequests.add(roomType.getName().toUpperCase());
            }
        }
        return roomTypesRequests;
    }

    public void makeBooking(RoomBookingRequest roomBookingRequest, String id){

        Optional<User> user = userRepo.findById(UUID.fromString(id));

        if(user.isPresent()){
            RoomBooking roomBooking = RoomBooking.builder()
                    .charge(roomBookingRequest.getCharge())
                    .familyName(roomBookingRequest.getFamilyName())
                    .nights(roomBookingRequest.getNights())
                    .roomType(roomBookingRequest.getRoomType())
                    .fullName(roomBookingRequest.getFullName())
                    .quantity(roomBookingRequest.getQuantity())
                    .checkOutDate(roomBookingRequest.getCheckOutDate())
                    .checkInDate(roomBookingRequest.getCheckInDate())
                    .processingStatus(true)
                    .expired(false)
                    .user(user.get())
                    .build();
            if(availableUser(roomBookingRequest.getQuantity(), roomBookingRequest.getRoomType() )){
                    roomBookingRepository.save(roomBooking);
            }
        }

    }

    private boolean availableUser(int quantity,String roomType) {
        Optional<Room> room= roomRepository.findByRoomName(roomType.toUpperCase().trim());

        if(room.isPresent()){
            int max = room.get().getRoomMaxQuantity();
            int available =  max - quantity;
            room.get().setAvailableRooms(available);
            roomRepository.save(room.get());
            return true;
        }
        return false;
    }

    public List<RoomBookingResponse> getUserRoomDetails(){
        List<RoomTypes> roomTypes = roomTypeRepository.findAll();
        List<RoomBookingResponse> roomTypesRequests= new ArrayList<>();

        for(RoomTypes roomType:roomTypes){
            Optional<Room> room = roomRepository.findByRoomName(roomType.getName().toUpperCase().trim());
            if(room.isPresent()){
                RoomBookingResponse roomBookingResponse = RoomBookingResponse.builder()
                        .charge(room.get().getCharges())
                        .quantity(room.get().getAvailableRooms())
                        .roomType(room.get().getRoomName())
                        .build();
                roomTypesRequests.add(roomBookingResponse);
            }
        }
        return roomTypesRequests;
    }

    public List<RoomResponse> getRoomExists() {

        List<Room> rooms = roomRepository.findAll();
        List<RoomResponse> roomResponses = new ArrayList<>();
        for(Room room : rooms){
            RoomResponse roomResponse = RoomResponse.builder()
                    .id(room.getId().toString())
                    .availableRooms(room.getAvailableRooms())
                    .roomMaxQuantity(room.getRoomMaxQuantity())
                    .charges(room.getCharges())
                    .offerPrice(room.getOfferPrice())
                    .roomName(room.getRoomName().toString())
                    .build();
            roomResponses.add(roomResponse);
        }
        return  roomResponses;
    }

    public void updateRoomAdmin(RoomResponse roomResponse) {

        Optional<Room> room = roomRepository.findById(UUID.fromString(roomResponse.getId()));

        if(room.isPresent()){

            if(roomResponse.getRoomMaxQuantity() != null){
                room.get().setRoomMaxQuantity(roomResponse.getRoomMaxQuantity());
                room.get().setAvailableRooms(availableRoomAdmin(roomResponse.getRoomMaxQuantity(), roomResponse.getRoomName()));
            }
            if(roomResponse.getCharges() != null){room.get().setCharges(roomResponse.getCharges());}
            if(roomResponse.getOfferPrice() != null){room.get().setOfferPrice(roomResponse.getOfferPrice());}

           roomRepository.save(room.get());

        }
    }

    public void deleteAdminRoom(String id) {

        Optional<Room> room = roomRepository.findById(UUID.fromString(id));
        if(room.isPresent()){
            roomRepository.delete(room.get());
        }
    }

    public void saveBooking(RoomBookingRequest roomBookingRequest, String id){
        Optional<User> user = userRepo.findById(UUID.fromString(id));

        if(user.isPresent()){
            RoomBooking roomBooking = RoomBooking.builder()
                    .expired(false)
                    .processingStatus(true)
                    .checkInDate(roomBookingRequest.getCheckInDate())
                    .checkOutDate(roomBookingRequest.getCheckOutDate())
                    .quantity(roomBookingRequest.getQuantity())
                    .user(user.get())
                    .fullName(roomBookingRequest.getFullName())
                    .contactNo(roomBookingRequest.getContactNo())
                    .roomType(roomBookingRequest.getRoomType())
                    .familyName(roomBookingRequest.getFamilyName())
                    .charge(roomBookingRequest.getCharge())
                    .email(roomBookingRequest.getEmail())
                    .nights(roomBookingRequest.getNights())
                    .build();
            roomBookingRepository.save(roomBooking);
        }
    }


    public List<RoomBookingRequest> getBookingById(String id) {

        Optional<User> user = userRepo.findById(UUID.fromString(id));
        List<RoomBookingRequest> roomBookingRequest = new ArrayList<>();
        if(user.isPresent()){
            List<RoomBooking> roomBookings = user.get().getRoomBookings();

            for(RoomBooking roomBooking : roomBookings){
                RoomBookingRequest roomBookingRequest1 = RoomBookingRequest.builder()
                        .charge(roomBooking.getCharge())
                        .id(String.valueOf(roomBooking.getId()))
                        .checkInDate(roomBooking.getCheckInDate())
                        .checkOutDate(roomBooking.getCheckOutDate())
                        .contactNo(roomBooking.getContactNo())
                        .roomType(roomBooking.getRoomType())
                        .quantity(roomBooking.getQuantity())
                        .nights(roomBooking.getNights())
                        .email(roomBooking.getEmail())
                        .familyName(roomBooking.getFamilyName())
                        .fullName(roomBooking.getFullName())
                        .expired(roomBooking.isExpired())
                        .processing(roomBooking.isProcessingStatus())
                        .build();
                roomBookingRequest.add(roomBookingRequest1);
            }
        }return  roomBookingRequest;
    }

    public boolean cancelRoomBooking(String id) {
        Optional<RoomBooking> roomBooking = roomBookingRepository.findById(UUID.fromString(id));
        if(roomBooking.isPresent()){
            LocalDate today = LocalDate.now();
            if(today.isBefore(roomBooking.get().getCheckInDate().minusDays(2))){
                roomBookingRepository.delete(roomBooking.get());
                return true;

            }else{
                return false;
            }
        }
        return false;
    }

    public boolean removeRoomBooking(String id) {
        Optional<RoomBooking> roomBooking = roomBookingRepository.findById(UUID.fromString(id));
        if(roomBooking.isPresent()){
            LocalDate today = LocalDate.now();
            if(!today.isAfter(roomBooking.get().getCheckOutDate())){
                roomBookingRepository.delete(roomBooking.get());
                return true;

            }else{
                return false;
            }
        }
        return false;
    }
}
