using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace EshopPosAdmin.Controllers
{
    public class ThemeController : Controller
    {
        [HttpGet]
        [Microsoft.AspNetCore.Mvc.Route("CreateThemeCookie")]
        public IActionResult CreateThemeCookie(string cookievalue)
        {
            
            CookieOptions cp = new()
            {
                MaxAge = TimeSpan.FromDays(180),
                SameSite = SameSiteMode.Strict,
            };
            Response.Cookies.Append("theme", cookievalue, cp);
            var res = Request.Cookies["theme"];
            return Ok(res);
        }

        [HttpGet]
        [Microsoft.AspNetCore.Mvc.Route("GetTheme")]
        public IActionResult GetTheme()
        {
            CookieOptions cp = new()
            {
                MaxAge = TimeSpan.FromDays(180),
                SameSite = SameSiteMode.Strict,
            };

            var res =  Request.Cookies["theme"];
            if (res == null)
            {
                bool isdark = false;
                Response.Cookies.Append("theme", isdark.ToString(), cp);
                return Ok(isdark);
            }
            else
            {
                bool isdark = false;
                if (res == "true")
                {
                    isdark =  true;

                }
                else
                {
                    isdark = false;
                }
                return Ok(isdark);
            }
          
        }
    }
}
