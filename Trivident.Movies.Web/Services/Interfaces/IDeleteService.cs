using System.Threading.Tasks;

namespace Trivident.Movies.Web.Services.Interfaces
{
    public interface IDeleteService<T>
    {
        Task ExecuteAsync(string id);
    }
}