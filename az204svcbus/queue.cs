QueueClient queueClient = new QueueClient(connectionString, "mytestqueue1");

// Get the connection string from app settings
string connectionString = ConfigurationManager.AppSettings["DefaultEndpointsProtocol=https;AccountName=dreamhomgtablob2023;AccountKey=NRr5Yw+L1iqVRi8ZL1G1VUbFpBX9TfMIdvcBhYyjIM/xV0dbtk1O2wbpHPJDkPRv/cZjIHmONdqG+ASt9BSA5A==;EndpointSuffix=core.windows.net"];

// Instantiate a QueueClient which will be used to create and manipulate the queue
QueueClient queueClient = new QueueClient(connectionString, queueName);

// Create the queue
queueClient.CreateIfNotExists();
