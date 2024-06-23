using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.UserModels
{
    public class UserPaymentMethod
    {
        public int Id { get; set; }
        public string UserId { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string NotificationEmail { get; set; } = string.Empty;
        public string PaymentMethodName { get; set; } = string.Empty;
        public string CardNumber { get; set; } = string.Empty;
        public string CardHolderName { get; set; } = string.Empty;
        public DateOnly ExpiryDate { get; set; } 
        public string CVV { get; set; } = string.Empty;
        public bool Default { get; set; }
    }
}
