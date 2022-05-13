// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

// Create S3 service object
var s3 = new AWS.S3({
  endpoint: "http://localhost:4572",
});

// Call S3 to list the buckets
s3.listBuckets(function (err, data) {
  if (err) {
    console.log("Error ", err);
  } else {
    console.log("Success ", data.Buckets);
  }
});
