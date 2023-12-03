import CrudeWtiRanges from '@models/crude-wti-range.model';

export class CrudeWtiRangeService {
  private readonly crudeWtiRangeModel = CrudeWtiRanges;
  async fetchList() {
    return this.crudeWtiRangeModel.find();
  }
}
