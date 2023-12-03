import CrudeWtiStatistics from '@models/crude-wti-statistic.model';

export class CrudeWtiStatisticService {
  private readonly crudeWtiStatisticModel = CrudeWtiStatistics;
  async fetchList() {
    return this.crudeWtiStatisticModel.find();
  }
}
