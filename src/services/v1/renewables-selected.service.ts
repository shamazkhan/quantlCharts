import RenewablesSelected from '@models/renewables-selected.model';

export class RenewablesSelectedService {
  private readonly renewablesSelectedModel = RenewablesSelected;
  async fetchList() {
    return this.renewablesSelectedModel.find();
  }
}
