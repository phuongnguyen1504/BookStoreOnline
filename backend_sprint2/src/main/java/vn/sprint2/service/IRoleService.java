package vn.sprint2.service;

import vn.sprint2.model.Role;

import java.util.List;
import java.util.Optional;

public interface IRoleService {
    Optional<Role> findByName(String name);

    void createNewRole(String username, Long id);
}
