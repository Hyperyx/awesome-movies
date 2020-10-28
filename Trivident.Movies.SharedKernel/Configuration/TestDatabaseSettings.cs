using Trivident.Movies.SharedKernel.Configuration.Interfaces;

namespace Trivident.Movies.SharedKernel.Configuration
{
    public class TestDatabaseSettings : ITestDatabaseSettings
    {
        public string MoviesCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }   
}