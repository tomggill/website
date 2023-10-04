package dev.tomgill.webapplication;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="user-details")
public class User {
  @Id
  private ObjectId id;
  private String firstName;
  private String lastName;
  private String userName;
  private String password;
  private String email;
  private String userId;

  public User(String firstName, String lastName, String userName, String password, String email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.email = email;
  }

  
}