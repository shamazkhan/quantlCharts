import { Get, JsonController } from 'routing-controllers';

import { GldSpyGraphService } from '@services/v1';

@JsonController('/v1/gld-spy-graph', { transformResponse: false })
export class GldSpyGraphController {
  private readonly graphService = new GldSpyGraphService();

  @Get('')
  async fetchData() {
    return await this.graphService.fetchList();
  }
}
