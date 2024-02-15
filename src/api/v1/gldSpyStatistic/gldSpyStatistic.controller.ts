import { Get, JsonController } from 'routing-controllers';

import { GldSpyStatisticService } from '@services/v1';

@JsonController('/v1/gld-spy-statistic', { transformResponse: false })
export class GldSpyStatisticController {
  private readonly statisticService = new GldSpyStatisticService();

  @Get('')
  async fetchData() {
    return await this.statisticService.fetchList();
  }
}
