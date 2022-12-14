package vn.sprint2.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.sprint2.model.Book;
@Repository
public interface IBookRepository extends JpaRepository<Book,Long> {
    @Query(value = "select * from `book` join category on `book`.`category_id` = `category`.`id` where `book`.`category_id` = ?1",nativeQuery = true)
    Page<Book> findByCategory(Long id, Pageable pageable);
//
    Page<Book> findBookByAuthor(String author, Pageable pageable);
//
//    Page<Book> search(String concat, Pageable pageable);
}
