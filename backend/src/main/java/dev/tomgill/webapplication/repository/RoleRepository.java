package dev.tomgill.webapplication.repository;


import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import dev.tomgill.webapplication.models.ERole;
import dev.tomgill.webapplication.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}