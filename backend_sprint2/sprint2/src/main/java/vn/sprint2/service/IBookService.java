package vn.sprint2.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import vn.sprint2.model.Book;


import java.util.Optional;

public interface IBookService {
    Page<Book> findAll(Pageable pageable);
    void delete(Long id);
    Optional<Book> findById(Long id);

    void save(Book book);

    Page<Book> findBookByAuthor(String author, Pageable pageable);
//
    Page<Book> findByCategory(Long id, Pageable pageable);
//
    Page<Book> search(String q, Pageable pageable);
}

