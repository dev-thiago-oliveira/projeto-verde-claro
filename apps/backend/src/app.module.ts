import { Module } from '@nestjs/common';
import { GptModule } from './gpt/gpt.module';
import { BooksModule } from './books/books.module';
import { FavoritesModule } from './favorites/favorites.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GptModule,
    BooksModule,
    FavoritesModule
  ],
})
export class AppModule { }
