import CrudeWtiResults from '@models/crude-wti-results.model';

export class CrudeWtiResultsService {
  private readonly crudeWtiResultsModel = CrudeWtiResults;
  async fetchList() {
    return this.crudeWtiResultsModel.find();
  }
}
