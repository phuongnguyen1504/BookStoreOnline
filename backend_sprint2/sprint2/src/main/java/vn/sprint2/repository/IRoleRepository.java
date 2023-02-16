package vn.sprint2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.sprint2.model.Role;

import java.util.List;
import java.util.Optional;

@Repository
public interface IRoleRepository extends JpaRepository<Role,Long> {
    @Query(value = "select * from role where name = ?1",nativeQuery = true)
    Optional<Role> findByName(String name);
    @Query(value = "insert into account_role values(?1,?2)",nativeQuery = true)
    void createNewRole(String username, Long id);
}
