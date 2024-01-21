package org.example.repository.impl;

import org.example.dto.Book;
import org.example.repository.BookService;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class BookServiceImpl implements BookService {
    @Override
    public void addBook(@RequestBody Book book) {

    }
}
