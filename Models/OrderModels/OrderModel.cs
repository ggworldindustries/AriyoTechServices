using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.OrderModels
{
    public class OrderModel
    {
        public int Id { get; set; } 
        public int OrderId { get; set; }
        public string CustomerId { get; set; } = string.Empty;
        public DateOnly DateDelivery { get; set; }
        public TimeOnly TimeDelivery { get; set; }
        public DateOnly DateCreated { get; set; }
        public TimeOnly TimeCreated { get; set; }
        public string Address { get; set; } = string.Empty;
        public PaymentStatus PaymentStatus { get; set; }
        public string PaymentMethod { get; set; } = string.Empty;
        public string PaymentReference { get; set; } = string.Empty;
        public OrderStatus OrderStatus { get; set; }
    }
}

public enum PaymentStatus
{
    Paid,
    Unpaid,
    Pending,
    Fail,
    Success,
    Cancelled,
    Refunded
}

public enum OrderStatus
{
    Delivered,
    OutforDelivery,
    Dispatched,
    ReadyfroPickup,
    Returning,
    Cancelled
}
