import XleStatistics from '@models/xle-tan-statistic.model';

export class XleTanStatisticService {
  private readonly xleStatisticModel = XleStatistics;
  async fetchList() {
    return this.xleStatisticModel.find();
  }
}
