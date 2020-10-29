using System.Threading.Tasks;
using Trivident.Movies.ApplicationCore.Entities;

namespace Trivident.Movies.ApplicationCore.Interfaces
{
    public interface ICreateCommand<T>
    {
        Task<Movie> ExecuteAsync(T entity);
    }
}