using System.Threading.Tasks;

namespace Trivident.Movies.Web.Services.Interfaces
{
    public interface ICreateService<T>
    {
        Task<T> ExecuteAsync(T entity);
    }
}