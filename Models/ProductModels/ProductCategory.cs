using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ProductModels
{
    public class ProductCategory
    {
        public int Id { get; set; }
        public string CategoryId { get; set; } = string.Empty;
        public string CategoryName { get; set; } = string.Empty;
        public string CategorySlug { get; set; } = string.Empty;
        public string CategoryDescription { get; set; } = string.Empty;
        public string CategoryImage { get; set; } = string.Empty;
        public CategoryStatus CategoryStatus { get; set; }
        public ParentCategoryStatus ParentCategoryStatus { get; set; }
    }
}
public enum CategoryStatus
{
    Published,
    Inactive,
    Scheduled,
}
public enum ParentCategoryStatus
{
    Electronic,
    HouseHold,
    Office,
    Automotive,
    Management
}