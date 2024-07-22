using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.UserAccountModel
{
    public  class UserAccount
    {
        public int Id { get; set; }
        public string UserId { get; set; } =  string.Empty;
        public string Currency { get; set; } = string.Empty;        
        public List<UserLoyaltyProgram>? UserLoyaltyProgram { get; set; }

    }
}
