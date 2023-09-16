using Azure;

using Azure.Storage.Queues;
using Azure.Storage.Queues.Models;

string connectionString = "DefaultEndpointsProtocol=https;AccountName=dreamhomgtablob2023;AccountKey=NRr5Yw+L1iqVRi8ZL1G1VUbFpBX9TfMIdvcBhYyjIM/xV0dbtk1O2wbpHPJDkPRv/cZjIHmONdqG+ASt9BSA5A==;EndpointSuffix=core.windows.net";

QueueClient queueClient = new QueueClient(connectionString, "mytestqueue1");


// Create the queue
queueClient.CreateIfNotExists();


if (queueClient.Exists())
{
    // Send a message to the queue
    string message ="this is a queue message!";
    queueClient.SendMessage(message);
}

if (queueClient.Exists())
{
    QueueProperties properties = queueClient.GetProperties();

    // Retrieve the cached approximate message count.
    int cachedMessagesCount = properties.ApproximateMessagesCount;

    // Display number of messages.
    Console.WriteLine($"Number of messages in queue: {cachedMessagesCount}");
}


Console.WriteLine("Press any key to continue");
Console.ReadKey();