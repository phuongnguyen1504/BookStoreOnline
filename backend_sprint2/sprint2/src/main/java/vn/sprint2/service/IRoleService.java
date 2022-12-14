package vn.sprint2.service;

import vn.sprint2.model.Role;

import java.util.List;

public interface IRoleService {
    List<Role> findByName(String name);

}
