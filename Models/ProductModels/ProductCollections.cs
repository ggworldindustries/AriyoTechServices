using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ProductModels
{
    public class ProductCollections
    {
        public int Id { get; set; }
        public string CollectionId { get; set; } = string.Empty;
        public string CollectionName { get; set; } = string.Empty;
        public string CollectionDescription { get; set; } = string.Empty;
        public string CollectionImage { get; set; } = string.Empty;
        public string CollectionSlug { get; set; } = string.Empty;
        public string CollectionTags { get; set; } = string.Empty;

    }
}
