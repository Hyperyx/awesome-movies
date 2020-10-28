namespace Trivident.Movies.SharedKernel.Configuration.Interfaces
{
    public interface ITestDatabaseSettings
    {
        string MoviesCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    } 
}