// @ts-ignore
import mockserver from 'mockserver-node';
import { mockServerClient } from 'mockserver-client';

const openApiPath = process.env.OPEN_API_PATH || `file:${process.cwd()}/openapi.yaml`;
const apiPort = Number(process.env.API_PORT) || 8080;

(async () => {
  console.log('Setting up mock server');
  const jvmOptions = [
    '-Dmockserver.enableCORSForAllResponses=true',
    '-Dmockserver.enableCORSForAPI=true',
    '-Dmockserver.corsAllowOrigin="*"',
  ].join(' ');
  await mockserver.start_mockserver({
    serverPort: apiPort,
    verbose: true,
    trace: true,
    jvmOptions,
  });
  console.log('Defining endpoints');
  mockServerClient('localhost', apiPort)
    .openAPIExpectation({
      specUrlOrPayload: openApiPath,
    })
    .then(
      function () {
        console.log('expectation created');
      },
      function (error) {
        console.log(error);
      }
    );
})();
