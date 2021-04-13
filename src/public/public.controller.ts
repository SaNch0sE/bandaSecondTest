import {
  Controller, Get, Response, Param,
} from '@nestjs/common';
import * as path from 'path';

@Controller('')
export class PublicController {

  @Get('/register')
  async register(@Response() res) {
    return res.sendFile(path.join(__dirname, '../../views/register.html'));
  }

  @Get('/login')
  async login(@Response() res) {
    return res.sendFile(path.join(__dirname, '../../views/login.html'));
  }

  @Get('/')
  async main(@Response() res) {
    return res.sendFile(path.join(__dirname, '../../views/index.html'));
  }
}
