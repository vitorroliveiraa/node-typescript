import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUsersUseCase } from './CreateUsersUseCase';

export class CreateUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email } = req.body;
    console.log('controller');

    const createUsersUseCase = container.resolve(CreateUsersUseCase);
    console.log('controller1');

    const user = await createUsersUseCase.execute({
      firstName,
      lastName,
      email,
    });

    return res.status(201).json(user);
  }
}
