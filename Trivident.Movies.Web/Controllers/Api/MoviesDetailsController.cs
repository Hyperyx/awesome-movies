using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.Web.Services.Interfaces;

namespace Trivident.Movies.Web.Controllers.Api
{
    public partial class MoviesController
    {
        [HttpGet("{id:length(24)}", Name = "GetMovie")]
        public async Task<IActionResult> Details([FromServices] IDetailsService<Movie> service, string id)
        {
            if (service is null) throw new ArgumentNullException(nameof(service));
            
            return await DetailsInternal(service, id);
        }
        
        private async Task<IActionResult> DetailsInternal(IDetailsService<Movie> service, string id)
        {
            var movie = await service.ExecuteAsync(id);
            if (movie == null)
            {
                return NotFound();
            }
            return Ok(movie);
        }        
    }
}