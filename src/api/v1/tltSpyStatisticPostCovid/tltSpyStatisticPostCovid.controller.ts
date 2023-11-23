import { Get, JsonController } from 'routing-controllers';

import { TltSpyStatisticPostCovidService } from '@services/v1';

@JsonController('/v1/tlt-spy-statistic-post-covid', { transformResponse: false })
export class TltSpyStatisticPostCovidController {
  private readonly graphService = new TltSpyStatisticPostCovidService();

  @Get('')
  async fetchData() {
    return await this.graphService.fetchList();
  }
}
