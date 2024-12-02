import { Controller, Get, Post, Body, Delete, Query, Param } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { BookIncludeDto } from './dto/book.dto';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) { }

  /**
   * Adiciona um novo favorito.
   * @param createFavoriteDto - Dados do livro a ser favoritado.
   * @returns Mensagem de sucesso.
   */
  @Post()
  create(@Body() createFavoriteDto: BookIncludeDto): { message: string; favorite: { id: string } & BookIncludeDto } {
    console.log('Requisição Post recebida para todos os favoritos');
    return this.favoritesService.create(createFavoriteDto);
  }

  /**
   * Retorna todos os favoritos.
   * @returns Lista de favoritos.
   */
  @Get()
  findAll(): Array<{ id: string } & BookIncludeDto> {
    return this.favoritesService.findAll();
  }

  /**
   * Remove um favorito.
   * @param id - ID do favorito a ser removido.
   * @returns Mensagem de sucesso.
   */
  @Delete(':id')
  remove(@Param('id') id: string): { message: string; removed: Array<{ id: string } & BookIncludeDto> } {
    return this.favoritesService.remove(id);
  }
}
