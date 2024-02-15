import { Get, JsonController } from 'routing-controllers';

import { SoxxGraphService } from '@services/v1';

@JsonController('/v1/soxx-graph', { transformResponse: false })
export class SoxxGraphController {
  private readonly graphService = new SoxxGraphService();

  @Get('')
  async fetchData() {
    return await this.graphService.fetchList();
  }
}
