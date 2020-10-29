using System.Threading.Tasks;

namespace Trivident.Movies.ApplicationCore.Interfaces
{
    public interface IEditCommand<T>
    {
        Task ExecuteAsync(string id, T entity);
    }
}