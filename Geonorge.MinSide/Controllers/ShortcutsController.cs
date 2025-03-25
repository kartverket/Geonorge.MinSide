using Geonorge.MinSide.Infrastructure.Context;
using Geonorge.MinSide.Services.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Geonorge.MinSide.Controllers
{
    public class ShortcutsController : Controller
    {
        private readonly OrganizationContext _context;
        public ShortcutsController(OrganizationContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            if (!User.Identity.IsAuthenticated && Request.Cookies["_loggedIn"] == "true")
            {
                return RedirectToAction("LogIn", "Authentication");
            }
            else if (!User.Identity.IsAuthenticated)
            {
                HttpContext.Session.Clear();
                return View("LogIn");
            }

            var username = HttpContext.User.Claims.Where(c => c.Type == "preferred_username").FirstOrDefault().Value;

            var shortcuts = _context.Shortcuts.Where(s => s.Username == username).OrderBy(o => o.Name).ToList(); //todo order by date.

            return View(shortcuts);
        }
    }
}
