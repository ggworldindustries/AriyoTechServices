using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ProductModels
{
    public class ProductVariant
    {
        public int Id { get; set; }
        public string ProductVariantId { get; set; } = string.Empty;
        public string ProductId { get; set; } = string.Empty;
        public string ProductVariantName { get; set; } = string.Empty;
        public string ProductVariantSKU { get; set; } = string.Empty;
        public string ProductVariantDescription { get; set; } = string.Empty;
        public string ProductVariantImage { get; set; } = string.Empty;
        public int ProductVariantPrice { get; set; } 
        public bool ProductVariantDiscount { get; set; } 
        public int ProductVariantDiscountPrice { get; set; }
        public DateOnly DiscountStartDate { get; set; }
        public DateOnly DiscountEndDate { get; set; }
        public TimeOnly DiscountStartTime { get; set; }
        public TimeOnly DiscountEndTime { get; set; }
        public int ItemLength { get; set; }
        public int ItemWidth { get; set; }
        public int ItemHeight { get; set; }
        public int ItemWeight { get; set; }

        public int ItemQuantity { get; set; }
        public ProductStatus ProductVariantStatus { get; set; }

    }
}
