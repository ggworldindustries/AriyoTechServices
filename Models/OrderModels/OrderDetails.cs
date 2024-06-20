using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.OrderModels
{
    public  class OrderDetails
    {
        public int Id { get; set; }
        public string OrderId { get; set; }  = string.Empty;
        public string ProductId { get; set; } = string.Empty;
        public string ProductName { get; set; } = string.Empty;
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public decimal Total { get; set; }
        public decimal Discount { get; set; }
        public string Material { get; set; } = string.Empty;
        public int ItemLength { get; set; }
        public int ItemWidth { get; set; }
        public int ItemHeight { get; set; }
        public int ItemWeight { get; set; }
        public DateOnly DateAdded { get; set; }
        public TimeOnly TimeAdded { get; set; }
        public OrderStatus OrderStatus { get; set; }

    }
}
