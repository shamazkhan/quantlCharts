import Statistics from '@models/tlt-spy-statistic-post-covid.model';

export class TltSpyStatisticPostCovidService {
  private readonly graphModel = Statistics;
  async fetchList() {
    return this.graphModel.find();
  }
}
