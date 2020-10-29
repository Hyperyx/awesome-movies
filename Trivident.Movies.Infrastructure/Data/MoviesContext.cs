using MongoDB.Driver;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.Infrastructure.Data.Interfaces;
using Trivident.Movies.SharedKernel.Configuration.Interfaces;

namespace Trivident.Movies.Infrastructure.Data
{
    public class MoviesContext : IMoviesContext      
    {
        public MoviesContext(ITestDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            this.Movies = database.GetCollection<Movie>(settings.MoviesCollectionName);
        }

        public IMongoCollection<Movie> Movies { get; private set; }
    }
}