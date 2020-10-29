using Microsoft.AspNetCore.Mvc;

namespace Trivident.Movies.Web.Controllers
{
    public class MoviesPageController : Controller
    {
        [HttpGet]
        public IActionResult Index() => View();
    }
}