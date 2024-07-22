using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.UserAccountModel
{
    public class UserLoyaltyProgram
    {
       public int LoyaltyPoints { get; set; }

        public DateTime DateTimeEarned { get; set; } = DateTime.Now;

    }
}
