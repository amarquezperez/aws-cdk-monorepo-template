import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { CustomConstruct } from 'example-construct';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    /* const queue = new sqs.Queue(this, 'CdkQueue', {
      visibilityTimeout: cdk.Duration.seconds(500),
    }); */
    const queue = new CustomConstruct(this, 'CdkQue', {
      queueName: 'Queue v2',
      visibilityDuration: 500,
    });
  }
}
