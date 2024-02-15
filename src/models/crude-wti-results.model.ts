import { IsString } from 'class-validator';
import { Document, Schema } from 'mongoose';

import App from '@app';
import { MODELS } from '@common/constants';
import toJSON from '@utils/toJSON.plugin';

export class ICrudeWtiResults {
  @IsString()
  Date: string;

  @IsString()
  Close_brent: string;

  @IsString()
  Close_wti: string;

  @IsString()
  return_brent: string;

  @IsString()
  return_wti: string;

  @IsString()
  difference: string;

  @IsString()
  sma: string;

  @IsString()
  sd: string;

  @IsString()
  up: string;

  @IsString()
  down: string;

  @IsString()
  active: string;

  @IsString()
  return: string;

  @IsString()
  creturn: string;
}

export interface ICrudeWtiResultsSchema extends Document, ICrudeWtiResults {}
const crudeWtiResultsSchema: Schema = new Schema(
  {
    Date: {
      type: String,
      required: true,
    },
    Close_brent: {
      type: String,
      required: true,
    },
    Close_wti: {
      type: String,
      required: true,
    },
    return_brent: {
      type: String,
      required: true,
    },
    return_wti: {
      type: String,
      required: true,
    },
    sma: {
      type: String,
      required: true,
    },
    sd: {
      type: String,
      required: true,
    },
    up: {
      type: String,
      required: true,
    },
    down: {
      type: String,
      required: true,
    },
    active: {
      type: String,
      required: true,
    },
    return: {
      type: String,
      required: true,
    },
    creturn: {
      type: String,
      required: true,
    },
  },
  { collection: 'results_data' },
);

crudeWtiResultsSchema.plugin(toJSON);

export default App.getCrudeWtiDbConnection.model<ICrudeWtiResultsSchema>(MODELS.RESULTS, crudeWtiResultsSchema);
