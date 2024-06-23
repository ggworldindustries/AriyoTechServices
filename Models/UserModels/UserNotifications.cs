using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.UserModels
{
    public class UserNotifications
    {
        public int Id { get; set; } 

        public string UserId { get; set; } = string.Empty;
        public List<UserSelectCommunication> UserSelectCommunications { get; set; } = new List<UserSelectCommunication>();
    }
}
public enum CommunicationType
{
    OrderStatus,
    UpcomingSale,
    SpecialOffers,
    NewItemArrival,
    Shipping
}
public class UserSelectCommunication
{
    public int Id { get; set; }
    public CommunicationType CommunicationType { get; set; }
    public string Email { get; set; } = string.Empty;
    public string Browser { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string App { get; set; } = string.Empty;
    public bool IsActive { get; set; }
}
