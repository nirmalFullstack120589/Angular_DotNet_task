using ProductApi.Models;

namespace ProductApi.Repositories
{
    public interface IProductRepository
    {
        Task CreateProduct(Product product);
        Task<List<Product>> GetProducts();
    }
}
