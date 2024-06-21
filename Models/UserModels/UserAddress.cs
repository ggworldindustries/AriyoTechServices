namespace Models.UserModels
{
    public class UserAddress
    {
        public int Id { get; set; }
        public string UserId { get; set; } = string.Empty;
        public DeliveryLocation DeliveryLocation { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string SecondName { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public string Address1 { get; set; } = string.Empty;
        public string Address2 { get; set; } = string.Empty;
        public string LandMark { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string County { get; set; } = string.Empty;
        public string ZipCode { get; set; } = string.Empty;
        public bool BillingAddress { get; set; }

    }
}
public enum DeliveryLocation
{
    Home,
    Office
}