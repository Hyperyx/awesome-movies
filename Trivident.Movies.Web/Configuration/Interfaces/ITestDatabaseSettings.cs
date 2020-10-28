namespace Trivident.Movies.Web.Configuration.Interfaces
{
    public interface ITestDatabaseSettings
    {
        string MoviesCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    } 
}