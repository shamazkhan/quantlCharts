import { IsEmail, IsString } from 'class-validator';
import { Document, Schema } from 'mongoose';

import App from '@app';
import { MODELS } from '@common/constants';
import toJSON from '@utils/toJSON.plugin';

export class IGraph {
  @IsString()
  Year: string;

  @IsEmail()
  Month_Number: string;

  @IsString()
  gld_return: string;

  @IsString()
  spy_return: string;

  @IsString()
  date: string;

  @IsString()
  gld_creturn: string;

  @IsString()
  spy_creturn: string;

  @IsString()
  creturn: string;

  @IsString()
  portfolio25: string;

  @IsString()
  portfolio75: string;

  @IsString()
  rolling_beta_gs: string;

  @IsString()
  rs: string;

  @IsString()
  previous_peaks: string;

  @IsString()
  drawdown: string;
}

export interface IGraphSchema extends Document, IGraph {}
const graphSchema: Schema = new Schema(
  {
    Year: {
      type: String,
      required: true,
    },
    Month_Number: {
      type: String,
      required: true,
    },
    gld_return: {
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
    gld_creturn: {
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
    portfolio25: {
      type: String,
      required: true,
    },
    portfolio75: {
      type: String,
      required: true,
    },
    rolling_beta_gs: {
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

graphSchema.plugin(toJSON);
export default App.getGldSpyDbConnection.model<IGraphSchema>(MODELS.GRAPH, graphSchema);
