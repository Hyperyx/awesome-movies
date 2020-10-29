using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.Web.Services.Interfaces;

namespace Trivident.Movies.Web.Controllers.Api
{
    public partial class MoviesController
    {
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(
            [FromServices] IDeleteService<Movie> deleteService,
            [FromServices] IDetailsService<Movie> detailsService,
            string id)
        {
            if (deleteService is null) throw new ArgumentNullException(nameof(deleteService));
            if (detailsService is null) throw new ArgumentNullException(nameof(detailsService));

            return await DeleteInternal(deleteService, detailsService, id);
        }
        
        private async Task<IActionResult> DeleteInternal(
            IDeleteService<Movie> deleteService,
            IDetailsService<Movie> detailsService,
            string id)
        {
            var movie = await detailsService.ExecuteAsync(id);
            if (movie == null)
            {
                return NotFound();
            }            
            await deleteService.ExecuteAsync(id);
            return NoContent();
        }
    }
}