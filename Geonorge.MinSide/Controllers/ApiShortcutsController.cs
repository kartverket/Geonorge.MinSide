using Geonorge.MinSide.Infrastructure.Context;
using Geonorge.MinSide.Models;
using Geonorge.MinSide.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Policy;
using System.Security.Principal;
using System.Threading.Tasks;
using System.Web;

namespace Geonorge.MinSide.Controllers
{
    [Route("api/shortcut")]
    [ApiController]

    public class ApiShortcutsController : ControllerBase
    {

        private readonly OrganizationContext _context;
        public ApiShortcutsController(OrganizationContext context)
        {
            _context = context;
        }

        [HttpGet]
        [ProducesResponseType(typeof(ShortcutData), 200)]
        [ProducesResponseType(typeof(UnauthorizedResult), 401)]
        [ProducesResponseType(typeof(string), 500)]
        [ProducesResponseType(typeof(NotFoundResult), 404)]

        public async Task<IActionResult> Get(string url)
        {
            var auth = HttpContext.RequestServices.GetRequiredService<IGeonorgeAuthorizationService>();
            var username = await auth.GetUserNameFromIntrospection(HttpContext.Request.Headers["Authorization"]);
            if (username == null)
                return Unauthorized();

            var shortCutFromDb = await _context.Shortcuts.FirstOrDefaultAsync(s => s.Url == url && s.Username == username);

            if (shortCutFromDb == null)
                return NotFound();

            var shortcut = new ShortcutData
            {
                Name = shortCutFromDb.Name,
                Url = shortCutFromDb.Url
            };

            return Ok(shortcut);
        }
        [ProducesResponseType(typeof(Shortcut), 200)]
        [HttpPost]
        public IActionResult Post(ShortcutData shortcutInput)
        {
            if(string.IsNullOrEmpty(shortcutInput.Url))
                throw new System.Exception("Url is required");

            var auth = HttpContext.RequestServices.GetRequiredService<IGeonorgeAuthorizationService>();
            var username = auth.GetUserNameFromIntrospection(HttpContext.Request.Headers["Authorization"]).Result;
            if (username == null)
                return Unauthorized();

            //todo check if exists?

            var shortcut = new Shortcut
            {
                Name = string.IsNullOrEmpty(shortcutInput.Name) ? shortcutInput.Url : shortcutInput.Name,
                Url = shortcutInput.Url,
                Date = System.DateTime.Now,
                Username = username
            };

            _context.Shortcuts.Add(shortcut);
            _context.SaveChanges();

            return Ok(shortcut);
        }

        [ProducesResponseType(typeof(void), 200)]
        [ProducesResponseType(typeof(UnauthorizedResult), 401)]
        [ProducesResponseType(typeof(string), 500)]
        [HttpDelete]
        public IActionResult Delete(UrlInput input)
        {

            var auth = HttpContext.RequestServices.GetRequiredService<IGeonorgeAuthorizationService>();
            var username = auth.GetUserNameFromIntrospection(HttpContext.Request.Headers["Authorization"]).Result;
            if (username == null)
                return Unauthorized();

            var shortCutFromDb = _context.Shortcuts.FirstOrDefault(s => s.Url == input.Url && s.Username == username);
            _context.Shortcuts.Remove(shortCutFromDb);
            _context.SaveChanges();

            return Ok();
        }
    }

    public class ShortcutData
    {
        public string Name { get; set; }
        public string Url { get; set; }
    }

    public class UrlInput
    {
        public string Url { get; set; }
    }
}
