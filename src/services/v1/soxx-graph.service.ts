import SoxxGraphs from '@models/soxx-graph.model';

export class SoxxGraphService {
  private readonly soxxGraphModel = SoxxGraphs;
  async fetchList() {
    return this.soxxGraphModel.find();
  }
}
