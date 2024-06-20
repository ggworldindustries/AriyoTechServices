using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ShippingModels
{
    public  class OrderShippingActivity
    {
        public int Id { get; set; }
        public string OrderId {  get; set; } = string.Empty;
        public ShippingActivity ShippingActivity { get; set; }
        public DateTime ActivityDate { get; set; }
        public string ShippingActivityDec { get; set; } = string.Empty; 
    }
}
public enum ShippingActivity
{
    Order_Was_Placed,
    Pick_up,
    Dispatched,
    Package_arrived,
    Dispatched_for_delivery,
    Delivery,
    Returned
}
