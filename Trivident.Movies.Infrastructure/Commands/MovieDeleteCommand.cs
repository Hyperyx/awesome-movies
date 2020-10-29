using System.Threading.Tasks;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.ApplicationCore.Interfaces;
using Trivident.Movies.Infrastructure.Data.Interfaces;

namespace Trivident.Movies.Infrastructure.Commands
{
    public class MovieDeleteCommand : IDeleteCommand<Movie>
    {
        private readonly IMoviesContext _context;

        public MovieDeleteCommand(IMoviesContext context)
        {
            _context = context;
        }

        public async Task ExecuteAsync(string id)
        {
            await _context.Movies.DeleteOneAsync(id);
        }
    }
}