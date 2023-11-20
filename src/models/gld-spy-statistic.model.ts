import { IsEmail, IsNumber, IsString } from 'class-validator';
import mongoose, { Document, Schema } from 'mongoose';

import App from '@app';
import { MODELS } from '@common/constants';
import toJSON from '@utils/toJSON.plugin';

export class IStatistic {
  @IsNumber()
  goldVariance: number;

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
  finalAmount: number;

  @IsNumber()
  initialAmount: number;

  @IsNumber()
  informationRatio: number;

  @IsNumber()
  svs: number;

  @IsNumber()
  confidenceInterval: number;

  @IsNumber()
  cagr: number;
}

export interface IStatisticSchema extends Document, IStatistic {}
const statisticSchema: Schema = new Schema(
  {
    goldVariance: {
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
    finalAmount: {
      type: Number,
      required: true,
    },
    initialAmount: {
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
  { collection: 'statistical_data' },
);

statisticSchema.plugin(toJSON);

export default App.getGldSpyDbConnection.model<IStatisticSchema>(MODELS.STATISTIC, statisticSchema);
