package vn.sprint2.payload.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {
    private String username;
    private String accessToken;
    private List<String> roles;
    private Long cartId;
}