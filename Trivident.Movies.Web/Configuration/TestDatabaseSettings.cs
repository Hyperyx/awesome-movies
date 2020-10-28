using Trivident.Movies.Web.Configuration.Interfaces;

namespace Trivident.Movies.Web.Configuration
{
    public class TestDatabaseSettings : ITestDatabaseSettings
    {
        public string MoviesCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }   
}