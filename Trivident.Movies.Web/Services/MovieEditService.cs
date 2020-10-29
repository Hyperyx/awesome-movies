using System;
using System.Threading.Tasks;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.ApplicationCore.Interfaces;
using Trivident.Movies.Web.Services.Interfaces;

namespace Trivident.Movies.Web.Services
{
    public class MovieEditService : IEditService<Movie>
    {
		private readonly IEditCommand<Movie> _command;

		public MovieEditService(IEditCommand<Movie> command)
		{
            this._command = command ?? throw new ArgumentNullException(nameof(command));
		}
        
		public async Task ExecuteAsync(string id, Movie movieIn) => await _command.ExecuteAsync(id, movieIn);
    }
}