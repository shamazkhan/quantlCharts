import { IsNumber } from 'class-validator';
import { Document, Schema } from 'mongoose';

import App from '@app';
import { MODELS } from '@common/constants';
import toJSON from '@utils/toJSON.plugin';

export class IXleStatistic {
  @IsNumber()
  xleVariance: number;

  @IsNumber()
  tanVariance: number;

  @IsNumber()
  spyVariance: number;

  @IsNumber()
  covarianceTs1_1: number;

  @IsNumber()
  covarianceTs1_2: number;

  @IsNumber()
  covarianceTs2_1: number;

  @IsNumber()
  covarianceTs2_2: number;

  @IsNumber()
  covarianceXs1_1: number;

  @IsNumber()
  covarianceXs1_2: number;

  @IsNumber()
  covarianceXs2_1: number;

  @IsNumber()
  covarianceXs2_2: number;

  @IsNumber()
  covarianceXt1_1: number;

  @IsNumber()
  covarianceXt1_2: number;

  @IsNumber()
  covarianceXt2_1: number;

  @IsNumber()
  covarianceXt2_2: number;

  @IsNumber()
  corrCoefxt1_1: number;

  @IsNumber()
  corrCoefxt1_2: number;

  @IsNumber()
  corrCoefxt2_1: number;

  @IsNumber()
  corrCoefxt2_2: number;

  @IsNumber()
  corrCoefxs1_1: number;

  @IsNumber()
  corrCoefxs1_2: number;

  @IsNumber()
  corrCoefxs2_1: number;

  @IsNumber()
  corrCoefxs2_2: number;

  @IsNumber()
  corrCoefts1_1: number;

  @IsNumber()
  corrCoefts1_2: number;

  @IsNumber()
  corrCoefts2_1: number;

  @IsNumber()
  corrCoefts2_2: number;

  @IsNumber()
  confidenceInterval: number;

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
  cagr: number;
}

export interface IXleStatisticSchema extends Document, IXleStatistic {}
const xleStatisticSchema: Schema = new Schema(
  {
    xleVariance: {
      type: Number,
      required: true,
    },
    tanVariance: {
      type: Number,
      required: true,
    },
    spyVariance: {
      type: Number,
      required: true,
    },
    covarianceTs1_1: {
      type: Number,
      required: true,
    },
    covarianceTs1_2: {
      type: Number,
      required: true,
    },
    covarianceTs2_1: {
      type: Number,
      required: true,
    },
    covarianceTs2_2: {
      type: Number,
      required: true,
    },
    covarianceXs1_1: {
      type: Number,
      required: true,
    },
    covarianceXs1_2: {
      type: Number,
      required: true,
    },
    covarianceXs2_1: {
      type: Number,
      required: true,
    },
    covarianceXs2_2: {
      type: Number,
      required: true,
    },
    covarianceXt1_1: {
      type: Number,
      required: true,
    },
    covarianceXt1_2: {
      type: Number,
      required: true,
    },
    covarianceXt2_1: {
      type: Number,
      required: true,
    },
    covarianceXt2_2: {
      type: Number,
      required: true,
    },
    corrCoefxt1_1: {
      type: Number,
      required: true,
    },
    corrCoefxt1_2: {
      type: Number,
      required: true,
    },
    corrCoefxt2_1: {
      type: Number,
      required: true,
    },
    corrCoefxt2_2: {
      type: Number,
      required: true,
    },
    corrCoefxs1_1: {
      type: Number,
      required: true,
    },
    corrCoefxs1_2: {
      type: Number,
      required: true,
    },
    corrCoefxs2_1: {
      type: Number,
      required: true,
    },
    corrCoefxs2_2: {
      type: Number,
      required: true,
    },
    corrCoefts1_1: {
      type: Number,
      required: true,
    },
    corrCoefts1_2: {
      type: Number,
      required: true,
    },
    corrCoefts2_1: {
      type: Number,
      required: true,
    },
    corrCoefts2_2: {
      type: Number,
      required: true,
    },
    confidenceInterval: {
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
    cagr: {
      type: Number,
      required: true,
    },
  },
  { collection: 'statistical_data' },
);

xleStatisticSchema.plugin(toJSON);

export default App.getXleTanDbConnection.model<IXleStatisticSchema>(MODELS.STATISTIC, xleStatisticSchema);
