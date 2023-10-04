package dev.tomgill.webapplication.User;

import java.util.List;
import java.util.Optional;

import org.bson.BsonDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.index.Index;
import org.springframework.stereotype.Service;

import com.mongodb.MongoWriteException;

import dev.tomgill.webapplication.Exceptions.DuplicateUserField;
import jakarta.annotation.PostConstruct;


@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  @Autowired
  private MongoTemplate mongoTemplate;

  @PostConstruct
  public void ensureUniqueIndexCreation() {
    this.mongoTemplate.indexOps("user-details").ensureIndex(new Index("userName", Direction.ASC).unique());
    this.mongoTemplate.indexOps("user-details").ensureIndex(new Index("email", Direction.ASC).unique());
  }
  

  public List<User> allUsers() {
    return userRepository.findAll();
  }

  public Optional<User> singleUser(String userId) {
    return userRepository.findUserByUserId(userId);
  }

  public User createUser(String firstName, String lastName, String userName, String password, String email) throws DuplicateUserField {
    User user = new User(firstName, lastName, userName, password, email);
    try {
      mongoTemplate.insert(user);
      System.out.println("here");
    } catch (DuplicateKeyException error) {
      throw new DuplicateUserField("Duplicate email or userName field.");
    }
    return user;
  }
}
