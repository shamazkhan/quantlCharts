import SoxxStatistics from '@models/soxx-statistic.model';

export class SoxxStatisticService {
  private readonly soxxStatisticModel = SoxxStatistics;
  async fetchList() {
    return this.soxxStatisticModel.find();
  }
}
