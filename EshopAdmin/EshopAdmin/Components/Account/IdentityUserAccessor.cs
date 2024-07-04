using Microsoft.AspNetCore.Identity;
using Models.UserModels;

namespace EshopAdmin.Components.Account
{
    internal sealed class IdentityUserAccessor(UserManager<AllIdentity> userManager, IdentityRedirectManager redirectManager)
    {
        public async Task<AllIdentity> GetRequiredUserAsync(HttpContext context)
        {
            var user = await userManager.GetUserAsync(context.User);

            if (user is null)
            {
                redirectManager.RedirectToWithStatus("Account/InvalidUser", $"Error: Unable to load user with ID '{userManager.GetUserId(context.User)}'.", context);
            }

            return user;
        }
    }
}
