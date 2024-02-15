import { IsString } from 'class-validator';
import { Document, Schema } from 'mongoose';

import App from '@app';
import { MODELS } from '@common/constants';
import toJSON from '@utils/toJSON.plugin';

export class ICrudeWtiRange {
  @IsString()
  sma: string;

  @IsString()
  stddev: string;

  @IsString()
  delay: string;

  @IsString()
  sortino: string;

  @IsString()
  drawdown: string;

  @IsString()
  finalReturn: string;
}

export interface ICrudeWtiRangeSchema extends Document, ICrudeWtiRange {}
const crudeWtiRangeSchema: Schema = new Schema(
  {
    sma: {
      type: String,
      required: true,
    },
    stddev: {
      type: String,
      required: true,
    },
    delay: {
      type: String,
      required: true,
    },
    sortino: {
      type: String,
      required: true,
    },
    drawdown: {
      type: String,
      required: true,
    },
    finalReturn: {
      type: String,
      required: true,
    },
  },
  { collection: 'range_data' },
);

crudeWtiRangeSchema.plugin(toJSON);

export default App.getCrudeWtiDbConnection.model<ICrudeWtiRangeSchema>(MODELS.RANGE, crudeWtiRangeSchema);
