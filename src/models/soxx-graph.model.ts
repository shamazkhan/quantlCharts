import { IsString } from 'class-validator';
import { Document, Schema } from 'mongoose';

import App from '@app';
import { MODELS } from '@common/constants';
import toJSON from '@utils/toJSON.plugin';

export class ISoxxGraph {
  @IsString()
  level_0: string;

  @IsString()
  index: string;

  @IsString()
  datetime: string;

  @IsString()
  date: string;

  @IsString()
  open: string;

  @IsString()
  close: string;

  @IsString()
  high: string;

  @IsString()
  low: string;

  @IsString()
  volume: string;

  @IsString()
  unix_timestamp: string;

  @IsString()
  ema50: string;

  @IsString()
  rsi: string;

  @IsString()
  return: string;

  @IsString()
  creturn: string;

  @IsString()
  previous_peaks: string;

  @IsString()
  drawdown: string;

  @IsString()
  rs: string;
}

export interface ISoxxGraphSchema extends Document, ISoxxGraph {}
const soxxGraphSchema: Schema = new Schema(
  {
    level_0: {
      type: String,
      required: true,
    },
    index: {
      type: String,
      required: true,
    },
    datetime: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    open: {
      type: String,
      required: true,
    },
    close: {
      type: String,
      required: true,
    },
    high: {
      type: String,
      required: true,
    },
    low: {
      type: String,
      required: true,
    },
    volume: {
      type: String,
      required: true,
    },
    unix_timestamp: {
      type: String,
      required: true,
    },
    ema50: {
      type: String,
      required: true,
    },
    rsi: {
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
    previous_peaks: {
      type: String,
      required: true,
    },
    drawdown: {
      type: String,
      required: true,
    },
    rs: {
      type: String,
      required: true,
    },
  },
  { collection: 'graphical_data' },
);

soxxGraphSchema.plugin(toJSON);

export default App.getSoxxDbConnection.model<ISoxxGraphSchema>(MODELS.GRAPH, soxxGraphSchema);
