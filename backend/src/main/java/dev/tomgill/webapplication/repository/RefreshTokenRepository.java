package dev.tomgill.webapplication.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import dev.tomgill.webapplication.models.RefreshToken;
import dev.tomgill.webapplication.models.User;

@Repository
public interface RefreshTokenRepository extends MongoRepository<RefreshToken, Long> {
  Optional<RefreshToken> findByToken(String token);

  @Modifying
  int deleteByUser(User user);
}