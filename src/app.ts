// eslint-disable-next-line simple-import-sort/imports
import 'reflect-metadata';
import {
  CORS_ORIGINS,
  CREDENTIALS,
  MONGO_URI,
  DATABASE_XLE_TAN,
  DATABASE_GLD_SPY,
  isProduction,
  PORT,
  HOST,
  SENTRY_DSN,
  DATABASE_TLT_SPY,
  DATABASE_SOXX,
  DATABASE_CrudeWTI,
  DATABASE_Renewables,
} from '@config';

import * as Sentry from '@sentry/node';
import bodyParser from 'body-parser';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, ErrorRequestHandler, RequestHandler } from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import http from 'http';
import mongoose, { Connection } from 'mongoose';
import passport from 'passport';
import { useExpressServer } from 'routing-controllers';
import xss from 'xss-clean';

import handlingErrorsMiddleware from './middlewares/handlingErrors.middleware';

let serverConnection: http.Server;

export default class App {
  private readonly app: Application;
  private readonly port: string | number;
  private readonly host: string | number;
  private readonly controllers: Function[] = [];
  public static gldSpyDb: Connection;
  public static xleTanDb: Connection;
  public static tltSpyDb: Connection;
  public static soxxDb: Connection;
  public static crudeWtiDb: Connection;
  public static renewablesDb: Connection;

  constructor(controllers: Function[]) {
    this.app = express();
    this.port = 3000;
    this.host = HOST || "0.0.0.0";
    this.controllers = controllers;

    this.initSentry();
    this.initMiddlewares();
    this.initRoutes(controllers);

    this.initHandlingErrors();
  }

  private initSentry() {
    if (isProduction) {
      Sentry.init({ dsn: SENTRY_DSN });
      // The request handler must be the first middleware on the app
      this.app.use(Sentry.Handlers.requestHandler() as RequestHandler);
    }
  }
  private initMiddlewares() {
    this.app.use(helmet());
    this.app.use(cors());

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    // sanitize user data
    this.app.use(hpp());
    this.app.use(xss());
    this.app.use(cookieParser());

    // jwt authentication
    this.app.use(passport.initialize());
  }

  private initRoutes(controllers: Function[]) {
    useExpressServer(this.app, {
      cors: {
        origin: CORS_ORIGINS,
        credentials: CREDENTIALS,
      },
      routePrefix: '/api',
      controllers: controllers,
      defaultErrorHandler: false,
    });
  }

  public static get getGldSpyDbConnection() {
    if (this.gldSpyDb) {
      return this.gldSpyDb;
    } else {
      this.connectDBs();
      return this.gldSpyDb;
    }
  }

  public static get getXleTanDbConnection() {
    if (this.xleTanDb) {
      return this.xleTanDb;
    } else {
      this.connectDBs();
      return this.xleTanDb;
    }
  }

  public static get getTltSpyDbConnection() {
    if (this.tltSpyDb) {
      return this.tltSpyDb;
    } else {
      this.connectDBs();
      return this.tltSpyDb;
    }
  }

  public static get getSoxxDbConnection() {
    if (this.soxxDb) {
      return this.soxxDb;
    } else {
      this.connectDBs();
      return this.soxxDb;
    }
  }

  public static get getCrudeWtiDbConnection() {
    if (this.crudeWtiDb) {
      return this.crudeWtiDb;
    } else {
      this.connectDBs();
      return this.crudeWtiDb;
    }
  }

  public static get getRenewablesDbConnection() {
    if (this.renewablesDb) {
      return this.renewablesDb;
    } else {
      this.connectDBs();
      return this.renewablesDb;
    }
  }

  private initHandlingErrors() {
    if (isProduction) {
      // The error handler must be before any other error middleware and after all controllers
      this.app.use(Sentry.Handlers.errorHandler() as ErrorRequestHandler);
    }
    this.app.use(handlingErrorsMiddleware);
  }

  static connectDBs() {
    try {
      this.gldSpyDb = mongoose.createConnection(`${MONGO_URI}/${DATABASE_GLD_SPY}`);
      this.xleTanDb = mongoose.createConnection(`${MONGO_URI}/${DATABASE_XLE_TAN}`);
      this.tltSpyDb = mongoose.createConnection(`${MONGO_URI}/${DATABASE_TLT_SPY}`);
      this.soxxDb = mongoose.createConnection(`${MONGO_URI}/${DATABASE_SOXX}`);
      this.crudeWtiDb = mongoose.createConnection(`${MONGO_URI}/${DATABASE_CrudeWTI}`);
      this.renewablesDb = mongoose.createConnection(`${MONGO_URI}/${DATABASE_Renewables}`);
    } catch (error) {
      console.error(`Error:${error.message}`);
      process.exit(1);
    }
  }

  static async initDB() {
    if (!this.gldSpyDb || this.xleTanDb) {
      this.connectDBs();
    }
  }

  static async closeDB() {
    await mongoose.disconnect();
  }

  public initWebServer = async () => {
    return new Promise(resolve => {
      serverConnection = this.app.listen(this.port, () => {
        console.log(`✅  Ready on port http://${this.host}:${this.port}`);

        resolve(serverConnection.address());
      });
    });
  };

  public initServerWithDB = async () => {
    await Promise.all([App.initDB(), this.initWebServer()]);
  };

  public stopWebServer = async () => {
    return new Promise(resolve => {
      serverConnection.close(() => {
        resolve(void 0);
      });
    });
  };

  public getServer = () => {
    return this.app;
  };

  public get getControllers() {
    return this.controllers;
  }
}
