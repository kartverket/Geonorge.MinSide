using Geonorge.MinSide.Infrastructure.Context;
using Geonorge.MinSide.Services.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
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

        public IActionResult Index(string orderby = "name_asc")
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

            List<Shortcut> shortcuts = new List<Shortcut>();

            if(orderby == "name_desc") { 
                shortcuts = _context.Shortcuts.Where(s => s.Username == username).OrderByDescending(o => o.Name).ToList();
                ViewBag.orderbyname = "name_asc";
                ViewBag.orderbydate = "date_asc";
            }
            else if (orderby == "date_desc") { 
                shortcuts = _context.Shortcuts.Where(s => s.Username == username).OrderByDescending(o => o.Date).ToList();
                ViewBag.orderbyname = "name_asc";
                ViewBag.orderbydate = "date_asc";
            }
            else if (orderby == "date_asc") { 
                shortcuts = _context.Shortcuts.Where(s => s.Username == username).OrderBy(o => o.Date).ToList();
                ViewBag.orderbyname = "name_asc";
                ViewBag.orderbydate = "date_desc";
            }
            else { 
                shortcuts = _context.Shortcuts.Where(s => s.Username == username).OrderBy(o => o.Name).ToList();
                ViewBag.orderbyname = "name_desc";
                ViewBag.orderbydate= "date_asc";
            }

            return View(shortcuts);
        }
    }
}
