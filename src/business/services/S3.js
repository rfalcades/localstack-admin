// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

async function getBuckets() {
  // Set the region
  AWS.config.update({
    region: "us-east-1",
    accessKeyId: "bar",
    secretAccessKey: "foo",
  });

  // Create S3 service object
  var s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    endpoint: "http://localhost:4572",
  });

  try {
    // Call S3 to list the buckets
    let data = await s3.listBuckets().promise();

    if (data) return data.Buckets;
  } catch (err) {
    console.log("Error", err);
  }
}

export default { getBuckets };
