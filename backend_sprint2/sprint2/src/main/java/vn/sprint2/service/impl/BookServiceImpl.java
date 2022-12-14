package vn.sprint2.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.stereotype.Service;
import vn.sprint2.model.Book;
import vn.sprint2.repository.IBookRepository;
import vn.sprint2.service.IBookService;

import java.util.Optional;
@Service
public class BookServiceImpl implements IBookService {
    @Autowired
    private IBookRepository bookRepository;
    @Override
    public Page<Book> findAll(Pageable pageable) {
        return bookRepository.findAll(pageable);
    }

    @Override
    public void delete(Long id) {
        bookRepository.deleteById(id);
    }

    @Override
    public Optional<Book> findById(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public void save(Book book) {
        bookRepository.save(book);
    }

    @Override
    public Page<Book> findBookByAuthor(String author, Pageable pageable) {
        return bookRepository.findBookByAuthor(author,pageable);
    }
//
    @Override
    public Page<Book> findByCategory(Long id, Pageable pageable) {
        return bookRepository.findByCategory(id,pageable);
    }

    @Override
    public Page<Book> search(String q, Pageable pageable) {
            return bookRepository.search("%".concat(q).concat("%"), pageable);
    }
}
