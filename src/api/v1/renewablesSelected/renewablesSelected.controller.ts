import { Get, JsonController } from 'routing-controllers';

import { RenewablesSelectedService } from '@services/v1';

@JsonController('/v1/renewables-selected', { transformResponse: false })
export class RenewablesSelectedController {
  private readonly renewablesSelectedService = new RenewablesSelectedService();

  @Get('')
  async fetchData() {
    return await this.renewablesSelectedService.fetchList();
  }
}
