import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUsersUseCase } from './UpdateUsersUseCase';

export class UpdateUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;

    const updateUsersUseCase = container.resolve(UpdateUsersUseCase);

    const user = await updateUsersUseCase.execute(id, {
      firstName,
      lastName,
      email,
    });

    return res.status(200).json(user);
  }
}
