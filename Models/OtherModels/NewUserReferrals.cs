using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.OtherModels
{
    public  class NewUserReferrals
    {
        public int Id { get; set; }
        public string ReferralCode { get; set; } = string.Empty;
        public string ReferralUserId { get; set; } = string.Empty;
        public string ReferredUserId { get; set; } = string.Empty;
        public ReferralStatus ReferralStatus { get; set; }
    }
}
public enum ReferralStatus
{
    Active,
    Cancelled,
    Pending,
    Rejected
}
