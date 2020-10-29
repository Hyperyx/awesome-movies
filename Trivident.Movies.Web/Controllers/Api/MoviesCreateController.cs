using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.Web.Services.Interfaces;

namespace Trivident.Movies.Web.Controllers.Api
{
    public partial class MoviesController
    {
        [HttpPost]
        public async Task<IActionResult> Create([FromServices] ICreateService<Movie> service, Movie movie)
        {
            if (service is null) throw new ArgumentNullException(nameof(service));
            
            return await CreateInternal(service, movie);
        }

        private async Task<IActionResult> CreateInternal(ICreateService<Movie> service, Movie movie)
        {
            await service.ExecuteAsync(movie);
            return CreatedAtRoute("GetMovie", new { id = movie.Id.ToString() }, movie);
        }        
    }
}