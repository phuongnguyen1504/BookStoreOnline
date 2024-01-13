package vn.sprint2.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.sprint2.model.Role;
import vn.sprint2.repository.IRoleRepository;
import vn.sprint2.service.IRoleService;

import java.util.List;
import java.util.Optional;

@Service
public class RoleServiceImpl implements IRoleService {
    @Autowired
    private IRoleRepository repository;

    @Override
    public Optional<Role> findByName(String name) {
        return this.repository.findByName(name);
    }

    @Override
    public void createNewRole(String username, Long id) {
        repository.createNewRole(username,id);
    }
}
