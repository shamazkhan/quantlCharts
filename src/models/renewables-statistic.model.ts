import { IsNumber } from 'class-validator';
import { Document, Schema } from 'mongoose';

import App from '@app';
import { MODELS } from '@common/constants';
import toJSON from '@utils/toJSON.plugin';

export class IRenewablesStatistic {
  @IsNumber()
  lowMovingAverage: number;

  @IsNumber()
  highMovingAverage: number;

  @IsNumber()
  sortinoRatio: number;

  @IsNumber()
  finalReturn: number;
}

export interface IRenewablesStatisticSchema extends Document, IRenewablesStatistic {}
const renewablesStatisticSchema: Schema = new Schema(
  {
    lowMovingAverage: {
      type: Number,
      required: true,
    },
    highMovingAverage: {
      type: Number,
      required: true,
    },
    sortinoRatio: {
      type: Number,
      required: true,
    },
    finalReturn: {
      type: Number,
      required: true,
    },
  },
  { collection: 'statistical_data' },
);

renewablesStatisticSchema.plugin(toJSON);

export default App.getRenewablesDbConnection.model<IRenewablesStatisticSchema>(MODELS.STATISTIC, renewablesStatisticSchema);
