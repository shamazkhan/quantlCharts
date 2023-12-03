import { IsNumber } from 'class-validator';
import { Document, Schema } from 'mongoose';

import App from '@app';
import { MODELS } from '@common/constants';
import toJSON from '@utils/toJSON.plugin';

export class ICrudeWtiStatistic {
  @IsNumber()
  movingAverage: number;

  @IsNumber()
  standardDeviation: number;

  @IsNumber()
  delay: number;

  @IsNumber()
  sortinoRatio: number;

  @IsNumber()
  drawdown: number;

  @IsNumber()
  finalReturn: number;
}

export interface ICrudeWtiStatisticSchema extends Document, ICrudeWtiStatistic {}
const crudeWtiStatisticSchema: Schema = new Schema(
  {
    movingAverage: {
      type: Number,
      required: true,
    },
    standardDeviation: {
      type: Number,
      required: true,
    },
    delay: {
      type: Number,
      required: true,
    },
    sortinoRatio: {
      type: Number,
      required: true,
    },
    drawdown: {
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

crudeWtiStatisticSchema.plugin(toJSON);

export default App.getCrudeWtiDbConnection.model<ICrudeWtiStatisticSchema>(MODELS.STATISTIC, crudeWtiStatisticSchema);
