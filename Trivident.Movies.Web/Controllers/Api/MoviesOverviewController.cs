using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.Web.Services.Interfaces;

namespace Trivident.Movies.Web.Controllers.Api
{
    public partial class MoviesController
    {
        [HttpGet]
        public async Task<IActionResult> Overview([FromServices] IListService<Movie> service)
        {
            if (service is null) throw new ArgumentNullException(nameof(service));
            
            return await OverviewInternal(service);
        }
        
        private async Task<IActionResult> OverviewInternal(IListService<Movie> service)
        {
            return Ok(await service.ExecuteAsync());
        }        
    }
}