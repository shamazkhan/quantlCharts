import { Get, JsonController } from 'routing-controllers';

import { CrudeWtiRangeService } from '@services/v1';

@JsonController('/v1/crude-wti-range', { transformResponse: false })
export class CrudeWtiRangeController {
  private readonly rangeService = new CrudeWtiRangeService();

  @Get('')
  async fetchData() {
    return await this.rangeService.fetchList();
  }
}
