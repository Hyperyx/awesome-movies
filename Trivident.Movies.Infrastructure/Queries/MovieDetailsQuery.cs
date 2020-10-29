using System.Threading.Tasks;
using MongoDB.Driver;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.ApplicationCore.Interfaces;
using Trivident.Movies.Infrastructure.Data.Interfaces;

namespace Trivident.Movies.Infrastructure.Queries
{
    public class MovieDetailsQuery : IDetailsQuery<Movie>
    {
        private readonly IMoviesContext _context;

        public MovieDetailsQuery(IMoviesContext context)
        {
            _context = context;
        }

        public async Task<Movie> ExecuteAsync(string id)
        {
            return await _context.Movies.Find<Movie>(movie => movie.Id == id).FirstOrDefaultAsync();
        }
    }
}