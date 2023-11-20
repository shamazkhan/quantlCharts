import { IsEmail, IsString } from 'class-validator';
import mongoose, { Document, Schema } from 'mongoose';

import App from '@app';
import { MODELS } from '@common/constants';
import toJSON from '@utils/toJSON.plugin';

export class IXleGraph {
  @IsString()
  Year: string;

  @IsEmail()
  Month_Number: string;

  @IsString()
  xle_return: string;

  @IsString()
  tan_return: string;

  @IsString()
  spy_return: string;

  @IsString()
  date: string;

  @IsString()
  xle_creturn: string;

  @IsString()
  tan_creturn: string;

  @IsString()
  spy_creturn: string;

  @IsString()
  creturn: string;

  @IsString()
  portfolio: string;

  @IsString()
  rolling_beta_cs: string;

  @IsString()
  rs: string;

  @IsString()
  previous_peaks: string;

  @IsString()
  drawdown: string;
}

export interface IXleGraphSchema extends Document, IXleGraph {}
const xleGraphSchema: Schema = new Schema(
  {
    Year: {
      type: String,
      required: true,
    },
    Month_Number: {
      type: String,
      required: true,
    },
    xle_return: {
      type: String,
      required: true,
    },
    tan_return: {
      type: String,
      required: true,
    },
    spy_return: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    xle_creturn: {
      type: String,
      required: true,
    },
    tan_creturn: {
      type: String,
      required: true,
    },
    spy_creturn: {
      type: String,
      required: true,
    },
    creturn: {
      type: String,
      required: true,
    },
    portfolio: {
      type: String,
      required: true,
    },
    rolling_beta_cs: {
      type: String,
      required: true,
    },
    rs: {
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
  },
  { collection: 'graphical_data' },
);

xleGraphSchema.plugin(toJSON);

export default App.getXleTanDbConnection.model<IXleGraphSchema>(MODELS.GRAPH, xleGraphSchema);
