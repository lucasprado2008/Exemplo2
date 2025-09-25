using Microsoft.AspNetCore.Mvc;

namespace Exemplo2.Controllers
{
    public class InicioController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
