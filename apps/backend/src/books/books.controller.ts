import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookSuggestionDto } from 'src/gpt/dto/book-suggestion.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  /**
   * Busca sugestões de livros.
   * @param bookSubject - O assunto obetr livros.
   * @param lang - Linguagem de retorno da consulta.
   * @returns Uma lista de sugestões de livros.
   */
  @Get()
  findOne(@Query('bookSubject') bookSubject: string, @Query('lang') lang: string): Promise<BookSuggestionDto[]> {
    return this.booksService.getBook(bookSubject, lang);
  }
}
