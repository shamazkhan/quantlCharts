import { Get, JsonController } from 'routing-controllers';

import { TltSpyGraphPreCovidService } from '@services/v1';

@JsonController('/v1/tlt-spy-graph-pre-covid', { transformResponse: false })
export class TltSpyGraphPreCovidController {
  private readonly graphService = new TltSpyGraphPreCovidService();

  @Get('')
  async fetchData() {
    return await this.graphService.fetchList();
  }
}
