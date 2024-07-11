﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.UserAccountModel
{
    public  class UserAccountTransactions
    {
        public int Id { get; set; }
        public int AmountTransacted { get; set; }
        public DateOnly DateTransacted { get; set; }
        public TimeOnly TimeTransacted { get; set; }
        public string TransactionReason { get; set; } = string.Empty;

    }
}