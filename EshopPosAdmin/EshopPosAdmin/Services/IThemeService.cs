namespace EshopPosAdmin.Services
{
    public interface IThemeService
    {
       public Task  SetTheme(string themeName);
       public Task  GetTheme();



    }
}
