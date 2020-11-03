using System.Threading.Tasks;
using MongoDB.Driver;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.ApplicationCore.Interfaces;
using Trivident.Movies.Infrastructure.Data.Interfaces;

namespace Trivident.Movies.Infrastructure.Commands
{
    public class MovieEditCommand : IEditCommand<Movie>
    {
        private readonly IMoviesContext _context;

        public MovieEditCommand(IMoviesContext context)
        {
            _context = context;
        }

        public async Task ExecuteAsync(string id, Movie movieIn)
        {
            await _context.Movies.ReplaceOneAsync(w => w.Id == id, movieIn, new ReplaceOptions { IsUpsert = true });
        }
    }
}