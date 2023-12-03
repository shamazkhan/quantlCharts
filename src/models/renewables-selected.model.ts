import { IsString } from 'class-validator';
import { Document, Schema } from 'mongoose';

import App from '@app';
import { MODELS } from '@common/constants';
import toJSON from '@utils/toJSON.plugin';

export class IRenewablesSelected {
  @IsString()
  startDate: string;

  @IsString()
  endDate: string;

  @IsString()
  filtered: string;

  @IsString()
  weights: string;

  @IsString()
  returnsList: string;

  @IsString()
  monthlyReturn: string;

  @IsString()
  cReturns: string;
}

export interface IRenewablesSelectedSchema extends Document, IRenewablesSelected {}
const renewablesSelectedSchema: Schema = new Schema(
  {
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    filtered: {
      type: String,
      required: true,
    },
    weights: {
      type: String,
      required: true,
    },
    returnsList: {
      type: String,
      required: true,
    },
    monthlyReturn: {
      type: String,
      required: true,
    },
    cReturns: {
      type: String,
      required: true,
    },
  },
  { collection: 'selected_data' },
);

renewablesSelectedSchema.plugin(toJSON);

export default App.getRenewablesDbConnection.model<IRenewablesSelectedSchema>(MODELS.SELECTED, renewablesSelectedSchema);
