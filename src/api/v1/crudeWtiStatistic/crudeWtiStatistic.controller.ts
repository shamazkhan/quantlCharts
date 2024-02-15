import { Get, JsonController } from 'routing-controllers';

import { CrudeWtiStatisticService } from '@services/v1';

@JsonController('/v1/crude-wti-statistic', { transformResponse: false })
export class CrudeWtiStatisticController {
  private readonly statisticService = new CrudeWtiStatisticService();

  @Get('')
  async fetchData() {
    return await this.statisticService.fetchList();
  }
}
