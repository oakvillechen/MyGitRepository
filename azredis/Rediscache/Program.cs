using StackExchange.Redis;
// connection string to your Redis Cache    
string connectionString = "az204redis17108.redis.cache.windows.net:6380,password=zufOHffy6JsDFJPj7uISq5BTVK1JbhoGbAzCaNSOYQo=,ssl=True,abortConnect=False";

using (var cache = ConnectionMultiplexer.Connect(connectionString))
{
    IDatabase db = cache.GetDatabase();

    // Snippet below executes a PING to test the server connection
    var result = await db.ExecuteAsync("ping");
    Console.WriteLine($"PING = {result.Type} : {result}");

    // Call StringSetAsync on the IDatabase object to set the key "test:key" to the value "100"
    bool setValue = await db.StringSetAsync("test:key", "100");
    Console.WriteLine($"SET: {setValue}");

    // StringGetAsync retrieves the value for the "test" key
    string getValue = await db.StringGetAsync("test:key");
    Console.WriteLine($"GET: {getValue}");

//     db.KeyExpire("test:key", new TimeSpan(0, 0, 10));

//    System.Console.WriteLine("wait for ttl expire");
//    Console.ReadLine();

//     string getValue2 = await db.StringGetAsync("test:key");
//     Console.WriteLine($"GET: {getValue2}");


}