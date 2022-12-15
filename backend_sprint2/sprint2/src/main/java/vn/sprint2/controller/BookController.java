package vn.sprint2.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import vn.sprint2.dto.BookDto;
import vn.sprint2.model.Book;
import vn.sprint2.service.IBookService;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/book")
public class BookController {
    @Autowired
    private IBookService bookService;

    @GetMapping
    public ResponseEntity<Page<Book>> findAllBook(@PageableDefault(value = 6) Pageable pageable) {
        Page<Book> books = bookService.findAll(pageable);
        if (books.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Book> deleteBook(@PathVariable("id") Long id) {
        Optional<Book> book = bookService.findById(id);
        if (!book.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        bookService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> save(@Valid @RequestBody BookDto bookDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.NOT_MODIFIED);
        }
        Book book = new Book();
        BeanUtils.copyProperties(bookDto, book);
        System.out.println(book.getId());
        bookService.save(book);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @Valid @RequestBody BookDto bookDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.NOT_MODIFIED);
        }
        Book bookObj = bookService.findById(id).get();
        if (bookObj == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            Book book = new Book();
            BeanUtils.copyProperties(bookDto, book);
            bookService.save(book);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> findBookById(@PathVariable("id") Long id) {
        Optional<Book> book = bookService.findById(id);
        if (!book.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(book.get(), HttpStatus.OK);
    }

    @GetMapping("/findByAuthor")
    public ResponseEntity<Page<Book>> findByAuthor(@SortDefault(sort = "yearPublish", direction = Sort.Direction.DESC) @RequestParam String author, @PageableDefault(value = 12) Pageable pageable) {
        return new ResponseEntity<>(bookService.findBookByAuthor(author, pageable), HttpStatus.OK);
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<Page<Book>> findByCategory(@SortDefault(sort = "yearPublish", direction = Sort.Direction.DESC) @PathVariable Long id, @PageableDefault(value = 12) Pageable pageable) {
        return new ResponseEntity<>(bookService.findByCategory(id, pageable), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<Book>> search(@SortDefault(sort = "yearPublish", direction = Sort.Direction.DESC) @RequestParam("q") String q, @PageableDefault(value = 12) Pageable pageable) {
        return new ResponseEntity<>(bookService.search(q, pageable), HttpStatus.OK);
    }

}
