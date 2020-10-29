using System.Threading.Tasks;

namespace Trivident.Movies.Web.Services.Interfaces
{
    public interface IDetailsService<T>
    {
        Task<T> ExecuteAsync(string id);
    }
}