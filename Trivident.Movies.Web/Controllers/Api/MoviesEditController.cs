using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.Web.Services.Interfaces;

namespace Trivident.Movies.Web.Controllers.Api
{
    public partial class MoviesController
    {
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Edit(
            [FromServices] IEditService<Movie> editService, 
            [FromServices] IDetailsService<Movie> detailsService, 
            string id, 
            Movie movieIn)
        {
            if (editService is null) throw new ArgumentNullException(nameof(editService));
            if (detailsService is null) throw new ArgumentNullException(nameof(detailsService));
            
            return await EditInternal(editService, detailsService, id, movieIn);
        }

        private async Task<IActionResult> EditInternal(
            IEditService<Movie> editService,
            IDetailsService<Movie> detailsService, 
            string id, 
            Movie movieIn)
        {
            var movie = await detailsService.ExecuteAsync(id);
            if (movie == null)
            {
                return NotFound();
            }
            await editService.ExecuteAsync(id, movieIn);
            return NoContent();            
        }           
    }
}