using System;
using System.Threading.Tasks;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.ApplicationCore.Interfaces;
using Trivident.Movies.Web.Services.Interfaces;

namespace Trivident.Movies.Web.Services
{
    public class MovieCreateService : ICreateService<Movie>
    {
		private readonly ICreateCommand<Movie> _command;

		public MovieCreateService(ICreateCommand<Movie> command)
		{
            this._command = command ?? throw new ArgumentNullException(nameof(command));
		}
        
		public async Task<Movie> ExecuteAsync(Movie movie) => await _command.ExecuteAsync(movie);
    }
}