using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.RazorPages;
using MudBlazor;

namespace EshopPosAdmin.Client.Layout
{
    public class Preload:PageModel
    {
        private readonly AppData appData;
        public readonly HttpContext httpContext;
      
        public Preload(AppData appData, HttpContext _httpContext)
        {
            this.appData = appData;
            httpContext = _httpContext;
        }
        public async Task GetTheme()
        {

        }

        
    }
}
