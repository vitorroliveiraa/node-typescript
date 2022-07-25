import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteUsersUseCase } from './DeleteUsersUseCase';

export class DeleteUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteUsersUseCase = container.resolve(DeleteUsersUseCase);

    await deleteUsersUseCase.execute(id);

    return res.status(204).send();
  }
}
