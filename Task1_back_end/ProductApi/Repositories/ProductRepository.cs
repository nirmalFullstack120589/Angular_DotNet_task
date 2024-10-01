using MongoDB.Driver;
using ProductApi.Data;
using ProductApi.Models;

namespace ProductApi.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ProductContext _context;
        public ProductRepository(ProductContext context)
        {
            _context = context;

            var indexKeys = Builders<Product>.IndexKeys.Ascending(p => p.Name).Ascending(p => p.Price);
            var indexModel = new CreateIndexModel<Product>(indexKeys);
            _context.Products.Indexes.CreateOne(indexModel);
        }

        public async Task CreateProduct(Product product)
        {
            await _context.Products.InsertOneAsync(product);
        }

        public async Task<List<Product>> GetProducts()
        {
            return await _context.Products.Find(_ => true).ToListAsync();
        }
    }
}
