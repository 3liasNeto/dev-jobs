import { Elysia } from 'elysia';
import { servicesProvider } from '../services';

export const userController = new Elysia({ prefix: '/users' })
  .use(servicesProvider)
    .get('/:id', async ({ userService, params: { id } }) => {
    const user = await userService.read();
    
    return user;
  },);
