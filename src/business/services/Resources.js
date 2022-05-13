import S3 from "./S3.js";

async function getItems() {
  var items = [];

  var buckets = await S3.getBuckets();

  if (buckets) {
    buckets.forEach((e) => {
      items.push({
        ServiceType: "S3",
        Name: e.Name,
        CreationDate: e.CreationDate,
      });
    });
  }

  items.push({
    ServiceType: "Kinesis",
    Name: "KinesisStream01",
    CreationDate: new Date(),
  });

  items.push({
    ServiceType: "Lambda",
    Name: "LambdaPegarResultado",
    CreationDate: new Date(),
  });

  return items;
}

export default {
  getItems,
};
