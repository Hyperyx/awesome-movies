using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
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
            await _context.Movies.DeleteOneAsync(w => w.Id == id, new DeleteOptions());
        }
    }
}