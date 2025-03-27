using Geonorge.MinSide.Infrastructure.Context;
using Geonorge.MinSide.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using System.Web;

namespace Geonorge.MinSide.Controllers
{
    [Route("api/shortcut")]
    [ApiController]

    public class ApiShortcutsController : ControllerBase
    {
        //todo get username from token

        private readonly OrganizationContext _context;
        public ApiShortcutsController(OrganizationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ShortcutInput> Get(UrlInput input)
        {
            var auth = HttpContext.RequestServices.GetRequiredService<IGeonorgeAuthorizationService>();
            var username = await auth.GetUserNameFromIntrospection(HttpContext.Request.Headers["Authorization"]);

            //url = HttpUtility.UrlDecode(url);
            var shortCutFromDb = await _context.Shortcuts.FirstOrDefaultAsync(s => s.Url == input.Url && s.Username == username);

            if (shortCutFromDb == null)
                throw new System.Exception("Shortcut not found"); //todo return 404

            var shortcut = new ShortcutInput
            {
                Name = shortCutFromDb.Name,
                Url = shortCutFromDb.Url
            };

            return shortcut;
        }

        [HttpPost]
        public Shortcut Post(ShortcutInput shortcutInput)
        {
            if(string.IsNullOrEmpty(shortcutInput.Url))
                throw new System.Exception("Url is required");

            var auth = HttpContext.RequestServices.GetRequiredService<IGeonorgeAuthorizationService>();
            var username = auth.GetUserNameFromIntrospection(HttpContext.Request.Headers["Authorization"]).Result;

            var shortcut = new Shortcut
            {
                Name = string.IsNullOrEmpty(shortcutInput.Name) ? shortcutInput.Url : shortcutInput.Name,
                Url = shortcutInput.Url,
                Date = System.DateTime.Now,
                Username = username
            };

            _context.Shortcuts.Add(shortcut);
            _context.SaveChanges();

            return shortcut;
        }

        [HttpDelete]
        public IActionResult Delete(UrlInput input)
        {
            //url = HttpUtility.UrlDecode(url);

            var auth = HttpContext.RequestServices.GetRequiredService<IGeonorgeAuthorizationService>();
            var username = auth.GetUserNameFromIntrospection(HttpContext.Request.Headers["Authorization"]).Result;

            var shortCutFromDb = _context.Shortcuts.FirstOrDefault(s => s.Url == input.Url && s.Username == username);
            _context.Shortcuts.Remove(shortCutFromDb);
            _context.SaveChanges();

            return Ok();
        }
    }

    public class ShortcutInput
    {
        public string Name { get; set; }
        public string Url { get; set; }
    }

    public class UrlInput
    {
        public string Url { get; set; }
    }
}
