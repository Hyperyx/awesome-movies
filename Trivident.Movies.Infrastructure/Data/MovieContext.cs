using MongoDB.Driver;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.SharedKernel.Configuration.Interfaces;

namespace Trivident.Movies.Infrastructure.Data
{
    public class MovieContext
    {
        public MovieContext(ITestDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            this.Movies = database.GetCollection<Movie>(settings.MoviesCollectionName);
        }

        public IMongoCollection<Movie> Movies { get; private set; }
    }
}