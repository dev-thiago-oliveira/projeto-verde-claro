import { Injectable } from '@nestjs/common';
import { GptService } from 'src/gpt/gpt.service';
import { BookSuggestionDto } from 'src/gpt/dto/book-suggestion.dto';

@Injectable()
export class BooksService {
  constructor(private readonly gptService: GptService) { }

  /**
   * Busca sugestões de livros.
   * @param bookSubject - O assunto para obetr livros.
   * @param lang - Linguagem de retorno da consulta.
   * @returns Uma lista de sugestões de livros.
   */
  getBook(bookSubject: string, lang: string): Promise<BookSuggestionDto[]> {
    return this.gptService.getBookSuggestions(bookSubject, lang);
  }
}
