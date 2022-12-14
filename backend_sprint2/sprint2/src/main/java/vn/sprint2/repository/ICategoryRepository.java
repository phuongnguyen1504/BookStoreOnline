package vn.sprint2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.sprint2.model.Category;

public interface ICategoryRepository extends JpaRepository<Category,Long> {
}
