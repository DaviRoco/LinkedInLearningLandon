var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "Gallery",
  KeySchema: [
    // Partition Key
    { AttributeName: "name", KeyType: "HASH" },
    { AttributeName: "url", KeyType: "RANGE" },
  ],
  AttributeDefinitions: [
    { AttributeName: "name", AttributeType: "S" },
    { AttributeName: "url", AttributeType: "S" },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

dynamodb.createTable(params, function (err, data) {
  if (err)
    console.error("Unable to create table: ", JSON.stringify(err, null, 2));
  else
    console.log(
      "Created table with description: ",
      JSON.stringify(data, null, 2)
    );
});
