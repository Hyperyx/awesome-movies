using System.Threading.Tasks;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.ApplicationCore.Interfaces;
using Trivident.Movies.Infrastructure.Data.Interfaces;

namespace Trivident.Movies.Infrastructure.Commands
{
    public class MovieCreateCommand : ICreateCommand<Movie>
    {
        private readonly IMoviesContext _context;

        public MovieCreateCommand(IMoviesContext context)
        {
            _context = context;
        }

        public async Task<Movie> ExecuteAsync(Movie movie)
        {
            await _context.Movies.InsertOneAsync(movie);
            return movie;            
        }
    }
}