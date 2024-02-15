import Graphs from '@models/gld-spy-graph.model';

export class GldSpyGraphService {
  private readonly graphModel = Graphs;
  async fetchList() {
    return this.graphModel.find();
  }
}
