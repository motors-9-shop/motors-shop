import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { compile } from 'handlebars';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { join } from 'path';

@Injectable()
export class MailerService {
  private transporter: Mail;

  constructor() {
    this.transporter = createTransport(
      {
        service: process.env.SMTP_SERVICE,
        host: process.env.SMTP_HOST,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      { from: process.env.SMTP_USER },
    );
  }

  sendMail(options: Mail.Options) {
    return this.transporter.sendMail(options);
  }

  template(path: string, context: object = {}) {
    const templatePath = join(__dirname, '..', 'templates', path) + '.hbs';
    const template = readFileSync(templatePath, 'utf-8');

    return compile(template)(context);
  }
}
