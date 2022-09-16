import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

interface CustomConstructProps {
  visibilityDuration: number;
}

export class CustomConstruct extends Construct {
  constructor(scope: Construct, id: string, props: CustomConstructProps) {
    super(scope, id);

    // The code that defines your stack goes here

    // example resource
    const queue = new sqs.Queue(this, 'CdkQueue', {
      visibilityTimeout: cdk.Duration.seconds(props.visibilityDuration),
    });
  }
}