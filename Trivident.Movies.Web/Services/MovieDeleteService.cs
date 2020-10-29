using System;
using System.Threading.Tasks;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.ApplicationCore.Interfaces;
using Trivident.Movies.Web.Services.Interfaces;

namespace Trivident.Movies.Web.Services
{
    public class MovieDeleteService : IDeleteService<Movie>
    {
		private readonly IDeleteCommand<Movie> _command;

		public MovieDeleteService(IDeleteCommand<Movie> command)
		{
            this._command = command ?? throw new ArgumentNullException(nameof(command));
		}
        
		public async Task ExecuteAsync(string id) => await _command.ExecuteAsync(id);
    }
}