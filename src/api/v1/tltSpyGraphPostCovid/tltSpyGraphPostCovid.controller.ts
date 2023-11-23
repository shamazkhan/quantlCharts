import { Get, JsonController } from 'routing-controllers';

import { TltSpyGraphPostCovidService } from '@services/v1';

@JsonController('/v1/tlt-spy-graph-post-covid', { transformResponse: false })
export class TltSpyGraphPostCovidController {
  private readonly graphService = new TltSpyGraphPostCovidService();

  @Get('')
  async fetchData() {
    return await this.graphService.fetchList();
  }
}
