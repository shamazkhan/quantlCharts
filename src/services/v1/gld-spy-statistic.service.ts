import Statistics from '@models/gld-spy-statistic.model';

export class GldSpyStatisticService {
  private readonly statisticModel = Statistics;
  async fetchList() {
    return this.statisticModel.find();
  }
}
