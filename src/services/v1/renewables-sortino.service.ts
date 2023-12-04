import RenewablesSortinos from '@models/renewables-sortino.model';

export class RenewablesSortinoService {
  private readonly renewablesSortinoModel = RenewablesSortinos;
  async fetchList() {
    return this.renewablesSortinoModel.find();
  }
}
