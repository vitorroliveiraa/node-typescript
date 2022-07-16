import { Request, Response } from 'express';
import { autoInjectable, container, singleton } from 'tsyringe';

import { UserUseCase } from './UserUseCase';

@autoInjectable()
export class UserController {
  async handle(req: Request, res: Response) {
    const { firstName, lastName, email } = req.body;
    console.log('controller');

    const userUseCase = container.resolve(UserUseCase);
    console.log('controller1');

    const user = await userUseCase.execute({
      firstName,
      lastName,
      email,
    });

    return res.status(201).json(user);
  }
}
