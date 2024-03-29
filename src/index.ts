import { defaultMetadataStorage as classTransformerDefaultMetadataStorage } from 'class-transformer/cjs/storage';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { getMetadataArgsStorage } from 'routing-controllers';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import swaggerUi from 'swagger-ui-express';

import {
  CrudeWtiRangeControllerV1,
  CrudeWtiResultsControllerV1,
  CrudeWtiStatisticControllerV1,
  GldSpyGraphControllerV1,
  GldSpyStatisticControllerV1,
  SoxxGraphControllerV1,
  SoxxStatisticControllerV1,
  TltSpyGraphPostCovidControllerV1,
  TltSpyGraphPreCovidControllerV1,
  TltSpyStatisticPostCovidControllerV1,
  TltSpyStatisticPreCovidControllerV1,
  XleTanGraphControllerV1,
  XleTanStatisticControllerV1,
  RenewablesSelectedControllerV1,
  RenewablesSortinoControllerV1,
  RenewablesStatisticControllerV1,
} from '@v1/index';

import App from './app';

function initSwagger(server: App) {
  const schemas = validationMetadatasToSchemas({
    classTransformerMetadataStorage: classTransformerDefaultMetadataStorage,
    refPointerPrefix: '#/components/schemas/',
  });
  const routingControllersOptions = {
    controllers: server.getControllers,
  };
  const storage = getMetadataArgsStorage();
  const spec = routingControllersToSpec(storage, routingControllersOptions, {
    components: {
      schemas,
      securitySchemes: {
        basicAuth: {
          scheme: 'basic',
          type: 'http',
        },
      },
    },
    info: {
      description: 'API Generated with `routing-controllers-openapi` package',
      title: 'API',
      version: '1.0.0',
    },
  });
  server.getServer().use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
}

const server = new App([
  GldSpyGraphControllerV1,
  GldSpyStatisticControllerV1,
  XleTanGraphControllerV1,
  XleTanStatisticControllerV1,
  TltSpyGraphPostCovidControllerV1,
  TltSpyGraphPreCovidControllerV1,
  TltSpyStatisticPreCovidControllerV1,
  TltSpyStatisticPostCovidControllerV1,
  SoxxGraphControllerV1,
  SoxxStatisticControllerV1,
  CrudeWtiResultsControllerV1,
  CrudeWtiRangeControllerV1,
  CrudeWtiStatisticControllerV1,
  RenewablesStatisticControllerV1,
  RenewablesSortinoControllerV1,
  RenewablesSelectedControllerV1,
]);
initSwagger(server);

(async () => {
  await server.initServerWithDB();
})();

const gracefulShutdown = async () => {
  try {
    await server.stopWebServer();
    await App.closeDB();

    console.log(`Process ${process.pid} received a graceful shutdown signal`);
    process.exit(0);
  } catch (error) {
    console.log(`graceful shutdown Process ${process.pid} got failed!`);
    process.exit(1);
  }
};

process.on('SIGTERM', gracefulShutdown).on('SIGINT', gracefulShutdown);
