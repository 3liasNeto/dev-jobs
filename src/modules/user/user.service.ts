import { Connection } from "../../db/config";
import { table } from "../../db/schema";

export class UserService {
  constructor(private readonly db: Connection) {}

  async read() {
    return await this.db.select().from(table.user);
  }
}
