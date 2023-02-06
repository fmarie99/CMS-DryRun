using API.Data;
using API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// add the JsonFileService as a scoped
builder.Services.AddScoped<JsonFileService>();

// Add the JsonFileRepository as scoped
builder.Services.AddScoped<JsonFileRepository>();

// add automapper as scoped
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Frontend (ReactTS) => React runs on localhost:3000

// add a cors policy to accept http requests from localhost:3000
app.UseCors(options => options.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();
