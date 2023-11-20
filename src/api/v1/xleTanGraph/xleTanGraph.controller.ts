import { Get, JsonController } from 'routing-controllers';

import { XleTanGraphService } from '@services/v1';

@JsonController('/v1/xle-tan-graph', { transformResponse: false })
export class XleTanGraphController {
  private readonly xleGraphService = new XleTanGraphService();

  @Get('')
  async fetchData() {
    return await this.xleGraphService.fetchList();
  }
}
