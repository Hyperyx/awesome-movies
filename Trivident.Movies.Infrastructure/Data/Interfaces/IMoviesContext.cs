using MongoDB.Driver;
using Trivident.Movies.ApplicationCore.Entities;

namespace Trivident.Movies.Infrastructure.Data.Interfaces
{
    public interface IMoviesContext
    {
        IMongoCollection<Movie> Movies { get; }
    }
}