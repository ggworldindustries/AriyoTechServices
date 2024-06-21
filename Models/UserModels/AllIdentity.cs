using Microsoft.AspNetCore.Identity;

namespace Models.UserModels
{
    public class AllIdentity: IdentityUser
    {

        public int CustomerId { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public UserGender UserGender { get; set; }
        public string ProfilePicture { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public string County { get; set; } = string.Empty;
        public UserStatus UserStatus {  get; set; }
        public PreferredSalutation PreferredSalutation { get; set; }
        [ProtectedPersonalData]
        public string SecondEmail { get; set; } = string.Empty;

    }

}
public enum UserGender
{
    Male,
    Female,
    Other
}
public enum UserStatus
{
    InActive,
    Active,
    Blocked
}
public enum PreferredSalutation
{
    Mr,
    Mrs,
    Ms,
    None
}
