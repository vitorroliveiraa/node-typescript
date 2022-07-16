import { inject, injectable } from 'tsyringe';

// @injectable()
export class ListUserUseCase {
  async execute() {
    const result = 'Cheguei!';

    return result;
  }
}
