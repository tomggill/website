package dev.tomgill.webapplication.Exceptions;

public class DuplicateUserField extends Exception {
  public DuplicateUserField(String errorMessage) {
    super(errorMessage);
  }
}
