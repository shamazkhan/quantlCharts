import dotenv from 'dotenv';
//dotenv.config({ path: `.env.${process.env.NODE_ENV || 'production'}.local` });
dotenv.config({ path: `.env.production.local` });

const checkEnv = (envVar: string, defaultValue?: string) => {
  if (!process.env[envVar]) {
    if (defaultValue) {
      console.log("NO VALUE SO DEFAULT IS " + defaultValue)
      return defaultValue;
    }
    throw new Error(`Please define the Enviroment variable"${envVar}"`);
  } else {
    console.log("VALUE IS " + process.env[envVar])
    return process.env[envVar] as string;
  }
};

export const PORT: number = 3000;
export const HOST: string = checkEnv('HOST');
export const MONGO_URI: string = checkEnv('MONGO_URI');
export const DATABASE_GLD_SPY: string = checkEnv('DATABASE_GLD_SPY');
export const DATABASE_XLE_TAN: string = checkEnv('DATABASE_XLE_TAN');
export const DATABASE_TLT_SPY: string = checkEnv('DATABASE_TLT_SPY');
export const DATABASE_SOXX: string = checkEnv('DATABASE_SOXX');
export const DATABASE_CrudeWTI: string = checkEnv('DATABASE_CrudeWTI');
export const DATABASE_Renewables: string = checkEnv('DATABASE_Renewables');
export const CORS_ORIGINS = JSON.parse(checkEnv('CORS_ORIGINS'));
export const CREDENTIALS = checkEnv('CREDENTIALS') === 'true';

export const isProduction = checkEnv('NODE_ENV') === 'production';
export const isTest = checkEnv('NODE_ENV') === 'test';

export const jwt = {
  secret: checkEnv('JWT_SECRET'),
  accessExpireIn: checkEnv('JWT_ACCESS_EXPIRE_IN'),
  accessExpireFormat: checkEnv('JWT_ACCESS_EXPIRE_FORMAT'),
  refreshExpireIn: checkEnv('JWT_REFRESH_EXPIRE_IN'),
  refreshExpireFormat: checkEnv('JWT_REFRESH_EXPIRE_FORMAT'),
  resetPasswordExpireIn: checkEnv('JWT_RESET_PASSWORD_EXPIRE_IN'),
  resetPasswordExpireFormat: checkEnv('JWT_RESET_PASSWORD_EXPIRE_FORMAT'),
};
