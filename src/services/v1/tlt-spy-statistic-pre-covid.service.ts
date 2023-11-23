import Statistics from '@models/tlt-spy-statistic-pre-covid.model';

export class TltSpyStatisticPreCovidService {
  private readonly statisticModel = Statistics;
  async fetchList() {
    return this.statisticModel.find();
  }
}
