import Graphs from '@models/tlt-spy-statistic-post-covid.model';

export class TltSpyStatisticPostCovidService {
  private readonly graphModel = Graphs;
  async fetchList() {
    return this.graphModel.find();
  }
}
