import { Get, JsonController } from 'routing-controllers';

import { RenewablesSortinoService } from '@services/v1';

@JsonController('/v1/renewables-sortino', { transformResponse: false })
export class RenewablesSortinoController {
  private readonly renewablesSortinoService = new RenewablesSortinoService();

  @Get('')
  async fetchData() {
    return await this.renewablesSortinoService.fetchList();
  }
}
