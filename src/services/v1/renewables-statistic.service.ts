import RenewablesStatistics from '@models/renewables-statistic.model';

export class RenewablesStatisticService {
  private readonly renewablesStatisticModel = RenewablesStatistics;
  async fetchList() {
    return this.renewablesStatisticModel.find();
  }
}
