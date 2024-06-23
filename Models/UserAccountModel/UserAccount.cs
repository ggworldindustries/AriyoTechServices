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
        public int Currency { get; set; }

    }
}
