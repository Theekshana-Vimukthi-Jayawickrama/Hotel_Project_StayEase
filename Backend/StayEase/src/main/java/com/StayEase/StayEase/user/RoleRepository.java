package com.StayEase.StayEase.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<UserRole, Integer> {
    Optional<UserRole> findByName(Role name);
}

