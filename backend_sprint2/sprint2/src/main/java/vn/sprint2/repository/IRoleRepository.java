package vn.sprint2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.sprint2.model.Role;

import java.util.List;

@Repository
public interface IRoleRepository extends JpaRepository<Role,Long> {
    @Query(value = "select * from role where name = ?1",nativeQuery = true)
    List<Role> findByName(String name);
}
