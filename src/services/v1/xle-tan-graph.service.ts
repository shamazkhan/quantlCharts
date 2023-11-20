import XleGraphs from '@models/xle-tan-graph.model';

export class XleTanGraphService {
  private readonly xleGraphModel = XleGraphs;
  async fetchList() {
    return this.xleGraphModel.find();
  }
}
