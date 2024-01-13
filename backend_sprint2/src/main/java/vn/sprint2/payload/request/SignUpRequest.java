package vn.sprint2.payload.request;

import lombok.Data;
import vn.sprint2.model.Account;

import javax.validation.constraints.NotBlank;
@Data
public class SignUpRequest {
    private String name;
    private String email;
    private Account account;
}
