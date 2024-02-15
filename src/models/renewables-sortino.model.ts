import { IsString } from 'class-validator';
import { Document, Schema } from 'mongoose';

import App from '@app';
import { MODELS } from '@common/constants';
import toJSON from '@utils/toJSON.plugin';

export class IRenewablesSortino {
  @IsString()
  low: string;

  @IsString()
  high: string;

  @IsString()
  finalReturn: string;

  @IsString()
  sortino: string;
}

export interface IRenewablesSortinoSchema extends Document, IRenewablesSortino {}
const renewablesSortinoSchema: Schema = new Schema(
  {
    low: {
      type: String,
      required: true,
    },
    high: {
      type: String,
      required: true,
    },
    finalReturn: {
      type: String,
      required: true,
    },
    sortino: {
      type: String,
      required: true,
    },
  },
  { collection: 'sortino_data' },
);

renewablesSortinoSchema.plugin(toJSON);

export default App.getRenewablesDbConnection.model<IRenewablesSortinoSchema>(MODELS.SORTINO, renewablesSortinoSchema);
