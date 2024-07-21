namespace Models.ProductModels
{
    public class Product
    {
        public int Id { get; set; }
        public string ProductId { get; set; } = string.Empty;
        public string ProductCategoryId { get; set; } = string.Empty;
        public int BarCode { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public string ProductSKU { get; set; } = string.Empty;
        public string ProductSlug { get; set; } = string.Empty; 
        public string Collections { get; set; } = string.Empty;
        public string Brand { get; set; } = string.Empty;
        public string ProductTags { get; set; } = string.Empty;
        public string ProductDescription { get; set; } = string.Empty;
        public string ProductImage { get; set; } = string.Empty;
        public ProductStatus ProductStatus { get; set; }
        public  TaxCategory TaxCategory { get; set; }
        public ProductAttributes ProductAttributes { get; set; }
        public List<ProductVariant>? ProductVariants { get; set; }
    }
}
public enum ProductStatus
{
    Published,
    Inactive,
    Scheduled,
}
public enum TaxCategory
{
    ZeroRated,
    Exempted,
    VATable,
    EightPercentVAT,
}
public enum ProductAttributes
{
    Fragile,
    BioDegradable,
    Frozen,
    Perishable,
    Hazardous,
    Flammable,
    Explosive,
    Corrosive,
    Toxic,
    Radioactive
}