import { IsString } from 'class-validator';
import { Document, Schema } from 'mongoose';

import App from '@app';
import { MODELS } from '@common/constants';
import toJSON from '@utils/toJSON.plugin';

export class IGraphPreCovid {
  @IsString()
  Year: string;

  @IsString()
  Month_Number: string;

  @IsString()
  tlt_return: string;

  @IsString()
  spy_return: string;

  @IsString()
  date: string;

  @IsString()
  tlt_creturn: string;

  @IsString()
  spy_creturn: string;

  @IsString()
  creturn: string;

  @IsString()
  portfolio30: string;

  @IsString()
  portfolio70: string;

  @IsString()
  rolling_beta_gs: string;

  @IsString()
  rs: string;

  @IsString()
  previous_peaks: string;

  @IsString()
  drawdown: string;
}

export interface IGraphPreCovidSchema extends Document, IGraphPreCovid {}
const graphPreCovidSchema: Schema = new Schema(
  {
    Year: {
      type: String,
      required: true,
    },
    Month_Number: {
      type: String,
      required: true,
    },
    tlt_return: {
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
    tlt_creturn: {
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
    portfolio30: {
      type: String,
      required: true,
    },
    portfolio70: {
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
  { collection: 'graphical_pre_covid' },
);

graphPreCovidSchema.plugin(toJSON);
export default App.getTltSpyDbConnection.model<IGraphPreCovidSchema>(MODELS.GRAPH_PRE_COVID, graphPreCovidSchema);
