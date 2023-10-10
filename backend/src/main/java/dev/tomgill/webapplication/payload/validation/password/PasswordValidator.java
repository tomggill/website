package dev.tomgill.webapplication.payload.validation.password;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import jakarta.validation.constraintvalidation.SupportedValidationTarget;
import jakarta.validation.constraintvalidation.ValidationTarget;

@SupportedValidationTarget(ValidationTarget.ANNOTATED_ELEMENT)
public class PasswordValidator implements ConstraintValidator<ValidPassword, String>{
  @Override
  public void initialize(ValidPassword password) {
  }

  @Override
  public boolean isValid(String password, ConstraintValidatorContext context) {
    return password.matches("^(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$");
  }
}
