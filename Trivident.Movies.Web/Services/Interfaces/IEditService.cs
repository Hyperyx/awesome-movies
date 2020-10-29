using System.Threading.Tasks;

namespace Trivident.Movies.Web.Services.Interfaces
{
    public interface IEditService<T>
    {
        Task ExecuteAsync(string id, T entityIn);
    }
}