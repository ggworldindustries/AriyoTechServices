// Ignore Spelling: Ariyotech

using Microsoft.EntityFrameworkCore;
using Models.OrderModels;
using Models.ProductModels;

namespace AriyotechMainApi.DBContext
{
    public class AriyotechDbContext : DbContext
    {
        public AriyotechDbContext(DbContextOptions<AriyotechDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {


            //Product models
            modelBuilder.Entity<Product>().OwnsOne(sh=>sh.ProductVariants);
            modelBuilder.Entity<ProductCategory>();
            modelBuilder.Entity<ProductCollections>();
            modelBuilder.Entity<ProductRatting>();

            // Order models
            modelBuilder.Entity<OrderModel>();
            modelBuilder.Entity<OrderDetails>();


        }

       
    }
    
}

