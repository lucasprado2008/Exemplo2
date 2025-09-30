using Microsoft.AspNetCore.Mvc;

namespace Exemplo2.Controllers
{
    public class CatalogoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
