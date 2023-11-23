import { Get, JsonController } from 'routing-controllers';

import { TltSpyStatisticPreCovidService } from '@services/v1';

@JsonController('/v1/tlt-spy-statistic-pre-covid', { transformResponse: false })
export class TltSpyStatisticPreCovidController {
  private readonly graphService = new TltSpyStatisticPreCovidService();

  @Get('')
  async fetchData() {
    return await this.graphService.fetchList();
  }
}
