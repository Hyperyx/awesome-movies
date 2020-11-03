namespace Trivident.Movies.SharedKernel.Configuration.Interfaces
{
    public interface IMovieDatabaseSettings
    {
        string MoviesCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    } 
}