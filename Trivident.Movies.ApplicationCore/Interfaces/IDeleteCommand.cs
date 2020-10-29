using System.Threading.Tasks;

namespace Trivident.Movies.ApplicationCore.Interfaces
{
    public interface IDeleteCommand<T>
    {
        Task ExecuteAsync(string id);
    }
}