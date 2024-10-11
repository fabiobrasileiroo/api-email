import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // O caminho do controlador
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('forgot-password') // O caminho para a rota POST
  async forgotPassword(@Body('email') email: string) {
    return this.usersService.forgotPassword(email);
  }
}
