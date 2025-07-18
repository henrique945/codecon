import { Query, Resolver } from "@nestjs/graphql";
import { AppService } from "src/app.service";
import { User } from "src/model/user.model";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => [User])
  users() {
    return this.appService.findAll();
  }
}
