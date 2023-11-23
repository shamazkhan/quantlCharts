import Graphs from '@models/tlt-spy-graph-pre-covid.model';

export class TltSpyGraphPreCovidService {
  private readonly graphModel = Graphs;
  async fetchList() {
    return this.graphModel.find();
  }
}
