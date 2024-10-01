// Data/ProductContext.cs
using MongoDB.Driver;
using ProductApi.Models;

namespace ProductApi.Data
{
    public class ProductContext
    {
        private readonly IMongoDatabase _database;

        public ProductContext(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("ProductDb"));
            _database = client.GetDatabase("ProductDb");
        }

        public IMongoCollection<Product> Products => _database.GetCollection<Product>("Products");
    }
}
