// See https://aka.ms/new-console-template for more information
using Azure.Messaging.ServiceBus;

// connection string to your Service Bus namespace
string connectionString = "Endpoint=sb://az204svcbus18781.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=4Hj9aiVwPWRjW91ER+4i+xwPJ4pG/xfNs+ASbE9YdYM=";

// name of your Service Bus topic
string queueName = "az204-queue";

ServiceBusClient client;

ServiceBusSender sender;

client = new ServiceBusClient(connectionString);

sender = client.CreateSender(queueName);

using ServiceBusMessageBatch messageBatch = await sender.CreateMessageBatchAsync();
for (int i =1; i <=3;i++)
{
    if(!messageBatch.TryAddMessage(new ServiceBusMessage($"Message {i}")))
    {
        throw new Exception($"Exception{i} has occurred");
    }

}

    try
    {
        await sender.SendMessagesAsync(messageBatch);
        System.Console.WriteLine($"A batch of three message has been published to the queue");
    }

    finally
    {
 // Calling DisposeAsync on client types is required to ensure that network
    // resources and other unmanaged objects are properly cleaned up.
    await sender.DisposeAsync();
    await client.DisposeAsync();
    }


Console.WriteLine("Follow the directions in the exercise to review the results in the Azure portal.");
Console.WriteLine("Press any key to continue");
Console.ReadKey();

ServiceBusProcessor processor;

client = new ServiceBusClient(connectionString);
// create a processor that we can use to process the messages
processor = client.CreateProcessor(queueName, new ServiceBusProcessorOptions());

try
{
    processor.ProcessMessageAsync += MessageHandler;
    processor.ProcessErrorAsync += ErrorHandler;

    await processor.StartProcessingAsync();

    Console.WriteLine("Wait for a minute and then press any key to end the processing");
    Console.ReadKey();

    // stop processing 
    Console.WriteLine("\nStopping the receiver...");
    await processor.StopProcessingAsync();
    Console.WriteLine("Stopped receiving messages");

}
finally
{
    await processor.DisposeAsync();
    await client.DisposeAsync();
}

// handle received messages
async Task MessageHandler(ProcessMessageEventArgs args)
{
    string body = args.Message.Body.ToString();
    Console.WriteLine($"Received: {body}");

    // complete the message. messages is deleted from the queue. 
    await args.CompleteMessageAsync(args.Message);
}

// handle any errors when receiving messages
Task ErrorHandler(ProcessErrorEventArgs args)
{
    Console.WriteLine(args.Exception.ToString());
    return Task.CompletedTask;
}