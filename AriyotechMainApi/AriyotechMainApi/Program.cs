using AriyotechMainApi.DBContext;
using EasyCaching.Core.Configurations;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionstring = string.Empty;
#if DEBUG
    connectionstring = builder.Configuration.GetConnectionString("LocalDatabase");
#else
    connectionstring = builder.Configuration.GetConnectionString("AWSMYSQLDatabase");
#endif
//builder.Services.AddDbContext<AriyotechDbContext>(options =>
//#if DEBUG
//options.

//.EnableDetailedErrors());

builder.Services.AddEasyCaching(options =>
{
    //use memory cache that named default
    options.UseInMemory("default");

    // // use memory cache with your own configuration
    // options.UseInMemory(config => 
    // {
    //     config.DBConfig = new InMemoryCachingOptions
    //     {
    //         // scan time, default value is 60s
    //         ExpirationScanFrequency = 60, 
    //         // total count of cache items, default value is 10000
    //         SizeLimit = 100 
    //     };
    //     // the max random second will be added to cache's expiration, default value is 120
    //     config.MaxRdSecond = 120;
    //     // whether enable logging, default is false
    //     config.EnableLogging = false;
    //     // mutex key's alive time(ms), default is 5000
    //     config.LockMs = 5000;
    //     // when mutex key alive, it will sleep some time, default is 300
    //     config.SleepMs = 300;
    // }, "m2");

    //use redis cache that named redis1
    options.UseRedis(config =>
    {
        config.DBConfig.Endpoints.Add(new ServerEndPoint("44.207.81.137", 6379));
    }, "redis1");
});    
     

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
