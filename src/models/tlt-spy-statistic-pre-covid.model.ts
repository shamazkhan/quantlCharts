import { IsNumber } from 'class-validator';
import { Document, Schema } from 'mongoose';

import App from '@app';
import { MODELS } from '@common/constants';
import toJSON from '@utils/toJSON.plugin';

export class IStatisticPreCovid {
  @IsNumber()
  tltVariance: number;

  @IsNumber()
  spyVariance: number;

  @IsNumber()
  covarianceGs1_1: number;

  @IsNumber()
  covarianceGs1_2: number;

  @IsNumber()
  covarianceGs2_1: number;

  @IsNumber()
  covarianceGs2_2: number;

  @IsNumber()
  corrCoef1_1: number;

  @IsNumber()
  corrCoef1_2: number;

  @IsNumber()
  corrCoef2_1: number;

  @IsNumber()
  corrCoef2_2: number;

  @IsNumber()
  standardError: number;

  @IsNumber()
  strategyPerformance: number;

  @IsNumber()
  informationRatio: number;

  @IsNumber()
  svs: number;

  @IsNumber()
  confidenceInterval: number;

  @IsNumber()
  cagr: number;
}

export interface IStatisticPreCovidSchema extends Document, IStatisticPreCovid {}
const statisticPreCovidSchema: Schema = new Schema(
  {
    tltVariance: {
      type: Number,
      required: true,
    },
    spyVariance: {
      type: Number,
      required: true,
    },
    covarianceGs1_1: {
      type: Number,
      required: true,
    },
    covarianceGs1_2: {
      type: Number,
      required: true,
    },
    covarianceGs2_1: {
      type: Number,
      required: true,
    },
    covarianceGs2_2: {
      type: Number,
      required: true,
    },
    corrCoef1_1: {
      type: Number,
      required: true,
    },
    corrCoef1_2: {
      type: Number,
      required: true,
    },
    corrCoef2_1: {
      type: Number,
      required: true,
    },
    corrCoef2_2: {
      type: Number,
      required: true,
    },
    standardError: {
      type: Number,
      required: true,
    },
    strategyPerformance: {
      type: Number,
      required: true,
    },
    informationRatio: {
      type: Number,
      required: true,
    },
    svs: {
      type: Number,
      required: true,
    },
    confidenceInterval: {
      type: Number,
      required: true,
    },
    cagr: {
      type: Number,
      required: true,
    },
  },
  { collection: 'statistical_pre_covid' },
);

statisticPreCovidSchema.plugin(toJSON);

export default App.getTltSpyDbConnection.model<IStatisticPreCovidSchema>(MODELS.STATISTIC_PRE_COVID, statisticPreCovidSchema);
