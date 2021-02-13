using DocumentationGen.Models;
using IdentityServer4.Services;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace DocumentationGen.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<OidcConfigurationController> logger;
        private IIdentityServerInteractionService _interaction;

        public HomeController(IIdentityServerInteractionService interaction, ILogger<OidcConfigurationController> _logger)
        {
            _interaction = interaction;
            logger = _logger;
        }

        public async Task<IActionResult> Error(string errorId)
        {
            //return View();
            ErrorViewModel errorViewModel = new ErrorViewModel();
            var message = await _interaction.GetErrorContextAsync(errorId);
            if (message != null)
                errorViewModel.Error = message;
            return View("Error", errorViewModel);
        }
    }
}
