import { Get, JsonController } from 'routing-controllers';

import { SoxxStatisticService } from '@services/v1';

@JsonController('/v1/soxx-statistic', { transformResponse: false })
export class SoxxStatisticController {
  private readonly soxxStatisticService = new SoxxStatisticService();

  @Get('')
  async fetchData() {
    return await this.soxxStatisticService.fetchList();
  }
}
