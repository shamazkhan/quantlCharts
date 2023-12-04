import { Get, JsonController } from 'routing-controllers';

import { RenewablesStatisticService } from '@services/v1';

@JsonController('/v1/renewables-statistic', { transformResponse: false })
export class RenewablesStatisticController {
  private readonly renewablesStatisticService = new RenewablesStatisticService();

  @Get('')
  async fetchData() {
    return await this.renewablesStatisticService.fetchList();
  }
}
