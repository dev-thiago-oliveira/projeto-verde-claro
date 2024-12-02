import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { GptService } from 'src/gpt/gpt.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService, GptService]
})
export class BooksModule { }
