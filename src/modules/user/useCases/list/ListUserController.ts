import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUserUseCase } from './ListUserUseCase';

export class ListUserController {
  async handle(req: Request, res: Response) {
    const { firstName, lastName, email } = req.body;

    const listUserUseCase = container.resolve(ListUserUseCase);

    const user = await listUserUseCase.execute();

    return res.status(201).json(user);
  }
}
