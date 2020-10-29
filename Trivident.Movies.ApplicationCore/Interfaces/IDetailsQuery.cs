using System.Threading.Tasks;

namespace Trivident.Movies.ApplicationCore.Interfaces
{
    public interface IDetailsQuery<T>
    {
        Task<T> ExecuteAsync(string id);
    }
}