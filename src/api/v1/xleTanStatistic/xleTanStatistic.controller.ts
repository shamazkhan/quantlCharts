import { Get, JsonController } from 'routing-controllers';

import { XleTanStatisticService } from '@services/v1';

@JsonController('/v1/xle-tan-statistic', { transformResponse: false })
export class XleTanStatisticController {
  private readonly xleStatisticService = new XleTanStatisticService();

  @Get('')
  async fetchData() {
    return await this.xleStatisticService.fetchList();
  }
}
