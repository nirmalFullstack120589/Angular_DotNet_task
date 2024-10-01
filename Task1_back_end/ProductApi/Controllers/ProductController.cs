using Microsoft.AspNetCore.Mvc;
using ProductApi.Models;
using ProductApi.Repositories;

namespace ProductApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _repository;
        public ProductController(IProductRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        [Route("CreateProduct")]
        public async Task<IActionResult> CreateProduct(Product product)
        {
            try
            {
                await _repository.CreateProduct(product);
                return CreatedAtAction(nameof(CreateProduct), new { id = product.Id }, product);
            }
            catch (Exception ex)
            {
                return Problem("An error occurred while creating product.");
            }
        }

        [HttpGet]
        [Route("GetProducts")]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            try
            {
                var products = await _repository.GetProducts();
                return Ok(products);
            }
            catch (Exception)
            {

                return Problem("An error occurred while fetching products.");
            }
        }
    }
}
