import { Get, JsonController } from 'routing-controllers';

import { CrudeWtiResultsService } from '@services/v1';

@JsonController('/v1/crude-wti-results', { transformResponse: false })
export class CrudeWtiResultsController {
  private readonly resultsService = new CrudeWtiResultsService();

  @Get('')
  async fetchData() {
    return await this.resultsService.fetchList();
  }
}
