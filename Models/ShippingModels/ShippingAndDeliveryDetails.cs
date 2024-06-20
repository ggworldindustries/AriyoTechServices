using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ShippingModels
{
    public class ShippingAndDeliveryDetails
    {
        public int Id { get; set; }
        public string ShippingName { get; set; } = string.Empty;
        public ProductAttributes ProductAttributes { get; set; }
        public ShippingType ShippingType { get; set; }
        public int VolumetricPricePerKm { get; set; }
        public string ShippingPriceJustification { get; set; } = string.Empty;

    }
}
public enum ShippingType
{
    Air,
    Road,
    Rail,
    Ship,
    PSV
}
