import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UsersService {
  constructor(private readonly mailerService: MailerService) {}

  async forgotPassword(email: string) {
    // Gerar token (em um caso real, você deve salvar isso no banco)
    const token = Math.random().toString(36).substring(2); // Exemplo básico de token

    // Enviar e-mail com HTML embutido
    await this.mailerService.sendMail({
      to: email,
      subject: 'Recuperação de Senha',
      html: `
        <html>
          <body>
            <h2>Olá, ${email.split('@')[0]}!</h2>
            <p>Recebemos um pedido para redefinir sua senha.</p>
            <p>Use o seguinte código/token para redefinir sua senha:</p>
            <h3>${token}</h3>
            <p>Se você não solicitou essa alteração, ignore este e-mail.</p>
            <p>Atenciosamente,<br>Equipe de Suporte</p>
          </body>
        </html>
      `,
    });

    return { message: 'E-mail de recuperação enviado com sucesso.' };
  }
}
