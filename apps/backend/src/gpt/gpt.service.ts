import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { BookSuggestionDto } from './dto/book-suggestion.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GptService {
  private openai: OpenAI;
  private openaiApyKey: string;

  constructor(
    private configService: ConfigService
  ) {
    this.openaiApyKey = this.configService.get<string>('OPENAI_API_KEY');
    this.openai = new OpenAI({
      apiKey: this.openaiApyKey,
    });
  }

  /**
   * Gera sugestões de livros.
   * @param theme - O tema sugerito.
   * @param lang - Linguagem de retorno da consulta.
   * @returns Uma lista de sugestões de livros.
   * @throws Error se falhar ou retornar uma resposta inválida.
   */
  async getBookSuggestions(theme: string, lang: string): Promise<BookSuggestionDto[]> {
    const prompt = `
      Sugira livros baseados no seguinte tema: ${theme}.
      Inclua os seguintes detalhes para cada sugestão:
      - Nome do livro (nome da propriedade: title);
      - Nome do autor (nome da propriedade: author);
      - Breve descrição (nome da propriedade: description);
      - Link para compra (nome da propriedade: link);
      - Loja disponível (nome da propriedade: store);
      É importante que somente a propriedade description seja traduzida para o idioma ${lang}.
      Devolva uma lista JSON.
    `;

    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

      const content = response.choices[0]?.message?.content;

      if (!content) {
        throw new Error('Nenhuma sugestão foi retornada.');
      }

      const bookSuggestions: BookSuggestionDto[] = JSON.parse(content);

      if (!Array.isArray(bookSuggestions)) {
        throw new Error('Formato de resposta inválido.');
      }

      return bookSuggestions;
    } catch (error: any) {
      throw new Error(`Erro ao gerar sugestões: ${error.message || error}`);
    }
  }
}
