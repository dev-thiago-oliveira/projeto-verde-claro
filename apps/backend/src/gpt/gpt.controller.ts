import { Controller, Get, Param } from '@nestjs/common';
import { GptService } from './gpt.service';
import { BookSuggestionDto } from './dto/book-suggestion.dto';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) { }

  /**
   * Obtém sugestões de livros.
   * @param theme - O tema para gerar sugestões.
   * @param lang - Linguagem de retorno da consulta.
   * @returns Uma lista de sugestões de livros.
   */
  @Get(':theme')
  getBooksGpt(@Param('theme') theme: string, @Param('lang') lang: string): Promise<BookSuggestionDto[]> {
    return this.gptService.getBookSuggestions(theme, lang);
  }
}
