using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.UserAccountModel
{
    public class UserCoupons
    {
        public int Id { get; set; }
        public string CouponName { get; set; } = string.Empty;
        public DateOnly DateIssued { get; set; }
        public TimeOnly TimeIssued { get; set; } 
        public DateOnly ExpiryDate {  get; set; }
        public TimeOnly ExpiryTime { get; set; }
        public int CouponAmount { get; set; }
    }
}
