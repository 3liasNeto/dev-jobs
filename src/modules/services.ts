import Elysia from "elysia";
import { dbProvider } from "../db/config";
import { UserService } from "./user/user.service";

export const servicesProvider = new Elysia({ name: 'provider.services' })
  .use(dbProvider)
  .derive({ as: 'global' }, ({ db }) => {
    return {
      userService: new UserService(db),
    };
  })
    .derive({ as: 'global' }, ({ db }) => {
    return {
      userService: new UserService(db),
    };
  })
