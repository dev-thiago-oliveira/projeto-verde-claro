import { Injectable } from '@nestjs/common';
import { v6 as uuidv6 } from 'uuid';
import { BookIncludeDto } from './dto/book.dto';

@Injectable()
export class FavoritesService {
  private favorites: Array<{ id: string } & BookIncludeDto> = [];

  /**
   * Adiciona um novo favorito à lista
   * @param createFavoriteDto - Livro a ser favoritado
   * @returns Mensagem de sucesso
   * @throws Error se o favorito já existir
   */
  create(createFavoriteDto: BookIncludeDto): { message: string; favorite: { id: string } & BookIncludeDto } {
    const exists = this.favorites.some(
      (fav) =>
        fav.title === createFavoriteDto.title &&
        fav.author === createFavoriteDto.author &&
        fav.store === createFavoriteDto.store,
    );

    if (exists) {
      throw new Error('Este livro já está na lista de favoritos.');
    }

    const id = uuidv6();
    const favorite = { id, ...createFavoriteDto };

    this.favorites.push(favorite);

    return { message: 'Livro favoritado com sucesso.', favorite };
  }

  /**
   * Retorna todos os favoritos
   * @returns Lista de favoritos
   */
  findAll(): Array<{ id: string } & BookIncludeDto> {
    return this.favorites;
  }

  /**
   * Remove um favorito pelo ID
   * @param id - ID do favorito a ser removido
   * @returns Mensagem de sucesso e o objeto do favorito removido
   * @throws Error se o ID não for encontrado
   */
  remove(id: string): { message: string; removed: Array<{ id: string } & BookIncludeDto> } {
    const index = this.favorites.findIndex((fav) => fav.id === id);

    if (index === -1) {
      throw new Error(`Favorito com ID ${id} não encontrado.`);
    }

    const removed = this.favorites.splice(index, 1);

    return { message: 'Favorito removido com sucesso.', removed };
  }
}
