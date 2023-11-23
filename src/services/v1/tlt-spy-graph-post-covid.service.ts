import Graphs from '@models/tlt-spy-graph-post-covid.model';

export class TltSpyGraphPostCovidService {
  private readonly graphModel = Graphs;
  async fetchList() {
    return this.graphModel.find();
  }
}
